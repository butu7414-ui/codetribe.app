import { createClient } from '@supabase/supabase-js'

export async function POST(req) {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const body = await req.json()
  
  const { data, error } = await supabaseAdmin
    .from('code_pastes')
    .insert([body])
    .select()

  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json(data)
}
