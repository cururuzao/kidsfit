import { useScrollToCheckout } from '../hooks/useScrollToCheckout'

export function FinalCTASection() {
  const scrollTo = useScrollToCheckout()

  return (
    <section className="final-cta-sec reveal">
      <div className="wrap-sm center">
        <div className="chip chip-white" style={{ marginBottom: 16 }}>⏰ Não deixe pra depois</div>
        <h2 className="title">
          Clique abaixo e garanta sua vaga<br /><em>com 80% de desconto</em> antes que acabe.
        </h2>
        <p className="lead">Centenas de mães já transformaram seus filhos. Chegou a sua vez. Todo o risco é nosso — o resultado é de vocês.</p>
        <a
          href="#checkout"
          className="btn-hero"
          style={{ fontSize: '1.15rem', padding: '22px 52px', marginTop: 12 }}
          onClick={scrollTo}
        >
          🛒 QUERO MEU FILHO MAIS SAUDÁVEL POR R$ 47
          <small>⚡ Acesso imediato · 🛡️ Garantia 30 dias · 🔒 Compra 100% segura</small>
        </a>
      </div>
    </section>
  )
}
