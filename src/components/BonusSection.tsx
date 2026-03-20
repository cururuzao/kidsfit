const bonuses = [
  {
    icon: '📖',
    title: 'E-book: "Como falar de comida sem gerar trauma"',
    desc: 'Guia com linguagem emocional para criar uma relação saudável entre seu filho e a comida — sem pressão, sem culpa, sem rebeldia.',
    value: 'Valor real: R$ 97',
  },
  {
    icon: '📋',
    title: 'Checklist: "10 erros que 90% das mães cometem"',
    desc: 'Descubra o que você pode estar fazendo sem perceber que sabota todo o esforço — e como corrigir em menos de 24 horas.',
    value: 'Valor real: R$ 47',
  },
  {
    icon: '🎥',
    title: 'Aula Gravada com Nutricionista Infantil',
    desc: 'Uma aula ao vivo gravada que responde as principais dúvidas das mães sobre alimentação infantil e emagrecimento saudável.',
    value: 'Valor real: R$ 147',
  },
]

export function BonusSection() {
  return (
    <section className="sec sec-cream center reveal">
      <div className="wrap-lg">
        <div className="chip chip-amber" style={{ marginBottom: 14 }}>🎁 Só para quem entrar hoje</div>
        <h2 className="title">
          Você ainda leva <span>R$ 291 em bônus</span><br />completamente de graça
        </h2>
        <div className="bonus-grid">
          {bonuses.map((b) => (
            <div className="bonus-card" key={b.title}>
              <div className="bonus-badge">GRÁTIS</div>
              <div className="bonus-icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
              <div className="bonus-val">{b.value} — <strong>seu de graça</strong></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
