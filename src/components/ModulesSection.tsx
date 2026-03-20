const modules = [
  { num: 1, title: 'A raiz do excesso de peso infantil', desc: 'Por que a dieta adulta não funciona em crianças — e o que a ciência diz que realmente funciona.' },
  { num: 2, title: '30 Receitas Anti-Obesidade', desc: 'Pratos deliciosos que crianças pedem bis — e que ajudam a emagrecer sem que elas percebam.' },
  { num: 3, title: 'Exercícios que Parecem Brincadeira', desc: 'Dança, circuito de super-herói e desafios de 10-15 min. Sem academia, sem equipamento, sem choro.' },
  { num: 4, title: 'A Mesa Sem Guerra', desc: 'Técnicas baseadas em psicologia comportamental para acabar com a briga na hora de comer.' },
  { num: 5, title: 'Plano Semanal Completo', desc: 'Cardápio imprimível por 4 semanas + lista de compras barata. Sem improviso, sem estresse.' },
  { num: 6, title: 'Gamificação e Motivação', desc: 'Sistema de pontos e conquistas que faz a criança se engajar e manter o hábito sozinha.' },
  { num: 7, title: 'Autoestima e Saúde Emocional', desc: 'Como proteger seu filho do bullying e fortalecer a relação dele com o próprio corpo.' },
  { num: 8, title: 'Resultados Duradouros', desc: 'Como manter os resultados para sempre — sem efeito sanfona, sem recaídas, sem sofrimento.' },
]

export function ModulesSection() {
  return (
    <section className="sec sec-cream center reveal">
      <div className="wrap-lg">
        <div className="chip chip-teal" style={{ marginBottom: 14 }}>🎓 O que você vai aprender</div>
        <h2 className="title">
          Os <em>8 Módulos</em> que vão mudar<br />a saúde do seu filho
        </h2>
        <p className="lead">Conteúdo direto ao ponto — cada módulo tem entre 15 e 25 minutos.</p>
        <div className="mod-grid">
          {modules.map((m) => (
            <div className="mod-card" key={m.num}>
              <div className="mod-num">{m.num}</div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
