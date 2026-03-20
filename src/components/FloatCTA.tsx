import { useEffect, useState } from 'react'
import { useScrollToCheckout } from '../hooks/useScrollToCheckout'

export function FloatCTA() {
  const [visible, setVisible] = useState(false)
  const scrollTo = useScrollToCheckout()

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 700)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <button
      className="float-cta"
      style={{ display: visible ? 'block' : 'none' }}
      onClick={scrollTo}
    >
      🛒 Garantir vaga com 80% OFF
    </button>
  )
}
