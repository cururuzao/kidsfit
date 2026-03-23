export function CTABanner() {
  const scrollToPlanos = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="cta-banner">
      <div className="wrap-md center">
        <a href="#planos" className="btn-hero" onClick={scrollToPlanos}>
          🛒 QUERO MEU FILHO MAIS SAUDÁVEL
        </a>
      </div>
    </section>
  )
}
