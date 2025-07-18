'use client'

import dynamic from 'next/dynamic'

const GridDebugger = dynamic(() => import('~/lib/debug/grid-debugger'), {
  ssr: false
})

export default GridDebugger
