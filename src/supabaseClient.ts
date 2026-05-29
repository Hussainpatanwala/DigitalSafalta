import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ezuoudyftsbkobbfjxbx.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6dW91ZHlmdHNia29iYmZqeGJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwMzI2MDIsImV4cCI6MjA5NTYwODYwMn0.GhUCnA7oiShpEAM2kCFX7vCJc-xxj64uyxmaKgfjpEQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
