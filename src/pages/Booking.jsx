import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { CheckCircle, Calendar, Clock, User, Phone, Mail, Car, ArrowRight, ChevronLeft } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'

const steps = ['Tipo de Aula', 'Data & Hora', 'Os seus dados', 'Confirmação']

const lessonTypes = [
  { id: 'categoria-b', label: 'Categoria B', desc: 'Aula prática de condução (automóvel)', icon: '🚗', price: '€45/hora' },
  { id: 'codigo', label: 'Aula de Código', desc: 'Preparação para o exame teórico', icon: '📚', price: 'Incluída no pacote' },
  { id: 'intensivo', label: 'Curso Intensivo', desc: 'Aulas diárias para obter a carta rapidamente', icon: '⚡', price: '€950 (pacote)' },
  { id: 'reciclagem', label: 'Reciclagem', desc: 'Recuperar a confiança ao volante', icon: '🔄', price: '€45/hora' },
  { id: 'defensiva', label: 'Condução Defensiva', desc: 'Técnicas avançadas de segurança', icon: '🛡️', price: '€180 (curso)' },
  { id: 'avaliacao', label: 'Aula de Avaliação', desc: 'Sessão gratuita de avaliação inicial', icon: '🎯', price: 'Grátis' },
]

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00',
]

const getAvailableSlots = (date) => {
  if (!date) return []
  const d = new Date(date)
  const day = d.getDay()
  if (day === 0) return []
  if (day === 6) return timeSlots.slice(0, 6)
  const available = timeSlots.filter(() => Math.random() > 0.3)
  return available.length > 0 ? available : timeSlots.slice(0, 4)
}

const getMinDate = () => {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
}

const fadeUp = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
}

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedType, setSelectedType] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const availableSlots = getAvailableSlots(selectedDate)

  const { register, handleSubmit, formState: { errors }, getValues } = useForm()

  const onSubmit = (data) => {
    setSubmitted(true)
  }

  const canProceed = [
    !!selectedType,
    !!selectedDate && !!selectedTime,
    true,
  ]

  if (submitted) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-xl p-12 max-w-lg w-full text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={36} className="text-green-600" />
            </div>
            <h2 className="font-display font-bold text-3xl text-slate-900 mb-4">Marcação Confirmada!</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Recebemos a sua marcação. Irá receber um email de confirmação em breve com todos os detalhes. Em caso de dúvida, contacte-nos.
            </p>
            <div className="bg-slate-50 rounded-2xl p-5 text-left space-y-3 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Tipo de aula</span>
                <span className="font-semibold text-slate-900">{lessonTypes.find(t => t.id === selectedType)?.label}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Data</span>
                <span className="font-semibold text-slate-900">{new Date(selectedDate).toLocaleDateString('pt-PT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Hora</span>
                <span className="font-semibold text-slate-900">{selectedTime}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Nome</span>
                <span className="font-semibold text-slate-900">{getValues('name')}</span>
              </div>
            </div>
            <a href="/" className="btn-primary w-full justify-center">
              Voltar ao início
            </a>
          </motion.div>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-primary-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&h=500&fit=crop"
            alt="Marcação de aulas de condução online NextDrive Academy Lisboa"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge bg-white/10 text-white border border-white/20 mb-5">Marcação Online</span>
            <h1 className="font-display font-bold text-5xl text-white mb-4">Marque a sua aula</h1>
            <p className="text-xl text-white/80">Rápido, simples e sem complicações. Confirmaçã imediata.</p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-10">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    i < currentStep ? 'bg-primary-600 text-white' :
                    i === currentStep ? 'bg-primary-600 text-white ring-4 ring-primary-100' :
                    'bg-white text-slate-400 border-2 border-slate-200'
                  }`}>
                    {i < currentStep ? <CheckCircle size={16} /> : i + 1}
                  </div>
                  <span className={`hidden sm:block text-xs mt-1.5 font-medium transition-colors ${
                    i <= currentStep ? 'text-primary-600' : 'text-slate-400'
                  }`}>{step}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 transition-all duration-300 ${
                    i < currentStep ? 'bg-primary-600' : 'bg-slate-200'
                  }`} style={{ minWidth: 20 }} />
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <AnimatePresence mode="wait">
              {/* Step 0 — Tipo de Aula */}
              {currentStep === 0 && (
                <motion.div key="step0" variants={fadeUp} initial="hidden" animate="visible" exit="exit" className="p-8">
                  <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">Que tipo de aula pretende?</h2>
                  <p className="text-slate-500 mb-8">Selecione a opção que melhor se adapta às suas necessidades.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {lessonTypes.map(type => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                          selectedType === type.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-slate-200 hover:border-primary-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="text-2xl mb-2">{type.icon}</div>
                        <div className="font-semibold text-slate-900">{type.label}</div>
                        <div className="text-sm text-slate-500 mt-0.5 mb-2">{type.desc}</div>
                        <div className="text-sm font-semibold text-primary-600">{type.price}</div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 1 — Data & Hora */}
              {currentStep === 1 && (
                <motion.div key="step1" variants={fadeUp} initial="hidden" animate="visible" exit="exit" className="p-8">
                  <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">Quando prefere?</h2>
                  <p className="text-slate-500 mb-8">Escolha a data e hora mais conveniente para si.</p>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        <Calendar size={14} className="inline mr-2 text-primary-600" />
                        Data
                      </label>
                      <input
                        type="date"
                        min={getMinDate()}
                        value={selectedDate}
                        onChange={e => { setSelectedDate(e.target.value); setSelectedTime('') }}
                        className="input-field"
                      />
                      {selectedDate && (
                        <p className="text-xs text-slate-400 mt-2">
                          {new Date(selectedDate).toLocaleDateString('pt-PT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        <Clock size={14} className="inline mr-2 text-primary-600" />
                        Hora disponível
                      </label>
                      {!selectedDate ? (
                        <p className="text-sm text-slate-400 italic">Selecione primeiro a data</p>
                      ) : availableSlots.length === 0 ? (
                        <p className="text-sm text-red-500">Sem horários disponíveis neste dia</p>
                      ) : (
                        <div className="grid grid-cols-3 gap-2">
                          {availableSlots.map(slot => (
                            <button
                              key={slot}
                              onClick={() => setSelectedTime(slot)}
                              className={`py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                                selectedTime === slot
                                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                                  : 'bg-slate-50 text-slate-700 hover:bg-primary-50 hover:text-primary-700 border border-slate-200'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2 — Dados pessoais */}
              {currentStep === 2 && (
                <motion.div key="step2" variants={fadeUp} initial="hidden" animate="visible" exit="exit" className="p-8">
                  <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">Os seus dados</h2>
                  <p className="text-slate-500 mb-8">Precisamos de alguns dados para confirmar a sua marcação.</p>
                  <form id="booking-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          <User size={14} className="inline mr-2 text-primary-600" />
                          Nome completo *
                        </label>
                        <input
                          {...register('name', { required: 'Nome obrigatório' })}
                          type="text"
                          placeholder="O seu nome"
                          className={`input-field ${errors.name ? 'border-red-400 focus:ring-red-400' : ''}`}
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          <Phone size={14} className="inline mr-2 text-primary-600" />
                          Telemóvel *
                        </label>
                        <input
                          {...register('phone', {
                            required: 'Telemóvel obrigatório',
                            pattern: { value: /^(\+351)?9[0-9]{8}$/, message: 'Número inválido' },
                          })}
                          type="tel"
                          placeholder="+351 9XX XXX XXX"
                          className={`input-field ${errors.phone ? 'border-red-400 focus:ring-red-400' : ''}`}
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        <Mail size={14} className="inline mr-2 text-primary-600" />
                        Email *
                      </label>
                      <input
                        {...register('email', {
                          required: 'Email obrigatório',
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' },
                        })}
                        type="email"
                        placeholder="seu@email.com"
                        className={`input-field ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Já tem experiência de condução?</label>
                      <select {...register('experience')} className="select-field">
                        <option value="">Selecionar...</option>
                        <option value="none">Nunca conduzi</option>
                        <option value="some">Já conduzi algumas vezes</option>
                        <option value="lapsed">Tenho carta há muito tempo mas não conduzo</option>
                        <option value="regular">Conduzo regularmente</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Notas adicionais</label>
                      <textarea
                        {...register('notes')}
                        rows={3}
                        placeholder="Alguma informação adicional que queira partilhar..."
                        className="input-field resize-none"
                      />
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        {...register('terms', { required: 'Deve aceitar os termos' })}
                        type="checkbox"
                        className="mt-0.5 w-4 h-4 accent-primary-600"
                      />
                      <span className="text-sm text-slate-600">
                        Aceito a <a href="/privacidade" className="text-primary-600 hover:underline">política de privacidade</a> e os{' '}
                        <a href="/termos" className="text-primary-600 hover:underline">termos e condições</a>.
                      </span>
                    </label>
                    {errors.terms && <p className="text-xs text-red-500">{errors.terms.message}</p>}
                  </form>
                </motion.div>
              )}

              {/* Step 3 — Confirmação */}
              {currentStep === 3 && (
                <motion.div key="step3" variants={fadeUp} initial="hidden" animate="visible" exit="exit" className="p-8">
                  <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">Confirme a sua marcação</h2>
                  <p className="text-slate-500 mb-8">Verifique os detalhes antes de confirmar.</p>
                  <div className="bg-slate-50 rounded-2xl p-6 space-y-4 mb-8">
                    <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                      <div className="text-3xl">{lessonTypes.find(t => t.id === selectedType)?.icon}</div>
                      <div>
                        <div className="font-semibold text-slate-900">{lessonTypes.find(t => t.id === selectedType)?.label}</div>
                        <div className="text-sm text-slate-500">{lessonTypes.find(t => t.id === selectedType)?.price}</div>
                      </div>
                    </div>
                    {[
                      { label: 'Data', value: selectedDate ? new Date(selectedDate).toLocaleDateString('pt-PT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '' },
                      { label: 'Hora', value: selectedTime },
                      { label: 'Nome', value: getValues('name') },
                      { label: 'Telemóvel', value: getValues('phone') },
                      { label: 'Email', value: getValues('email') },
                    ].map(row => (
                      <div key={row.label} className="flex justify-between text-sm">
                        <span className="text-slate-500">{row.label}</span>
                        <span className="font-semibold text-slate-900">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-800 mb-6">
                    Receberá uma confirmação por email e SMS. A nossa equipa pode contactá-lo para confirmar a disponibilidade do instrutor.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="px-8 pb-8 flex items-center justify-between border-t border-slate-100 pt-6">
              <button
                onClick={() => setCurrentStep(s => s - 1)}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  currentStep === 0
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <ChevronLeft size={16} /> Anterior
              </button>

              {currentStep < 3 ? (
                <button
                  onClick={() => setCurrentStep(s => s + 1)}
                  disabled={!canProceed[currentStep]}
                  className={`btn-primary text-sm ${!canProceed[currentStep] ? 'opacity-50 cursor-not-allowed hover:translate-y-0 shadow-none' : ''}`}
                >
                  Continuar <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  type="submit"
                  form="booking-form"
                  onClick={handleSubmit(onSubmit)}
                  className="btn-accent text-sm"
                >
                  Confirmar Marcação <CheckCircle size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {['Confirmação imediata', 'Cancelamento gratuito 24h', 'Sem taxas escondidas'].map(t => (
              <div key={t} className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle size={14} className="text-green-500" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
