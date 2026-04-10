import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Clock, Tag, Zap, Car, BookOpen, RefreshCw, Shield, Award } from 'lucide-react'
import { services } from '../data/services'
import PageWrapper from '../components/PageWrapper'

const iconMap = { Car, BookOpen, Zap, RefreshCw, Shield, Award }

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Services() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&h=600&fit=crop"
            alt="Serviços da escola de condução NextDrive Academy em Lisboa"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="badge bg-white/10 text-white border border-white/20 mb-5">Os nossos serviços</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Formação completa para todos os perfis
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Do código ao volante, temos o curso certo para si. Veja todos os nossos programas e encontre o que melhor se adapta à sua situação.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation chips */}
      <div className="sticky top-16 md:top-20 z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
            {services.map(svc => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-700 transition-colors border border-slate-200 hover:border-primary-200"
              >
                {svc.title.split('—')[0].trim()}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon]
            const isEven = i % 2 === 0
            return (
              <motion.div
                key={svc.id}
                id={svc.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Image */}
                <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                    <img
                      src={svc.image}
                      alt={svc.alt}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/30 to-transparent rounded-3xl" />
                  </div>
                  {svc.popular && (
                    <div className="absolute -top-4 -right-4 bg-accent-500 text-white text-sm font-semibold px-4 py-2 rounded-2xl shadow-lg">
                      ⚡ Mais procurado
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={!isEven ? 'lg:col-start-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                      {Icon && <Icon size={20} className="text-primary-600" />}
                    </div>
                    <span className="badge bg-primary-50 text-primary-700">{svc.title.split('—')[0].trim()}</span>
                  </div>

                  <h2 className="font-display font-bold text-3xl text-slate-900 mb-4 leading-tight">{svc.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{svc.description}</p>

                  <ul className="space-y-3 mb-8">
                    {svc.features.map(feat => (
                      <li key={feat} className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-primary-600 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-slate-400" />
                      <span className="text-sm text-slate-600"><strong>Duração:</strong> {svc.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag size={16} className="text-slate-400" />
                      <span className="text-sm text-slate-600"><strong>Preço:</strong> {svc.price}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link to="/marcacao" className="btn-primary">
                      Inscrever-me agora
                      <ArrowRight size={16} />
                    </Link>
                    <Link to="/precos" className="btn-secondary">
                      Ver preços
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-title mb-4">Como funciona o processo?</h2>
            <p className="section-subtitle mx-auto">Do registo à carta, acompanhamos cada passo.</p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-primary-100 mx-24" />
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Inscrição', desc: 'Registe-se online ou venha à escola. Apresentação gratuita e sem compromissos.' },
                { step: '02', title: 'Código', desc: 'Prepare o exame teórico com aulas e a nossa plataforma online de simulação.' },
                { step: '03', title: 'Prática', desc: 'Aulas práticas com instrutor certificado, ao seu ritmo e na sua zona.' },
                { step: '04', title: 'Carta 🎉', desc: 'Aprovação no exame e carta na mão. Independência total ao volante!' },
              ].map((step, i) => (
                <motion.div
                  key={step.step}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 font-display font-bold text-xl shadow-lg shadow-primary-600/25 relative z-10">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Pronto para começar?</h2>
          <p className="text-xl text-primary-100 mb-8">Primeira aula gratuita, sem compromisso. Venha conhecer-nos.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/marcacao" className="btn-accent text-base px-8 py-4">
              Marcar Aula Gratuita
              <ArrowRight size={18} />
            </Link>
            <Link to="/precos" className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 text-white font-semibold rounded-xl border border-white/25 hover:bg-white/25 transition-all">
              Ver Preços
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
