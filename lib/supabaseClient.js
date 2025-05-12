// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 👇 DEBUG : vérifie que tes variables d’env sont bien chargées
console.log('🚀 NEXT_PUBLIC_SUPABASE_URL =', supabaseUrl);
console.log('🚀 NEXT_PUBLIC_SUPABASE_ANON_KEY =', supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
