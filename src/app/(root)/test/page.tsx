'use client'

import dynamic from 'next/dynamic'

// Disable SSR for Scene to prevent runtime crash
const Scene = dynamic(() => import('@/components/Scene'), { ssr: false })

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <Scene />
    </div>
  )
}
