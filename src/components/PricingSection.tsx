import { useScrollToCheckout } from '../hooks/useScrollToCheckout'

export function PricingSection() {
  const scrollTo = useScrollToCheckout()

  return (
    <section className="sec pricing-sec reveal">
      <div className="wrap-sm">
        <div className="chip chip-white" style={{ marginBottom: 14 }}>💰 Preço especial de lançamento</div>
        <h2 className="title">
          Invista hoje na saúde<br /><em>que dura a vida inteira</em>
        </h2>
        <p className="lead" style={{ color: 'rgba(255,255,255,.72)' }}>
          Tudo isso por muito menos do que uma única consulta com nutricionista.
        </p>
        <div className="price-card">
          <div className="price-ribbon">🔥 Oferta Especial de Lançamento — 80% OFF</div>
          <p className="price-was">De R$ 197,00</p>
          <div className="price-off">Você economiza R$ 150,00 agora</div>
          <div className="price-big"><sup>R$</sup>47</div>
          <p className="price-install">ou <strong>12x de R$ 9,97</strong> no cartão sem juros</p>
          <a href="#checkout" className="btn-buy" onClick={scrollTo}>
            🛒 QUERO GARANTIR MINHA VAGA AGORA
            <small>⚡ Acesso imediato após confirmação</small>
          </a>
          <div className="seals">
            <div className="seal"><span className="si">🔒</span>Compra<br />Segura</div>
            <div className="seal"><span className="si">♾️</span>Acesso<br />Vitalício</div>
            <div className="seal"><span className="si">🛡️</span>Garantia<br />30 dias</div>
            <div className="seal"><span className="si">💳</span>Parcelado<br />12x</div>
            <div className="seal"><span className="si">⚡</span>Acesso<br />Imediato</div>
          </div>
        </div>
      </div>
    </section>
  )
}
