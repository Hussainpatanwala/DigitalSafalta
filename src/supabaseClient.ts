import { createClient } from '@supabase/supabase-js';

// ============================================================
// REPLACE THESE TWO VALUES WITH YOUR SUPABASE PROJECT DETAILS
// Supabase Dashboard → Project Settings → API
// ============================================================

const SUPABASE_URL = 'https://ezuoudyftsbkobbfjxbx.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'PASTE_YOUR_FULL_PUBLISHABLE_KEY_HERE';


// ============================================================

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
