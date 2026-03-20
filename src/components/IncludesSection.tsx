const items = [
  { icon: '🎬', title: '8 Módulos em Vídeo', desc: 'Aulas objetivas e sem enrolação. Assista no celular, tablet ou computador quando quiser.' },
  { icon: '♾️', title: 'Acesso Vitalício', desc: 'Pague uma vez, acesse para sempre. Todas as atualizações futuras incluídas sem custo extra.' },
  { icon: '🥗', title: '4 Semanas de Cardápios + 30 Receitas', desc: 'Planejamento pronto, ingredientes acessíveis, sabor aprovado por crianças reais.' },
  { icon: '📱', title: 'App de Acompanhamento', desc: 'Registre peso, medidas e conquistas. Motivação visual que mantém mãe e filho engajados.' },
  { icon: '💬', title: 'Grupo VIP no WhatsApp', desc: 'Comunidade de mães com suporte toda semana. Você nunca vai andar sozinha nessa jornada.' },
  { icon: '🎁', title: 'Bônus Exclusivos', desc: 'E-book + checklist + aula ao vivo gravada com nutricionista infantil — somam R$ 291 em valor.' },
]

export function IncludesSection() {
  return (
    <section className="sec inc-sec center reveal">
      <div className="wrap-lg">
        <div className="chip chip-white" style={{ marginBottom: 14 }}>📦 O que você recebe hoje</div>
        <h2 className="title">
          Tudo que você precisa para<br /><em>transformar a saúde do seu filho</em>
        </h2>
        <p className="lead">Um sistema completo — do cardápio ao suporte emocional.</p>
        <div className="inc-grid">
          {items.map((item) => (
            <div className="inc-card" key={item.title}>
              <div className="inc-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
