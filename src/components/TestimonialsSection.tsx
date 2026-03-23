const testimonials = [
  {
    text: 'Minha filha de 9 anos perdeu 4,2 kg em 45 dias e agora pede salada! Nunca imaginei que fosse possível. A mudança foi incrível — ela está mais animada, mais feliz e adora os exercícios.',
    name: 'Ana Clara',
    loc: 'São Paulo – SP',
    result: '📉 −4,2 kg em 45 dias',
    photo: '/antes-depois-1.png',
  },
  {
    text: 'Parou a briga na mesa e ele mesmo me cobra pra fazer o exercício! Melhor investimento da minha vida. Em 2 meses meu filho perdeu 3 kg e a autoestima dele subiu demais.',
    name: 'Juliana Mendes',
    loc: 'Rio de Janeiro – RJ',
    result: '📉 −3 kg em 60 dias',
    photo: '/antes-depois-2.png',
  },
  {
    text: 'Meu filho de 11 anos vivia com bullying na escola por causa do peso. Em 60 dias ele perdeu 5 kg, ganhou confiança e os comentários pararam. Choro toda vez que lembro.',
    name: 'Fernanda Costa',
    loc: 'Belo Horizonte – MG',
    result: '📉 −5 kg em 60 dias',
    photo: '/antes-depois-3.png',
  },
]

export function TestimonialsSection() {
  return (
    <section className="sec" style={{ background: 'var(--white)', textAlign: 'center' }}>
      <div className="wrap-lg reveal">
        <div className="chip chip-green" style={{ marginBottom: 14 }}>💬 Mães reais, resultados reais</div>
        <h2 className="title">
          Elas apostaram.<br /><em>Os filhos transformaram.</em>
        </h2>
        <p className="lead">Sem filtro, sem script — só histórias verdadeiras de famílias que mudaram.</p>
        <div className="testi-grid">
          {testimonials.map((t) => (
            <div className="testi-card" key={t.name}>
              <div className="big-q">"</div>
              {t.photo ? (
                <img src={t.photo} alt={`Antes e depois – ${t.name}`} className="testi-img" />
              ) : (
                <div className="testi-photo">
                  <span>📸</span>[foto antes e depois]
                </div>
              )}
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className="testi-av">👩</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-loc">{t.loc}</div>
                  <div className="testi-result">{t.result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
