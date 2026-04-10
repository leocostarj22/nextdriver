import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const faqs = [
  {
    q: 'Como posso inscrever-me na NextDrive Academy?',
    a: 'Pode inscrever-se através do nosso sistema de marcação online, por telefone (+351 21 000 0000) ou presencialmente na nossa sede. O processo é simples e rápido.',
  },
  {
    q: 'A escola disponibiliza simulador de condução?',
    a: 'Sim, dispomos de um simulador de condução moderno para preparação antes das aulas na estrada. Incluído nos pacotes Completo e Premium.',
  },
  {
    q: 'Qual é o horário das aulas práticas?',
    a: 'As aulas práticas decorrem de segunda a sexta-feira das 08h00 às 20h00 e ao sábado das 08h00 às 14h00, sujeito à disponibilidade dos instrutores.',
  },
  {
    q: 'As aulas teóricas são obrigatórias?',
    a: 'Sim, as aulas teóricas fazem parte do processo de formação. Oferecemos aulas presenciais e online para maior flexibilidade.',
  },
  {
    q: 'Quantas aulas posso agendar por semana?',
    a: 'Não há limite. Nos nossos pacotes normais, a média é 2-3 aulas por semana. No intensivo, podem ser até 2 aulas por dia.',
  },
  {
    q: 'O que preciso de trazer para a primeira aula?',
    a: 'Para a primeira aula prática, precisa do seu Cartão de Cidadão ou passaporte. Para as aulas teóricas, basta vir com vontade de aprender.',
  },
  {
    q: 'É possível mudar de instrutor?',
    a: 'Sim, embora recomendemos consistência para melhor aprendizagem, pode solicitar mudança de instrutor sem qualquer custo adicional.',
  },
  {
    q: 'Qual é a política de cancelamento?',
    a: 'Pode cancelar ou remarcar até 24 horas antes sem qualquer custo. Cancelamentos com menos de 24 horas têm uma taxa de €15.',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&h=500&fit=crop"
            alt="Contacte a NextDrive Academy — escola de condução em Lisboa"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge bg-white/10 text-white border border-white/20 mb-5">Contactos</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              Fale connosco
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Estamos disponíveis para responder a todas as suas dúvidas. Escolha o canal que preferir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Phone,
                title: 'Telefone',
                primary: '+351 21 000 0000',
                secondary: 'Seg-Sex: 9h–19h',
                href: 'tel:+351210000000',
                color: 'bg-blue-50 text-blue-600',
              },
              {
                icon: Mail,
                title: 'Email',
                primary: 'info@nextdriveacademy.pt',
                secondary: 'Resposta em 24h',
                href: 'mailto:info@nextdriveacademy.pt',
                color: 'bg-purple-50 text-purple-600',
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                primary: '+351 910 000 000',
                secondary: 'Chat rápido e direto',
                href: 'https://wa.me/351910000000',
                color: 'bg-green-50 text-green-600',
              },
              {
                icon: MapPin,
                title: 'Morada',
                primary: 'Av. da Liberdade, 110',
                secondary: '1250-145 Lisboa',
                href: 'https://maps.google.com',
                color: 'bg-red-50 text-red-600',
              },
            ].map((item, i) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card p-6 text-center hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <item.icon size={22} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-primary-600 font-medium text-sm">{item.primary}</p>
                <p className="text-slate-400 text-xs mt-0.5">{item.secondary}</p>
              </motion.a>
            ))}
          </div>

          {/* Schedule */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-6 mb-16 max-w-lg mx-auto"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Clock size={20} className="text-primary-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Horário de Funcionamento</h3>
            </div>
            <div className="space-y-3">
              {[
                { day: 'Segunda-feira a Sexta-feira', hours: '09:00 – 19:00', open: true },
                { day: 'Sábado', hours: '09:00 – 13:00', open: true },
                { day: 'Domingo e feriados', hours: 'Encerrado', open: false },
              ].map(s => (
                <div key={s.day} className="flex items-center justify-between py-2 border-b border-slate-200 last:border-0">
                  <span className="text-slate-600 text-sm">{s.day}</span>
                  <span className={`text-sm font-semibold ${s.open ? 'text-primary-700' : 'text-slate-400'}`}>{s.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl text-slate-900 mb-6">Envie-nos uma mensagem</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl p-4 mb-6"
                >
                  <CheckCircle className="text-green-600" size={20} />
                  <div>
                    <p className="font-semibold text-green-900 text-sm">Mensagem enviada!</p>
                    <p className="text-green-700 text-xs">Responderemos em até 24 horas úteis.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nome *</label>
                    <input
                      {...register('name', { required: 'Nome obrigatório' })}
                      type="text"
                      placeholder="O seu nome"
                      className={`input-field ${errors.name ? 'border-red-400' : ''}`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Telemóvel</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="+351 9XX XXX XXX"
                      className="input-field"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                  <input
                    {...register('email', {
                      required: 'Email obrigatório',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' },
                    })}
                    type="email"
                    placeholder="seu@email.com"
                    className={`input-field ${errors.email ? 'border-red-400' : ''}`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Assunto *</label>
                  <select {...register('subject', { required: true })} className="select-field">
                    <option value="">Selecionar assunto...</option>
                    <option value="info">Informações gerais</option>
                    <option value="inscription">Inscrição no curso</option>
                    <option value="pricing">Dúvidas sobre preços</option>
                    <option value="schedule">Marcação de aulas</option>
                    <option value="complaint">Reclamação</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Mensagem *</label>
                  <textarea
                    {...register('message', { required: 'Mensagem obrigatória', minLength: { value: 20, message: 'Mínimo 20 caracteres' } })}
                    rows={5}
                    placeholder="Escreva a sua mensagem aqui..."
                    className={`input-field resize-none ${errors.message ? 'border-red-400' : ''}`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    {...register('privacy', { required: 'Deve aceitar a política de privacidade' })}
                    type="checkbox"
                    className="mt-0.5 w-4 h-4 accent-primary-600"
                  />
                  <span className="text-sm text-slate-600">
                    Li e aceito a <a href="/privacidade" className="text-primary-600 hover:underline">política de privacidade</a>.
                  </span>
                </label>
                {errors.privacy && <p className="text-xs text-red-500">{errors.privacy.message}</p>}
                <button type="submit" className="btn-primary w-full justify-center">
                  Enviar Mensagem <ArrowRight size={16} />
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <h2 className="font-display font-bold text-3xl text-slate-900 mb-6">Como nos encontrar</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 mb-6 h-80">
                <iframe
                  title="Localização da NextDrive Academy em Lisboa"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.4!2d-9.1488!3d38.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbef5e580e0!2sAvenida%20da%20Liberdade%2C%20Lisboa!5e0!3m2!1spt!2spt!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="bg-slate-50 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-900 mb-3">Como chegar</h3>
                <div className="space-y-2.5 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-primary-700 flex-shrink-0">Metro:</span>
                    Linha Azul — Paragem Avenida ou Marquês de Pombal (2 min a pé)
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-primary-700 flex-shrink-0">Autocarro:</span>
                    Linhas 709, 711, 758 — Paragem Av. da Liberdade
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-primary-700 flex-shrink-0">Carro:</span>
                    Parque de estacionamento no Edifício Marquês a 150m
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="badge bg-primary-50 text-primary-700 mb-4">FAQ</span>
            <h2 className="section-title mb-4">Perguntas Frequentes</h2>
            <p className="section-subtitle mx-auto">Não encontrou o que procura? Contacte-nos diretamente.</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  {faq.q}
                  <span className={`text-slate-400 flex-shrink-0 ml-4 transition-transform duration-200 ${openFaq === i ? 'rotate-90' : ''}`}>›</span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Ainda tem dúvidas?</h2>
          <p className="text-xl text-primary-100 mb-8">A nossa equipa está à sua disposição. Contacte-nos agora.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+351210000000" className="btn-accent text-base px-8 py-4">
              <Phone size={18} />
              Ligar agora
            </a>
            <Link to="/marcacao" className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 text-white font-semibold rounded-xl border border-white/25 hover:bg-white/25 transition-all">
              Marcar Aula
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
