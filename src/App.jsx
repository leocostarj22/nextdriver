import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Booking from './pages/Booking'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'

const LEAD_INTEREST_STORAGE_KEY = 'nextdrive_lead_interest_v1'
const LEAD_INTEREST_SESSION_SHOWN_KEY = 'nextdrive_lead_interest_prompt_shown_v1'

function normalizeInterest(value) {
  if (value === 'sim' || value === 'nao') return value
  return null
}

function buildWhatsAppUrl({ interest, href }) {
  const base = 'https://wa.me/351910000000'

  const text = interest === 'sim'
    ? `Olá! Quero ser contactado(a) sobre a carta de condução.\n\nOrigem: email marketing\nLink: ${href}`
    : `Olá! Vim do email marketing e estou a ver o site por agora.\n\nLink: ${href}`

  return `${base}?text=${encodeURIComponent(text)}`
}

function LeadInterestPrompt() {
  const location = useLocation()
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [interest, setInterest] = useState(null)

  const params = useMemo(() => new URLSearchParams(location.search), [location.search])
  const interesseParam = normalizeInterest(params.get('interesse'))

  useEffect(() => {
    if (!interesseParam) return

    const shownKey = `${LEAD_INTEREST_SESSION_SHOWN_KEY}:${interesseParam}:${location.pathname}`
    if (sessionStorage.getItem(shownKey)) return

    const payload = {
      interesse: interesseParam,
      ts: Date.now(),
      pathname: location.pathname,
      href: window.location.href,
    }

    try {
      localStorage.setItem(LEAD_INTEREST_STORAGE_KEY, JSON.stringify(payload))
    } catch {
    }

    try {
      sessionStorage.setItem(shownKey, '1')
    } catch {
    }

    setInterest(interesseParam)
    setOpen(true)

    const next = new URLSearchParams(location.search)
    next.delete('interesse')

    navigate(
      {
        pathname: location.pathname,
        search: next.toString() ? `?${next.toString()}` : '',
        hash: location.hash,
      },
      { replace: true },
    )
  }, [interesseParam, location.hash, location.pathname, location.search, navigate])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  if (!open || !interest) return null

  const href = window.location.href

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <button
          type="button"
          aria-label="Fechar"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
        />

        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-lg rounded-3xl border border-white/60 bg-white/90 backdrop-blur-xl shadow-2xl shadow-slate-900/20"
        >
          <div className="p-6 sm:p-7">
            {interest === 'sim' ? (
              <>
                <div className="badge bg-primary-50 text-primary-700 mb-4">Pedido de contacto</div>
                <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">Quer que entremos em contacto consigo?</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Podemos ajudar a escolher o melhor plano, tirar dúvidas e marcar aulas.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => window.open(buildWhatsAppUrl({ interest, href }), '_blank', 'noopener,noreferrer')}
                    className="btn-primary w-full justify-center"
                  >
                    Sim, quero ser contactado
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false)
                      navigate('/contactos?interesse=sim')
                    }}
                    className="btn-secondary w-full justify-center"
                  >
                    Prefiro por email
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-4 w-full text-sm font-semibold text-slate-500 hover:text-slate-700"
                >
                  Agora não
                </button>
              </>
            ) : (
              <>
                <div className="badge bg-slate-100 text-slate-700 mb-4">Preferência registada</div>
                <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">Sem problema</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Registámos que prefere apenas ver por agora. Se mudar de ideias, estamos aqui.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full justify-center"
                  >
                    Continuar no site
                  </button>
                  <button
                    type="button"
                    onClick={() => window.open(buildWhatsAppUrl({ interest: 'sim', href }), '_blank', 'noopener,noreferrer')}
                    className="btn-secondary w-full justify-center"
                  >
                    Falar no WhatsApp
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <LeadInterestPrompt />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nextdriver" element={<Home />} />
              <Route path="/nextdrive" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/marcacao" element={<Booking />} />
              <Route path="/precos" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contactos" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}
