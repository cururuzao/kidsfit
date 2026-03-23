export function Hero() {
  const scrollToPlanos = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-inner wrap-md">
        <div className="hero-eyebrow">
          <div className="hero-rating">
            <span className="stars">★★★★★</span>
            <span>+500 famílias transformadas</span>
          </div>
          <div className="chip chip-white">👩‍⚕️ Desenvolvido com nutricionistas infantis</div>
        </div>
        <h1>
          Seu filho está acima do peso<br />
          e você <em>não sabe mais</em> o que fazer?<br />
          <strong>Em 30-60 dias ele pode mudar.</strong>
        </h1>
        <p className="hero-sub">
          <strong>Kids Fit</strong> — o programa que mães estão usando para transformar seus filhos de forma{' '}
          <strong>saudável, feliz e sem guerra na mesa.</strong>
        </p>
        <p className="hero-vsl-title">👩‍⚕️ Veja o que a nossa especialista fala sobre</p>
        <div className="hero-video">
          <iframe
            src="https://player.vimeo.com/video/1175572032?badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: 'inherit' }}
            title="video (28)"
          />
        </div>
        <a href="#planos" className="btn-hero" onClick={scrollToPlanos}>
          SIM — QUERO MEU FILHO MAIS SAUDÁVEL
          <small>🔒 Acesso imediato · Garantia incondicional de 30 dias</small>
        </a>
        <div className="hero-trust">
          <div className="trust-pill">✅ 100% Online</div>
          <div className="trust-pill">♾️ Acesso Vitalício</div>
          <div className="trust-pill">🔒 Pagamento Seguro</div>
          <div className="trust-pill">🛡️ Garantia 30 dias</div>
          <div className="trust-pill">👩‍⚕️ Base científica</div>
        </div>
      </div>
    </section>
  )
}
