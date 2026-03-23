import { useEffect, useState } from 'react'

export function FloatCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 700)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollToPlanos = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a
      href="#planos"
      className="float-cta"
      style={{ display: visible ? 'block' : 'none' }}
      onClick={scrollToPlanos}
    >
      🛒 Garantir vaga com até 80% OFF
    </a>
  )
}
