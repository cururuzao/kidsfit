export function ProblemsSection() {
  return (
    <section className="sec sec-cream">
      <div className="wrap-lg center reveal">
        <div className="chip chip-amber" style={{ marginBottom: 14 }}>😰 Você se identifica com isso?</div>
        <h2 className="title">
          Se sua realidade é essa,<br />
          <span>você precisa ler até o final:</span>
        </h2>
        <div className="prob-grid">
          <div className="prob-card">
            <div className="prob-icon">🍟</div>
            <div>
              <h3>Come besteira o dia todo</h3>
              <p>Salgadinho, refrigerante, doce — e recusa tudo saudável na mesa.</p>
            </div>
          </div>
          <div className="prob-card">
            <div className="prob-icon">🥗</div>
            <div>
              <h3>Recusa comida "light"</h3>
              <p>Qualquer coisa verde vira batalha campal. Você desiste por cansaço.</p>
            </div>
          </div>
          <div className="prob-card">
            <div className="prob-icon">📱</div>
            <div>
              <h3>Sedentário no celular</h3>
              <p>Nada tira do sofá. Academias, esportes, exercícios — tudo recusado.</p>
            </div>
          </div>
          <div className="prob-card">
            <div className="prob-icon">😔</div>
            <div>
              <h3>Você já tentou tudo</h3>
              <p>Dietas, apps, promessas. Nada funciona por mais de uma semana.</p>
            </div>
          </div>
          <div className="prob-card">
            <div className="prob-icon">💔</div>
            <div>
              <h3>Bullying e baixa autoestima</h3>
              <p>Seu filho sofre comentários cruéis e chega em casa arrasado.</p>
            </div>
          </div>
          <div className="prob-card">
            <div className="prob-icon">😰</div>
            <div>
              <h3>Medo do que vem pela frente</h3>
              <p>Diabetes, pressão alta, problemas cardíacos — tudo começa na infância.</p>
            </div>
          </div>
        </div>
        <div className="prob-transition reveal">
          <h3>
            A verdade que ninguém te conta:<br />
            <em>não é falta de força de vontade — é falta do método certo.</em>
          </h3>
          <p style={{ marginTop: 10 }}>
            O Kids Fit Família foi criado exatamente para isso: um sistema passo a passo baseado em ciência que transforma a relação do seu filho com comida e movimento — sem trauma, sem pressão, sem culpa.
          </p>
        </div>
      </div>
    </section>
  )
}
