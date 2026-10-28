'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Github, Hash, MessageSquare, Plus } from 'lucide-react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('code')

  return (
    <div className="flex h-screen bg-[#0d1320] text-white overflow-hidden font-sans">
      <aside className="w-64 bg-[#0e1525] border-r border-[#1f2a3d] flex flex-col">
        <div className="p-4 border-b border-[#1f2a3d] flex items-center justify-between">
          <span className="font-bold text-lg tracking-wider">CODETRIBE</span>
          <span className="bg-[#10b981] text-[10px] text-black px-1.5 py-0.5 rounded font-bold">LIVE</span>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="text-xs text-gray-500 font-bold mb-2">WORKSPACE</div>
          <div className="text-sm font-semibold mb-4 text-gray-300">dev-help</div>
          
          <div className="text-xs text-gray-500 font-bold mb-2 mt-6">CHANNELS</div>
          <div className="space-y-1">
            <div className="bg-[#2a364d] text-white px-2 py-1.5 rounded text-sm cursor-pointer flex items-center gap-2">
              <Hash size={14} /> all-pastes
            </div>
            <div className="text-gray-400 hover:text-white px-2 py-1.5 rounded text-sm cursor-pointer flex items-center gap-2 transition">
              <Hash size={14} /> troubleshooting
            </div>
            <div className="text-gray-400 hover:text-white px-2 py-1.5 rounded text-sm cursor-pointer flex items-center gap-2 transition">
              <Hash size={14} /> javascript
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-[#1f2a3d] flex items-center justify-between px-6 bg-[#0f172a] shrink-0">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            codetribe / dev-help / <span className="text-white font-medium"># all-pastes</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsModalOpen(true)} className="bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-1.5 rounded font-semibold text-sm transition flex items-center gap-2">
              <Plus size={16} /> New Paste
            </button>
            <Link href="/signin" className="bg-[#0d1117] border border-gray-600 text-white px-4 py-1.5 rounded text-sm transition flex items-center gap-2">
              <Github size={16} /> Sign in
            </Link>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="bg-[#121a29] border border-[#1f2a3d] rounded-lg p-5">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <img src="https://github.com/github.png" className="w-6 h-6 rounded-full border border-gray-600" />
                <span className="text-sm font-bold text-gray-200">alex.codes</span>
                <span className="text-xs text-gray-500">2 mins ago</span>
              </div>
              <span className="text-xs bg-[#2a364d] px-2 py-0.5 rounded text-gray-300">TypeScript</span>
            </div>
            <h3 className="text-lg font-bold mb-3">Fixing Next.js Router in useDebouncedPaste</h3>
            <div className="bg-[#0d1117] p-4 rounded text-sm font-mono overflow-x-auto text-green-300 border border-gray-700">
              <pre><code>{`import { useRouter } from 'next/router';\n\nexport function useDebouncedPaste() {\n  const router = useRouter();\n  // ...`}</code></pre>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <button className="flex items-center gap-1 hover:text-white transition"><MessageSquare size={14} /> 3 replies</button>
              <button className="text-red-400 hover:text-red-300 transition font-medium">Request Help</button>
            </div>
          </div>
        </div>
      </main>

      <aside className="w-80 bg-[#0e1525] border-l border-[#1f2a3d] hidden lg:flex flex-col">
        <div className="p-4 border-b border-[#1f2a3d] font-bold text-sm">
          Re: useDebouncedPaste
        </div>
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          <div className="flex gap-3">
            <img src="https://github.com/github.png" className="w-8 h-8 rounded-full" />
            <div>
              <div className="text-sm"><span className="font-bold text-gray-200">marc</span> <span className="text-xs text-gray-500">5m</span></div>
              <div className="text-sm text-gray-300 mt-1">You need to use the App Router `useRouter` from `next/navigation`.</div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-[#1f2a3d]">
          <input type="text" placeholder="Reply..." className="w-full bg-[#0d1117] border border-[#2a364d] rounded p-2 text-sm text-white mb-2" />
          <button className="w-full bg-[#238636] text-white py-1.5 rounded text-sm font-bold hover:bg-[#2ea043]">Send</button>
        </div>
      </aside>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-[#0f172a] border border-[#1f2a3d] rounded-xl w-full max-w-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-white">Create New Paste</h2>
            
            <div className="flex gap-2 mb-4">
              <button onClick={() => setActiveTab('code')} className={`flex-1 py-2 rounded text-sm font-bold ${activeTab === 'code' ? 'bg-[#238636] text-white' : 'bg-[#1a2333] text-gray-400'}`}>Paste Code</button>
              <button onClick={() => setActiveTab('link')} className={`flex-1 py-2 rounded text-sm font-bold ${activeTab === 'link' ? 'bg-[#238636] text-white' : 'bg-[#1a2333] text-gray-400'}`}>Push Link</button>
            </div>

            <input type="text" placeholder="Title" className="w-full bg-[#0d1117] border border-[#2a364d] rounded p-2 text-white mb-3" />
            
            {activeTab === 'code' ? (
              <textarea placeholder="Paste your code here..." className="w-full bg-[#0d1117] border border-[#2a364d] rounded p-2 text-white font-mono h-32 mb-3"></textarea>
            ) : (
              <input type="url" placeholder="https://your-site.vercel.app" className="w-full bg-[#0d1117] border border-[#2a364d] rounded p-2 text-white mb-3" />
            )}

            <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-400 hover:text-white text-sm">Cancel</button>
              <button className="bg-[#238636] px-4 py-2 rounded text-white font-bold text-sm">Post</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
