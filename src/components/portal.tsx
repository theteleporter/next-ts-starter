import * as React from 'react'
import { createPortal } from 'react-dom'

type Props = {
  id?: string
  onMount?: () => void
  children?: React.ReactNode
  className?: string
}

export const Portal: React.FC<Props> = ({
  children,
  id = 'basement-portal',
  onMount,
  className
}) => {
  const ref = React.useRef<HTMLElement | null>(null)
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    let portal = document.getElementById(id) as HTMLElement | null

    if (!portal) {
      portal = document.createElement('div')
      portal.id = id
      document.body.appendChild(portal)
    }

    portal.className = className ?? ''
    ref.current = portal
    setIsMounted(true)
  }, [className, id])

  React.useEffect(() => {
    if (isMounted && onMount) {
      onMount()
    }
  }, [isMounted, onMount])

  if (!isMounted || !ref.current) return null

  return createPortal(children, ref.current)
}
