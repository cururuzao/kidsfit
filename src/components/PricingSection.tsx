const CHECKOUT_URL_ESSENCIAL = 'https://pay.kirvano.com/04e17670-6eb1-490b-a893-e3e4449484fc'
const CHECKOUT_URL_COMPLETO = 'https://pay.kirvano.com/8d150196-996d-4a61-b7e4-78bcf1245b2d'

export function PricingSection() {
  return (
    <section className="sec pricing-sec reveal" id="planos">
      <div className="wrap-lg">
        <div className="chip chip-white" style={{ marginBottom: 14 }}>💰 Preço especial de lançamento</div>
        <h2 className="title">
          Invista hoje na saúde<br /><em>que dura a vida inteira</em>
        </h2>
        <p className="lead" style={{ color: 'rgba(255,255,255,.72)' }}>
          Tudo isso por muito menos do que uma única consulta com nutricionista.
        </p>

        <div className="plans-grid">
          {/* PLANO ESSENCIAL */}
          <div className="price-card">
            <div className="price-ribbon" style={{ background: 'var(--teal)' }}>Plano Essencial</div>
            <p className="price-was">De R$ 97,00</p>
            <div className="price-off">Você economiza R$ 70,00</div>
            <div className="price-big"><sup>R$</sup>27</div>
            <p className="price-install">ou <strong>6x de R$ 4,97</strong> no cartão</p>
            <ul className="plan-features">
              <li className="included">✅ 8 Módulos em Vídeo</li>
              <li className="included">✅ Acesso Vitalício</li>
              <li className="included">✅ 4 Semanas de Cardápios + 30 Receitas</li>
              <li className="not-included">❌ App de Acompanhamento</li>
              <li className="not-included">❌ Grupo VIP no WhatsApp</li>
              <li className="not-included">❌ E-book: Falar de comida sem trauma</li>
              <li className="not-included">❌ Checklist: 10 erros das mães</li>
              <li className="not-included">❌ Aula com Nutricionista Infantil</li>
            </ul>
            <a href={CHECKOUT_URL_ESSENCIAL} target="_blank" rel="noopener noreferrer" className="btn-buy btn-buy-light">
              QUERO O PLANO ESSENCIAL
              <small>⚡ Acesso imediato após confirmação</small>
            </a>
            <div className="seals">
              <div className="seal"><span className="si">🔒</span>Compra<br />Segura</div>
              <div className="seal"><span className="si">🛡️</span>Garantia<br />30 dias</div>
              <div className="seal"><span className="si">⚡</span>Acesso<br />Imediato</div>
            </div>
          </div>

          {/* PLANO COMPLETO */}
          <div className="price-card price-card-featured">
            <div className="price-ribbon">🔥 Mais Escolhido — 80% OFF</div>
            <p className="price-was">De R$ 197,00</p>
            <div className="price-off">Você economiza R$ 150,00</div>
            <div className="price-big"><sup>R$</sup>47</div>
            <p className="price-install">ou <strong>12x de R$ 9,97</strong> sem juros</p>
            <ul className="plan-features">
              <li className="included">✅ 8 Módulos em Vídeo</li>
              <li className="included">✅ Acesso Vitalício</li>
              <li className="included">✅ 4 Semanas de Cardápios + 30 Receitas</li>
              <li className="included">✅ App de Acompanhamento</li>
              <li className="included">✅ Grupo VIP no WhatsApp</li>
              <li className="included bonus-item">🎁 E-book: Falar de comida sem trauma</li>
              <li className="included bonus-item">🎁 Checklist: 10 erros das mães</li>
              <li className="included bonus-item">🎁 Aula com Nutricionista Infantil</li>
            </ul>
            <a href={CHECKOUT_URL_COMPLETO} target="_blank" rel="noopener noreferrer" className="btn-buy">
              🛒 QUERO O PLANO COMPLETO
              <small>⚡ Acesso imediato · 🛡️ Garantia 30 dias</small>
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
      </div>
    </section>
  )
}
