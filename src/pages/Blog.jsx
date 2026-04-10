import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ArrowRight, Search } from 'lucide-react'
import { posts } from '../data/blog'
import PageWrapper from '../components/PageWrapper'

const categories = ['Todos', 'Dicas de Condução', 'Legislação', 'Segurança', 'Saúde & Bem-estar']

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [search, setSearch] = useState('')

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === 'Todos' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const featured = posts.find(p => p.featured)
  const rest = filtered.filter(p => !p.featured || activeCategory !== 'Todos' || search)

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&h=500&fit=crop"
            alt="Blog da NextDrive Academy — dicas de condução e legislação"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge bg-white/10 text-white border border-white/20 mb-5">Blog</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              Dicas, legislação e segurança rodoviária
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Artigos escritos pelos nossos instrutores para ajudá-lo a conduzir melhor e com mais segurança.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search + Filters */}
      <div className="bg-white border-b border-slate-100 sticky top-16 md:top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Pesquisar artigos..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="input-field pl-9 py-2 text-sm"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {featured && activeCategory === 'Todos' && !search && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14"
            >
              <Link to={`/blog/${featured.slug}`} className="card group grid md:grid-cols-2 overflow-hidden block">
                <div className="relative aspect-[16/9] md:aspect-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 badge bg-accent-500 text-white">Destaque</span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="badge bg-primary-50 text-primary-700 text-sm">{featured.category}</span>
                    <span className="text-slate-400 text-sm flex items-center gap-1">
                      <Clock size={13} /> {featured.readTime}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-2xl text-slate-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <img src={featured.authorAvatar} alt={`${featured.author}`} className="w-9 h-9 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{featured.author}</p>
                      <p className="text-xs text-slate-400">{featured.authorRole}</p>
                    </div>
                    <span className="ml-auto text-primary-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ler artigo <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">Nenhum artigo encontrado.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeCategory === 'Todos' && !search ? rest : filtered).map((post, i) => (
                <motion.div
                  key={post.id}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link to={`/blog/${post.slug}`} className="card group block overflow-hidden h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.alt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="badge bg-primary-50 text-primary-700 text-xs">{post.category}</span>
                        <span className="text-slate-400 text-xs flex items-center gap-1">
                          <Clock size={11} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-semibold text-slate-900 leading-snug mb-2 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                        <img src={post.authorAvatar} alt={post.author} className="w-7 h-7 rounded-full object-cover" loading="lazy" />
                        <span className="text-xs text-slate-500">{post.author}</span>
                        <span className="ml-auto text-xs text-slate-400">
                          {new Date(post.date).toLocaleDateString('pt-PT', { month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title mb-4">Receba dicas de condução no seu email</h2>
            <p className="text-slate-500 mb-8">Subscreva a nossa newsletter e receba artigos, novidades e ofertas exclusivas.</p>
            <form className="flex gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="O seu email"
                className="input-field flex-1"
              />
              <button type="submit" className="btn-primary flex-shrink-0">
                Subscrever
              </button>
            </form>
            <p className="text-xs text-slate-400 mt-3">Sem spam. Pode cancelar a qualquer momento.</p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
