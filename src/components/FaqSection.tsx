import { useState } from 'react'

const faqs = [
  { q: 'Para qual idade é indicado o programa?', a: 'O Kids Fit Família foi desenvolvido especialmente para crianças de <strong>5 a 14 anos</strong> com excesso de peso ou sobrepeso. Todas as receitas, exercícios e estratégias são adaptados para essa faixa etária.' },
  { q: 'Preciso ter conhecimento de nutrição ou fitness?', a: 'Não. O programa foi criado para mães <strong>sem nenhum conhecimento técnico</strong>. Tudo é explicado de forma simples e prática, com passo a passo detalhado que qualquer pessoa consegue aplicar.' },
  { q: 'Como acesso o conteúdo após a compra?', a: 'Imediatamente após a confirmação do pagamento, você recebe um e-mail com login e senha. O acesso é <strong>vitalício</strong> — você nunca perde o conteúdo, incluindo todas as atualizações futuras.' },
  { q: 'E se minha criança for muito resistente à comida saudável?', a: 'Esse é exatamente o cenário para o qual o programa foi criado! O módulo 2 traz <strong>30 receitas</strong> que crianças mais resistentes adoram — sem perceber que estão comendo algo nutritivo. A estratégia de "substituição invisível" é o coração do método.' },
  { q: 'Precisa de academia ou equipamentos?', a: 'Não precisa de nada além de um espaço pequeno em casa. Todos os exercícios são feitos em <strong>10-15 minutos por dia, sem equipamentos</strong>, no formato de brincadeiras e desafios que a criança pede pra repetir.' },
  { q: 'Posso pedir reembolso se não gostar?', a: 'Sim. Você tem <strong>30 dias de garantia incondicional</strong>. Se não ficar 100% satisfeita por qualquer motivo, basta enviar um e-mail e devolvemos o valor integralmente, sem nenhuma pergunta ou burocracia.' },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="sec" style={{ background: 'var(--white)', textAlign: 'center' }}>
      <div className="wrap-lg reveal">
        <div className="chip chip-teal" style={{ marginBottom: 14 }}>❓ Dúvidas frequentes</div>
        <h2 className="title">Suas perguntas <em>respondidas</em></h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <button
                className={`faq-q${openIndex === i ? ' open' : ''}`}
                onClick={() => toggle(i)}
              >
                {faq.q}
                <span className="arr">▼</span>
              </button>
              <div
                className={`faq-a${openIndex === i ? ' open' : ''}`}
                dangerouslySetInnerHTML={{ __html: faq.a }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
