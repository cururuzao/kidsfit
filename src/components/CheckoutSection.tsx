export function CheckoutSection() {
  return (
    <section className="sec checkout-sec" id="checkout">
      <div className="wrap-sm center reveal" style={{ marginBottom: 28 }}>
        <div className="chip chip-green" style={{ marginBottom: 12 }}>🔒 Finalizar compra</div>
        <h2 className="title">Garanta sua vaga <em>agora</em></h2>
      </div>
      <div className="checkout-box">
        <h3>Seus dados</h3>
        <p className="sub">Preencha abaixo para garantir sua vaga com 80% de desconto.</p>
        <div className="price-summary">
          <span className="pn">Kids Fit Família + R$ 291 em Bônus</span>
          <span className="pv">R$ 47,00</span>
        </div>
        <div className="form-row">
          <label>Nome completo</label>
          <input type="text" placeholder="Seu nome completo" />
        </div>
        <div className="form-row">
          <label>E-mail</label>
          <input type="email" placeholder="seu@email.com" />
        </div>
        <div className="form-row">
          <label>Celular / WhatsApp</label>
          <input type="tel" placeholder="(11) 99999-9999" />
        </div>
        <div className="form-row">
          <label>Forma de pagamento</label>
          <select>
            <option>Cartão de Crédito (12x de R$ 9,97 sem juros)</option>
            <option>PIX — R$ 47,00 à vista</option>
            <option>Boleto Bancário — R$ 47,00</option>
          </select>
        </div>
        <div className="form-row-2">
          <div className="form-row" style={{ marginBottom: 0 }}>
            <label>Número do Cartão</label>
            <input type="text" placeholder="0000 0000 0000 0000" />
          </div>
          <div className="form-row" style={{ marginBottom: 0 }}>
            <label>Validade</label>
            <input type="text" placeholder="MM/AA" />
          </div>
        </div>
        <div className="form-row" style={{ marginTop: 14 }}>
          <label>CVV</label>
          <input type="text" placeholder="123" style={{ maxWidth: 120 }} />
        </div>
        <br />
        <a href="#" className="btn-buy" onClick={(e) => e.preventDefault()}>
          🔒 FINALIZAR MINHA COMPRA AGORA
          <small>Ambiente seguro · SSL 256 bits · Dados protegidos</small>
        </a>
        <div className="checkout-secure">🔒 Seus dados são protegidos com criptografia SSL de 256 bits</div>
        <div className="pay-methods">
          <span className="pay-badge">💳 Visa</span>
          <span className="pay-badge">💳 Master</span>
          <span className="pay-badge">💳 Elo</span>
          <span className="pay-badge">⚡ PIX</span>
          <span className="pay-badge">📄 Boleto</span>
        </div>
        <p className="checkout-note">
          Integre facilmente com <strong>Hotmart</strong> ou <strong>Eduzz</strong> — substitua este formulário pelo link da sua plataforma de checkout.
        </p>
      </div>
    </section>
  )
}
