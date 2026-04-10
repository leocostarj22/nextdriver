import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, Award, Heart, Target, Eye } from 'lucide-react'
import { team } from '../data/team'
import { testimonials } from '../data/testimonials'
import PageWrapper from '../components/PageWrapper'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const values = [
  {
    icon: Heart,
    title: 'Paixão pelo ensino',
    desc: 'Cada instrutor da NextDrive é apaixonado pela pedagogia. Não ensinamos só a conduzir — formamos condutores responsáveis.',
  },
  {
    icon: Target,
    title: 'Foco no resultado',
    desc: 'A nossa metodologia é orientada para a aprovação. Cada aula é estruturada para maximizar o progresso do aluno.',
  },
  {
    icon: Eye,
    title: 'Transparência total',
    desc: 'Sem taxas escondidas, sem promessas vazias. O que prometemos, cumprimos. O que cobramos, explicamos.',
  },
  {
    icon: Award,
    title: 'Excelência contínua',
    desc: 'Investimos constantemente na formação da nossa equipa e na modernização das nossas viaturas e metodologias.',
  },
]

export default function About() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-primary-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=1600&h=600&fit=crop"
            alt="Equipa de instrutores da NextDrive Academy em Lisboa"
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
            <span className="badge bg-white/10 text-white border border-white/20 mb-5">Sobre a NextDrive Academy</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              A nossa história começa em 2009
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Nascemos com a missão de transformar a forma como Lisboa aprende a conduzir. Mais de 15 anos depois, continuamos fiéis a essa missão.
            </p>
          </motion.div>
        </div>
      </section>

      {/* História */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">De uma ideia a uma referência em Lisboa</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Em 2009, Ricardo Almeida — instrutor com mais de uma década de experiência — decidiu que a forma como as escolas de condução funcionavam em Portugal precisava de mudar. Com demasiada frequência, os alunos eram tratados como números, e a qualidade do ensino ficava muito aquém do necessário.
                </p>
                <p>
                  Foi assim que nasceu a NextDrive Academy, no coração de Lisboa. Com uma abordagem centrada no aluno, metodologia pedagógica inovadora e um compromisso inabalável com a qualidade, a escola rapidamente ganhou reputação.
                </p>
                <p>
                  Hoje, com uma equipa de 4 instrutores certificados pelo IMT, mais de 2.000 alunos formados e uma taxa de aprovação de 87%, a NextDrive Academy é uma das escolas de condução de referência em Lisboa — e não temos intenção de parar por aqui.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { value: '2009', label: 'Ano de fundação' },
                  { value: '2.000+', label: 'Alunos formados' },
                  { value: '87%', label: 'Taxa de aprovação' },
                  { value: '4.9★', label: 'Google Reviews' },
                ].map(stat => (
                  <div key={stat.label} className="bg-slate-50 rounded-2xl p-4">
                    <div className="font-display font-bold text-3xl text-primary-700">{stat.value}</div>
                    <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=500&fit=crop"
                alt="Aula prática de condução NextDrive Academy"
                className="rounded-2xl object-cover w-full h-56 shadow-lg"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&h=300&fit=crop"
                alt="Instrutor NextDrive Academy em Lisboa"
                className="rounded-2xl object-cover w-full h-56 shadow-lg mt-8"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop"
                alt="Interior de viatura de treino NextDrive Academy"
                className="rounded-2xl object-cover w-full h-40 shadow-lg"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
                alt="Sala de aulas teóricas NextDrive Academy Lisboa"
                className="rounded-2xl object-cover w-full h-40 shadow-lg mt-4"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Missão, Visão & Valores</h2>
            <p className="section-subtitle mx-auto">O que nos guia todos os dias.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                label: 'Missão',
                icon: Target,
                color: 'bg-primary-50 text-primary-600',
                text: 'Formar condutores seguros, responsáveis e confiantes, através de um ensino de qualidade que respeita o ritmo e as necessidades de cada aluno.',
              },
              {
                label: 'Visão',
                icon: Eye,
                color: 'bg-blue-50 text-blue-600',
                text: 'Ser a escola de condução de referência em Portugal, reconhecida pela excelência pedagógica, pela taxa de aprovação e pela satisfação dos alunos.',
              },
              {
                label: 'Valores',
                icon: Heart,
                color: 'bg-rose-50 text-rose-600',
                text: 'Integridade, paixão pelo ensino, respeito pelo aluno, melhoria contínua e compromisso com a segurança rodoviária.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card p-8 text-center"
              >
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <item.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-4">{item.label}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-100"
              >
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-primary-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{v.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipa */}
      <section id="equipa" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge bg-primary-50 text-primary-700 mb-4">A nossa equipa</span>
            <h2 className="section-title mb-4">Conheça os nossos instrutores</h2>
            <p className="section-subtitle mx-auto">
              Profissionais apaixonados, certificados pelo IMT e dedicados ao sucesso de cada aluno.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card overflow-hidden group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={`${member.name} — ${member.role} na NextDrive Academy Lisboa`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 mb-0.5">{member.name}</h3>
                  <p className="text-primary-600 text-sm font-medium mb-1">{member.role}</p>
                  <p className="text-xs text-slate-400 mb-3">{member.experience}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map(s => (
                      <span key={s} className="badge bg-slate-100 text-slate-600 text-xs py-0.5 px-2">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section id="testemunhos" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge bg-primary-50 text-primary-700 mb-4">Testemunhos</span>
            <h2 className="section-title mb-4">O que dizem os nossos alunos</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="text-accent-500 fill-accent-500" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img
                    src={t.avatar}
                    alt={`Foto de ${t.name}, aluno da NextDrive Academy`}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role} · {t.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Quer fazer parte desta história?</h2>
          <p className="text-xl text-primary-100 mb-8">Marque já a sua aula e comece hoje mesmo.</p>
          <Link to="/marcacao" className="btn-accent text-base px-8 py-4">
            Marcar Aula Gratuita
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
