import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Star, CheckCircle, ChevronRight, Phone } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import PageWrapper from '../components/PageWrapper'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}


export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <PageWrapper>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex items-center overflow-hidden">
        {/* Background image with parallax */}
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop&q=80"
            alt="Aula prática de condução em Lisboa com instrutor certificado NextDrive Academy"
            className="object-cover w-full h-full scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl bg-primary-400/15" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl bg-accent-500/10" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative px-4 pt-32 pb-32 mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
          {/* Main hero content — left aligned, clean */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass inline-flex items-center gap-2.5 px-5 py-2.5 text-white text-sm font-medium rounded-full mb-10"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Escola de condução certificada em Lisboa
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-extrabold text-[2.75rem] sm:text-6xl lg:text-[3.25rem] text-white leading-[1.06] mb-8 tracking-tight"
            >
              Conduza o seu{' '}
              <span className="inline-block relative">
                <span className="relative z-10 text-accent-400">futuro</span>
                <span className="absolute right-0 left-0 bottom-1 h-3 rounded -skew-x-3 bg-accent-500/30" />
              </span>
              <br className="hidden sm:block" />
              <span className="sm:block">com confiança</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-10 max-w-xl text-lg leading-relaxed sm:text-xl text-white/80"
            >
              Instrutores certificados, aulas flexíveis e a mais alta taxa de aprovação de Lisboa. A sua carta começa aqui.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link to="/marcacao" className="px-8 py-4 text-base btn-accent">
                Marcar Aula Gratuita
                <ArrowRight size={18} />
              </Link>
              <Link to="/servicos" className="inline-flex gap-2 items-center px-8 py-4 text-base font-semibold text-white rounded-2xl transition-all duration-300 glass hover:bg-white/20">
                Ver Serviços
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-y-2 gap-x-6"
            >
              {['Sem taxas escondidas', 'Primeira aula grátis', 'Aprovação garantida*'].map(t => (
                <div key={t} className="flex gap-2 items-center text-sm text-white/70">
                  <CheckCircle size={14} className="flex-shrink-0 text-green-400" />
                  {t}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Inline stats row — bottom of hero, horizontally aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid grid-cols-2 gap-3 mt-16 lg:grid-cols-4"
          >
            {[
              { value: '2.000+', label: 'Alunos formados' },
              { value: '87%', label: 'Taxa de aprovação' },
              { value: '15+', label: 'Anos de experiência' },
              { value: '4.9', label: 'Avaliação Google', extra: '★' },
            ].map(stat => (
              <div key={stat.label} className="flex gap-3 items-center px-5 py-4 rounded-2xl glass">
                <div>
                  <div className="text-2xl font-bold leading-none text-white font-display">
                    {stat.value}<span className="text-accent-400">{stat.extra || ''}</span>
                  </div>
                  <div className="mt-1 text-sm text-white/50">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="flex justify-center w-6 h-10 rounded-full border-2 border-white/25">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* ── About Preview ── */}
      <section className="overflow-hidden relative py-24 bg-white">
        <div className="absolute inset-0 bg-mesh" />
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-16 items-center lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="mb-5 badge bg-primary-50 text-primary-700">Sobre a NextDrive Academy</span>
              <h2 className="mb-6 section-title">
                Mais do que uma escola —{' '}
                <span className="text-gradient">uma parceria para a vida</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Fundada em 2009, a NextDrive Academy nasceu com uma missão simples: transformar a forma como Lisboa aprende a conduzir. Com instrutores certificados e uma metodologia própria, já ajudámos mais de 2.000 alunos a conquistar a sua carta.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { text: 'Metodologia exclusiva', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=48&h=48&fit=crop' },
                  { text: 'Viaturas modernas', img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=48&h=48&fit=crop' },
                  { text: 'Acompanhamento individual', img: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=48&h=48&fit=crop' },
                  { text: 'Preparação para exame', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=48&h=48&fit=crop' },
                ].map(item => (
                  <div key={item.text} className="flex gap-3 items-center p-3 rounded-2xl bg-slate-50">
                    <img src={item.img} alt="" className="object-cover flex-shrink-0 w-10 h-10 rounded-xl" loading="lazy" />
                    <span className="text-sm font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link to="/sobre" className="btn-primary">
                Conhecer a nossa história
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="relative"
            >
              {/* Mosaic layout */}
              <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[500px]">
                <div className="overflow-hidden col-span-7 row-span-4 rounded-3xl image-shine">
                  <img
                    src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&h=500&fit=crop"
                    alt="Instrutor NextDrive Academy em aula prática de condução em Lisboa"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden col-span-5 row-span-3 rounded-3xl image-shine">
                  <img
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop"
                    alt="Aluno a conduzir durante aula prática"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden col-span-5 row-span-3 rounded-3xl image-shine">
                  <img
                    src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400&h=300&fit=crop"
                    alt="Painel interior do carro de treino moderno"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden col-span-7 row-span-2 rounded-3xl image-shine">
                  <img
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=200&fit=crop"
                    alt="Sala de aulas teóricas moderna NextDrive Academy"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-3xl shadow-2xl shadow-slate-200/60 p-5 max-w-[240px] border border-slate-100"
              >
                <div className="flex items-center gap-1.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-accent-500 fill-accent-500" />
                  ))}
                  <span className="ml-1 text-sm font-bold text-slate-800">4.9</span>
                </div>
                <p className="text-sm leading-snug text-slate-600">"Melhor escola de condução de Lisboa, sem dúvida."</p>
                <p className="mt-2 text-xs text-slate-400">— Ana R., Google Reviews</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Us — Image-driven ── */}
      <section className="overflow-hidden relative py-24 bg-slate-50">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="mb-5 badge bg-primary-50 text-primary-700">Porquê a NextDrive?</span>
            <h2 className="mb-5 section-title">O que nos torna diferentes</h2>
            <p className="mx-auto section-subtitle">
              Não somos apenas mais uma escola de condução. Somos o parceiro que vai consigo.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=260&fit=crop&crop=face',
                alt: 'Instrutor certificado pelo IMT a dar aula de condução',
                title: 'Instrutores Certificados',
                desc: 'Todos certificados pelo IMT com anos de experiência pedagógica.',
              },
              {
                img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=260&fit=crop',
                alt: 'Aluna aprovada no exame de condução com certificado',
                title: 'Alta Taxa de Aprovação',
                desc: '87% dos alunos aprovam à primeira — acima da média nacional.',
              },
              {
                img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=260&fit=crop',
                alt: 'Sala de aulas modernas com horários flexíveis',
                title: 'Horários Flexíveis',
                desc: 'Aulas de manhã, tarde e noite. Adaptamo-nos ao seu ritmo.',
              },
              {
                img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=260&fit=crop',
                alt: 'Plataforma online de estudo com mais de 5000 questões',
                title: 'Plataforma Online 24/7',
                desc: 'Estude o código a qualquer hora com +5.000 questões atualizadas.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="overflow-hidden transition-all duration-500 card group hover:-translate-y-2"
              >
                <div className="overflow-hidden relative h-40">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t to-transparent from-slate-900/40" />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="overflow-hidden relative py-24 bg-white">
        <div className="absolute inset-0 bg-mesh" />
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6 justify-between mb-14 sm:flex-row sm:items-end"
          >
            <div>
              <span className="mb-5 badge bg-primary-50 text-primary-700">Os nossos serviços</span>
              <h2 className="section-title">Formação para cada etapa</h2>
            </div>
            <Link to="/servicos" className="flex-shrink-0 btn-secondary">
              Ver todos os serviços
              <ChevronRight size={16} />
            </Link>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Categoria B',
                desc: 'O percurso completo para obter a sua carta de condução, desde o código até ao exame prático.',
                img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop',
                alt: 'Aula prática de condução categoria B em Lisboa',
                href: '/servicos#categoria-b',
                badge: 'Mais popular',
                badgeColor: 'bg-primary-600',
              },
              {
                title: 'Curso Intensivo',
                desc: 'Tire a carta em 2 a 3 semanas com aulas diárias e um instrutor dedicado.',
                img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
                alt: 'Curso intensivo de condução em Lisboa com aulas diárias',
                href: '/servicos#intensivo',
                badge: 'Rápido',
                badgeColor: 'bg-accent-500',
              },
              {
                title: 'Reciclagem',
                desc: 'Recupere a confiança ao volante com aulas personalizadas para condutores com carta.',
                img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&h=400&fit=crop',
                alt: 'Aulas de reciclagem para condutores com carta',
                href: '/servicos#reciclagem',
                badge: 'Flexível',
                badgeColor: 'bg-emerald-500',
              },
            ].map((svc, i) => (
              <motion.div
                key={svc.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link to={svc.href} className="block overflow-hidden card group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={svc.img}
                      alt={svc.alt}
                      loading="lazy"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 opacity-60 img-overlay-bottom" />
                    <span className={`absolute top-4 left-4 badge ${svc.badgeColor} text-white text-xs font-semibold`}>{svc.badge}</span>
                    <div className="absolute right-4 bottom-4 left-4">
                      <h3 className="mb-1 text-xl font-bold text-white font-display">{svc.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="mb-4 text-sm leading-relaxed text-slate-500">{svc.desc}</p>
                    <span className="text-primary-600 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                      Saber mais <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Steps — Visual ── */}
      <section className="overflow-hidden relative py-24 text-white bg-primary-950">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=700&fit=crop"
            alt="Estrada à noite em Lisboa"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-primary-950/80" />
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="mb-5 text-white badge glass">Como funciona</span>
            <h2 className="mb-5 text-4xl font-bold text-white font-display md:text-5xl">
              Do registo à carta, em 4 passos
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: '01', title: 'Inscrição', desc: 'Registe-se online ou visite a nossa escola. Avaliação gratuita.', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop' },
              { step: '02', title: 'Código', desc: 'Prepare o exame teórico com a nossa plataforma e simulações.', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop' },
              { step: '03', title: 'Prática', desc: 'Aulas com instrutor certificado, ao seu ritmo e na sua zona.', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=300&h=200&fit=crop' },
              { step: '04', title: 'Carta!', desc: 'Aprovação e carta na mão. Independência total ao volante!', img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-1 rounded-3xl glass group"
              >
                <div className="rounded-[20px] overflow-hidden mb-4 h-36">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="px-4 pb-5">
                  <div className="mb-2 text-sm font-bold font-display text-accent-400">Passo {item.step}</div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link to="/marcacao" className="px-8 py-4 text-base btn-accent">
              Começar Agora
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="overflow-hidden relative py-24 bg-white">
        <div className="absolute inset-0 bg-mesh" />
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="mb-5 badge bg-primary-50 text-primary-700">Testemunhos</span>
            <h2 className="mb-5 section-title">O que dizem os nossos alunos</h2>
            <p className="mx-auto section-subtitle">
              Mais de 500 avaliações de 5 estrelas no Google.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative p-7 card"
              >
                {/* Large quotation mark */}
                <div className="absolute top-4 right-5 text-6xl leading-none select-none font-display text-primary-100">"</div>
                <div className="flex items-center gap-1.5 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="text-accent-500 fill-accent-500" />
                  ))}
                </div>
                <p className="relative z-10 mb-6 leading-relaxed text-slate-700">"{t.text}"</p>
                <div className="flex gap-3 items-center pt-5 border-t border-slate-100">
                  <img
                    src={t.avatar}
                    alt={`Foto de ${t.name}, aluno da NextDrive Academy`}
                    className="object-cover w-12 h-12 rounded-2xl"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role} · {t.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6 justify-center items-center mt-12 sm:flex-row"
          >
            <div className="flex gap-3 items-center px-6 py-4 rounded-2xl border bg-slate-50 border-slate-200">
              <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div>
                <div className="flex gap-1 items-center">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-accent-500 fill-accent-500" />)}
                  <span className="ml-1 text-sm font-bold text-slate-900">4.9</span>
                </div>
                <p className="text-xs text-slate-500">+500 avaliações no Google</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="overflow-hidden relative py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&h=700&fit=crop"
            alt="Condução segura em estrada de Lisboa"
            className="object-cover w-full h-full"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-primary-900/70" />
        </div>
        <div className="relative px-4 mx-auto max-w-4xl sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white font-display md:text-5xl">
              Pronto para dar o primeiro passo?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-xl text-white/80">
              Junte-se a mais de 2.000 alunos que já conquistaram a sua carta com a NextDrive Academy.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/marcacao" className="px-8 py-4 text-base btn-accent">
                Marcar Aula Agora
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+351210000000" className="inline-flex gap-2 items-center px-8 py-4 font-semibold text-white rounded-2xl transition-all duration-300 glass hover:bg-white/20">
                <Phone size={16} />
                21 000 0000
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ Preview ── */}
      <section className="relative py-24 bg-slate-50">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="mb-5 badge bg-primary-50 text-primary-700">FAQ</span>
            <h2 className="mb-5 section-title">Perguntas Frequentes</h2>
          </motion.div>

          <div className="space-y-3">
            {[
              {
                q: 'Quantas aulas práticas preciso de fazer?',
                a: 'O mínimo legal é 32 horas. O número ideal varia — os nossos instrutores avaliam o seu progresso e recomendam o plano adequado.',
              },
              {
                q: 'Qual é a duração do curso completo?',
                a: 'Em média 2 a 4 meses. No nosso curso intensivo, é possível em 2 a 3 semanas com dedicação diária.',
              },
              {
                q: 'Como funciona a marcação de aulas?',
                a: 'Através da nossa plataforma online, por telefone ou WhatsApp. Simples, rápido e com confirmação imediata.',
              },
              {
                q: 'O preço inclui os exames?',
                a: 'Os pacotes incluem o exame de código. As taxas de exame prático do IMT são separadas, mas ajudamos com toda a logística.',
              },
            ].map((item, i) => (
              <motion.details
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 cursor-pointer card group"
              >
                <summary className="flex justify-between items-center text-lg font-semibold list-none text-slate-900">
                  {item.q}
                  <ChevronRight size={18} className="flex-shrink-0 ml-4 transition-transform duration-300 text-slate-400 group-open:rotate-90" />
                </summary>
                <p className="pt-4 mt-4 leading-relaxed border-t text-slate-600 border-slate-100">{item.a}</p>
              </motion.details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/contactos#faq" className="btn-secondary">
              Ver todas as perguntas
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section className="py-24 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6 justify-between mb-14 sm:flex-row sm:items-end"
          >
            <div>
              <span className="mb-5 badge bg-primary-50 text-primary-700">Blog</span>
              <h2 className="section-title">Dicas e conselhos</h2>
            </div>
            <Link to="/blog" className="flex-shrink-0 btn-secondary">
              Ver todos os artigos
              <ChevronRight size={16} />
            </Link>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Como Passar no Exame de Condução à Primeira',
                excerpt: 'Os conselhos mais valiosos dos nossos instrutores para a aprovação.',
                img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop',
                alt: 'Candidato a realizar exame prático de condução',
                category: 'Dicas',
                readTime: '5 min',
                href: '/blog/como-passar-exame-conducao-primeira-vez',
              },
              {
                title: 'Novas Regras do Código da Estrada 2024',
                excerpt: 'As mudanças ao Código da Estrada que deve conhecer.',
                img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
                alt: 'Sinalização rodoviária e código da estrada',
                category: 'Legislação',
                readTime: '4 min',
                href: '/blog/novas-regras-codigo-estrada-2024',
              },
              {
                title: 'Como Vencer a Ansiedade ao Volante',
                excerpt: 'Técnicas práticas para superar o medo e conduzir com confiança.',
                img: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&h=400&fit=crop',
                alt: 'Condutor calmo ao volante durante aula',
                category: 'Bem-estar',
                readTime: '6 min',
                href: '/blog/vencer-ansiedade-volante',
              },
            ].map((post, i) => (
              <motion.div
                key={post.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link to={post.href} className="block overflow-hidden card group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.img}
                      alt={post.alt}
                      loading="lazy"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 opacity-40 img-overlay-bottom" />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-3 items-center mb-3">
                      <span className="text-xs badge bg-primary-50 text-primary-700">{post.category}</span>
                      <span className="text-xs text-slate-400">{post.readTime} leitura</span>
                    </div>
                    <h3 className="mb-2 font-semibold leading-snug transition-colors text-slate-900 group-hover:text-primary-600">{post.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
