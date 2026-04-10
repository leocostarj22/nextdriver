import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, X, ArrowRight, Zap } from 'lucide-react'
import { plans, extras } from '../data/pricing'
import PageWrapper from '../components/PageWrapper'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const planColorMap = {
  slate: {
    bg: 'bg-white',
    header: 'bg-slate-50',
    badge: 'bg-slate-100 text-slate-600',
    btn: 'btn-secondary',
    price: 'text-slate-900',
  },
  primary: {
    bg: 'bg-primary-600',
    header: 'bg-primary-700',
    badge: 'bg-accent-500 text-white',
    btn: 'btn-accent',
    price: 'text-white',
  },
  accent: {
    bg: 'bg-white',
    header: 'bg-amber-50',
    badge: 'bg-amber-100 text-amber-800',
    btn: 'btn-primary',
    price: 'text-slate-900',
  },
}

export default function Pricing() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&h=500&fit=crop"
            alt="Tabela de preços da escola de condução NextDrive Academy Lisboa"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge bg-white/10 text-white border border-white/20 mb-5">Preços</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              Preços transparentes, sem surpresas
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Escolha o pacote que melhor se adapta ao seu perfil e objetivos. Todos os preços incluem IVA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => {
              const colors = planColorMap[plan.color]
              const isPrimary = plan.color === 'primary'
              return (
                <motion.div
                  key={plan.id}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`rounded-3xl overflow-hidden shadow-lg relative ${
                    isPrimary ? 'scale-105 shadow-2xl shadow-primary-600/20 z-10' : 'shadow-sm'
                  } ${isPrimary ? 'bg-primary-600' : 'bg-white'}`}
                >
                  {plan.popular && (
                    <div className="bg-accent-500 text-white text-xs font-bold px-3 py-1.5 text-center tracking-wide uppercase">
                      ⚡ Mais popular
                    </div>
                  )}
                  <div className={`p-8 ${isPrimary ? 'bg-primary-700' : 'bg-slate-50'}`}>
                    <h3 className={`font-display font-bold text-2xl mb-1 ${isPrimary ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm mb-6 ${isPrimary ? 'text-primary-200' : 'text-slate-500'}`}>
                      {plan.description}
                    </p>
                    <div className="flex items-end gap-2">
                      <span className={`font-display font-bold text-5xl ${isPrimary ? 'text-white' : 'text-slate-900'}`}>
                        €{plan.price}
                      </span>
                      <span className={`text-sm mb-2 ${isPrimary ? 'text-primary-200' : 'text-slate-400'}`}>
                        /{plan.period}
                      </span>
                    </div>
                  </div>

                  <div className={`p-8 ${isPrimary ? 'bg-primary-600' : 'bg-white'}`}>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map(feat => (
                        <li key={feat.text} className={`flex items-center gap-3 text-sm ${
                          isPrimary
                            ? feat.included ? 'text-white' : 'text-primary-300 opacity-60'
                            : feat.included ? 'text-slate-700' : 'text-slate-300'
                        }`}>
                          {feat.included
                            ? <CheckCircle size={16} className={isPrimary ? 'text-green-300 flex-shrink-0' : 'text-green-500 flex-shrink-0'} />
                            : <X size={16} className="flex-shrink-0" />
                          }
                          {feat.text}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/marcacao"
                      className={`${isPrimary ? 'btn-accent' : 'btn-primary'} w-full justify-center text-sm`}
                    >
                      Começar agora
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-slate-400 text-sm mt-10"
          >
            * As taxas de exame do IMT (Instituto da Mobilidade e dos Transportes) não estão incluídas nos pacotes.
            Ajudamos com toda a logística e marcação sem custo adicional.
          </motion.p>
        </div>
      </section>

      {/* Extras */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">Serviços avulso</h2>
            <p className="section-subtitle mx-auto">Não quer um pacote? Sem problema. Pode marcar serviços individualmente.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {extras.map((extra, i) => (
              <motion.div
                key={extra.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center justify-between p-5 rounded-2xl border border-slate-200 hover:border-primary-300 hover:bg-primary-50/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-primary-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{extra.name}</span>
                </div>
                <span className="font-bold text-primary-700 flex-shrink-0 ml-4">€{extra.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preços */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">Dúvidas sobre preços?</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'Os preços incluem IVA?',
                a: 'Sim, todos os preços apresentados incluem IVA à taxa legal em vigor (23%). Não há custos adicionais.',
              },
              {
                q: 'Posso pagar a prestações?',
                a: 'Sim, oferecemos planos de pagamento fracionado para os pacotes Completo e Premium. Consulte-nos para saber mais.',
              },
              {
                q: 'O que acontece se reprovar no exame?',
                a: 'Se reprovar no exame prático, as aulas de preparação adicional são cobradas à tarifa de €45/hora. As taxas de reexame do IMT são separadas.',
              },
              {
                q: 'Posso mudar de pacote depois de inscrever?',
                a: 'Sim, pode fazer upgrade do seu pacote em qualquer momento. O valor já pago é descontado no novo pacote.',
              },
            ].map((item, i) => (
              <motion.details
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-5 border border-slate-100 group cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-slate-900 list-none">
                  {item.q}
                  <span className="text-slate-400 group-open:rotate-90 transition-transform duration-200 ml-4">›</span>
                </summary>
                <p className="text-slate-600 text-sm leading-relaxed mt-3 pt-3 border-t border-slate-100">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Tem dúvidas sobre o pacote certo?</h2>
          <p className="text-xl text-primary-100 mb-8">Fale connosco e ajudamo-lo a escolher a melhor opção para si.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/marcacao" className="btn-accent text-base px-8 py-4">
              Marcar Consulta Gratuita
              <ArrowRight size={18} />
            </Link>
            <Link to="/contactos" className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 text-white font-semibold rounded-xl border border-white/25 hover:bg-white/25 transition-all">
              Falar connosco
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
