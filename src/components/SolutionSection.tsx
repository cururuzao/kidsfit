export function SolutionSection() {
  return (
    <section className="sec" style={{ background: 'var(--white)' }}>
      <div className="wrap-lg reveal">
        <div className="sol-inner">
          <div className="sol-img">
            <span className="phi">🥦🥕🍓</span>
            [imagem das receitas coloridas]
          </div>
          <div>
            <div className="chip chip-teal" style={{ marginBottom: 14 }}>💡 A solução que funciona</div>
            <h2 className="title">
              Kids Fit Família:<br />
              o programa <em>100% online</em><br />
              para crianças de 5 a 14 anos
            </h2>
            <p style={{ color: 'var(--ink-soft)', margin: '16px 0', fontSize: '.97rem', lineHeight: 1.7 }}>
              Em apenas <strong>8 módulos em vídeo</strong> — práticos, objetivos, feitos para mães ocupadas — você vai aprender:
            </p>
            <ul className="sol-list">
              <li><div className="ck">✓</div>Como fazer seu filho comer melhor <strong>sem ele perceber</strong> — 30 receitas que criança pede bis</li>
              <li><div className="ck">✓</div>Exercícios de 10-15 min em casa que <strong>parecem brincadeira</strong> — dança, super-herói, circuito</li>
              <li><div className="ck">✓</div>Como falar de peso e comida <strong>sem gerar trauma</strong> nem rebeldia</li>
              <li><div className="ck">✓</div>Plano semanal imprimível já com <strong>lista de compras barata</strong></li>
              <li><div className="ck">✓</div>Sistema de gamificação que mantém seu filho <strong>motivado sozinho</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
