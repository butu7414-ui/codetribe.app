import { createClient } from '@supabase/supabase-js'

let client

// Created lazily so a missing env var doesn't crash prerendering at build time
export function getSupabase() {
  if (!client) {
    client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
  }
  return client
}
