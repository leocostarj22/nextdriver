import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react'

const footerLinks = {
  escola: [
    { href: '/sobre', label: 'Sobre Nós' },
    { href: '/sobre#equipa', label: 'A Nossa Equipa' },
    { href: '/blog', label: 'Blog' },
    { href: '/contactos', label: 'Contactos' },
  ],
  servicos: [
    { href: '/servicos#categoria-b', label: 'Categoria B' },
    { href: '/servicos#intensivo', label: 'Curso Intensivo' },
    { href: '/servicos#reciclagem', label: 'Reciclagem' },
    { href: '/servicos#defensiva', label: 'Condução Defensiva' },
    { href: '/servicos#categoria-a', label: 'Categoria A (Moto)' },
  ],
  utilidades: [
    { href: '/marcacao', label: 'Marcar Aula' },
    { href: '/precos', label: 'Tabela de Preços' },
    { href: '/blog', label: 'Dicas de Condução' },
    { href: '/contactos#faq', label: 'FAQ' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* CTA Strip */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl text-white">Pronto para conduzir o seu futuro?</h3>
            <p className="text-primary-200 mt-1">Marque a sua primeira aula hoje — sem compromissos.</p>
          </div>
          <Link to="/marcacao" className="btn-accent flex-shrink-0">
            Marcar Aula Gratuita
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white leading-none">NextDrive</span>
                <span className="block text-xs text-primary-400 leading-none">Academy</span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xs">
              Escola de condução de referência em Lisboa, com mais de 15 anos de experiência e uma taxa de aprovação superior a 87%.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+351210000000" className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-primary-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Phone size={14} className="text-primary-400 group-hover:text-white" />
                </div>
                +351 21 000 0000
              </a>
              <a href="mailto:info@nextdriveacademy.pt" className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-primary-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Mail size={14} className="text-primary-400 group-hover:text-white" />
                </div>
                info@nextdriveacademy.pt
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <div className="w-8 h-8 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-primary-400" />
                </div>
                Av. da Liberdade, 110<br />1250-145 Lisboa
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <div className="w-8 h-8 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={14} className="text-primary-400" />
                </div>
                <div>
                  Seg–Sex: 9h00–19h00<br />
                  Sáb: 9h00–13h00
                </div>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="Facebook NextDrive Academy" className="w-9 h-9 bg-primary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Instagram NextDrive Academy" className="w-9 h-9 bg-primary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="YouTube NextDrive Academy" className="w-9 h-9 bg-primary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'A Escola', links: footerLinks.escola },
            { title: 'Serviços', links: footerLinks.servicos },
            { title: 'Úteis', links: footerLinks.utilidades },
          ].map(col => (
            <div key={col.title}>
              <h4 className="font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors hover:pl-1 duration-200 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-primary-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} NextDrive Academy. Todos os direitos reservados. Certificada pelo IMT.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacidade" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Privacidade</Link>
            <Link to="/termos" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Termos</Link>
            <Link to="/cookies" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
