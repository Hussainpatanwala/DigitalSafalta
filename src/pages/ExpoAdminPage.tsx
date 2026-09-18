import { useEffect, useState } from 'react';
import { SEO } from '../components/SEO';
import { glass, tealBtn, inputCls } from '../lib/constants';
import { Loader2, ToggleLeft, ToggleRight } from 'lucide-react';

const API_BASE = 'https://digitalsafalta-contact.patanwalahussain.workers.dev';

export function ExpoAdminPage() {
  const [adminKey, setAdminKey] = useState('');
  const [active, setActive] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const refreshStatus = () => {
    fetch(`${API_BASE}/exhibition/status`)
      .then(r => r.json())
      .then((d: { active?: boolean }) => setActive(!!d.active))
      .catch(() => setError('Could not load current status.'));
  };

  useEffect(() => { refreshStatus(); }, []);

  const handleToggle = async () => {
    if (!adminKey.trim()) { setError('Enter the admin key first.'); return; }
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/exhibition/toggle`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey.trim() },
        body: JSON.stringify({ active: !active }),
      });
      const data = await res.json() as { success?: boolean; active?: boolean; error?: string };
      if (!res.ok || !data.success) {
        setError(data.error || 'Toggle failed — check the admin key.');
        setLoading(false);
        return;
      }
      setActive(!!data.active);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO title="Expo Admin | Digital Safalta" description="" />
      <div className="pt-28 lg:pt-36 pb-20">
        <div className="max-w-sm mx-auto px-4 sm:px-6">
          <div className={`rounded-2xl p-6 ${glass}`}>
            <h1 className="text-lg font-black text-white mb-1">Expo Checklist — Admin</h1>
            <p className="text-slate-500 text-xs mb-5">Not linked anywhere public. Bookmark this URL.</p>

            <div className="flex items-center gap-3 mb-5 p-3 rounded-xl bg-white/5">
              {active === null ? (
                <Loader2 className="w-5 h-5 text-slate-400 animate-spin" />
              ) : active ? (
                <ToggleRight className="w-6 h-6 text-teal-400 shrink-0" />
              ) : (
                <ToggleLeft className="w-6 h-6 text-slate-500 shrink-0" />
              )}
              <span className="text-sm font-bold text-white">
                {active === null ? 'Checking status...' : active ? 'Checklist is LIVE' : 'Checklist is hidden'}
              </span>
            </div>

            <input
              className={inputCls}
              type="password"
              placeholder="Admin key"
              value={adminKey}
              onChange={e => setAdminKey(e.target.value)}
            />

            {error && <p className="text-red-400 text-xs mt-2">{error}</p>}

            <button onClick={handleToggle} disabled={loading || active === null}
              className={`w-full mt-4 py-3 rounded-xl text-sm font-bold ${tealBtn} disabled:opacity-50`}>
              {loading ? 'Updating...' : active ? 'Turn OFF' : 'Turn ON'}
            </button>

            <button onClick={refreshStatus} className="w-full mt-2 py-2 text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Refresh status
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
