import { SEO } from '../components/SEO';

export function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Digital Safalta"
        description="How Digital Safalta collects, uses, and protects your personal data."
      />
      <div className="pt-28 lg:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black mb-2">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: [DATE]</p>

          <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
            <p>
              Digital Safalta ("we", "us", "our") operates digitalsafalta.in. This policy
              explains what personal data we collect, why, and how you can control it, in
              line with India's Digital Personal Data Protection Act, 2023 ("DPDP Act").
            </p>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">1. What We Collect</h2>
              <p className="mb-2">When you use our contact form, we collect:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name, phone number, and email address (required)</li>
                <li>Company name, business type, and whether you have an existing website (optional)</li>
                <li>The message you send us</li>
              </ul>
              <p className="mt-3">
                If you use our free Marketing Audit tool, we process the website URL you
                submit to generate an audit — we don't require you to create an account or
                provide personal details to use it.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">2. Why We Collect It</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>To respond to your enquiry and discuss our services</li>
                <li>To understand your business needs before proposing a plan</li>
              </ul>
              <p className="mt-3">
                We do not sell your personal data to anyone, and we do not use it for
                advertising or share it with unrelated third parties.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">3. Who We Share Data With</h2>
              <p className="mb-3">
                We share data only with the service providers that help us run our website
                and respond to enquiries:
              </p>
              <div className="border border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="p-3 font-medium text-white">Provider</th>
                      <th className="p-3 font-medium text-white">What they receive</th>
                      <th className="p-3 font-medium text-white">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="p-3">Cloudflare</td>
                      <td className="p-3">Contact form submissions</td>
                      <td className="p-3">Storing enquiries (D1 database) and hosting the website</td>
                    </tr>
                    <tr>
                      <td className="p-3">Brevo</td>
                      <td className="p-3">Your name, phone, email, and message</td>
                      <td className="p-3">Emailing us a notification when you submit the contact form</td>
                    </tr>
                    <tr>
                      <td className="p-3">OpenRouter</td>
                      <td className="p-3">The website URL you submit</td>
                      <td className="p-3">Generating your free Marketing Audit (no personal data involved)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                We do not share your data with any other third party, and we do not permit
                these providers to use your data for their own purposes.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">4. How Long We Keep Your Data</h2>
              <p>
                Contact form submissions are kept for [X months/years — decide a real
                retention period] so we can follow up on enquiries and maintain records of
                past conversations. You can request deletion at any time (see Section 5).
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">
                5. Your Rights (Data Principal Rights under the DPDP Act)
              </h2>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Access</strong> the personal data we hold about you</li>
                <li><strong>Correct</strong> inaccurate or incomplete data</li>
                <li><strong>Withdraw consent</strong> for us to process your data</li>
                <li><strong>Request deletion</strong> of your data, subject to any legal retention requirements</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:hello@digitalsafalta.in" className="text-teal-400 hover:underline">
                  hello@digitalsafalta.in
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">6. How We Protect Your Data</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>All data is transmitted over encrypted (HTTPS) connections</li>
                <li>Contact form submissions are validated and size-limited before being stored, to guard against spam and abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">7. Data Breach Notification</h2>
              <p>
                In the unlikely event of a data breach affecting your personal data, we will
                notify the Data Protection Board of India and affected individuals as
                required under the DPDP Act.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">8. Children's Data</h2>
              <p>
                Our services are intended for business owners and adults. We do not
                knowingly collect data from anyone under 18.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">9. Grievance Officer / Contact</h2>
              <p>For any privacy concerns, complaints, or requests, contact:</p>
              <p className="mt-2">
                [Name]<br />
                Digital Safalta<br />
                Email:{' '}
                <a href="mailto:hello@digitalsafalta.in" className="text-teal-400 hover:underline">
                  hello@digitalsafalta.in
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. We'll update the "Last updated"
                date above when we do.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
