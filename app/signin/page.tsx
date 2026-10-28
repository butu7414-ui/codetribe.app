'use client'
import { getSupabase } from '../../lib/supabaseClient'
import { Github } from 'lucide-react'

export default function SignIn() {
  const handleLogin = async () => {
    await getSupabase().auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo: `${window.location.origin}/auth/callback` }
    })
  }

  return (
    <div className="min-h-screen bg-[#0d1320] flex items-center justify-center p-4">
      <div className="bg-[#0f172a] border border-[#1f2a3d] rounded-2xl p-10 max-w-md w-full text-center shadow-2xl">
        <h1 className="text-white text-3xl font-bold tracking-wider mb-2 font-mono">CODETRIBE</h1>
        <p className="text-gray-400 mb-8 text-sm">Where devs debug together</p>
        
        <button onClick={handleLogin} className="w-full bg-[#0d1117] border border-gray-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-3 hover:bg-[#161b22] transition">
          <Github size={20} />
          Sign in with GitHub
        </button>
        
        <p className="text-xs text-gray-500 mt-6">By signing in you agree to share your public profile.</p>
      </div>
    </div>
  )
}
