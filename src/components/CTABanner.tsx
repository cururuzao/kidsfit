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
          <small>⚡ Veja os planos · 🛡️ Garantia 30 dias · 🔒 Compra 100% segura</small>
        </a>
      </div>
    </section>
  )
}
