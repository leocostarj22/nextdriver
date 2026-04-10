import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ArrowLeft, ArrowRight, Star } from 'lucide-react'
import { posts } from '../data/blog'
import PageWrapper from '../components/PageWrapper'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  const related = posts.filter(p => p.slug !== slug && p.category === post?.category).slice(0, 3)

  if (!post) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-display font-bold text-4xl text-slate-900 mb-4">Artigo não encontrado</h1>
            <Link to="/blog" className="btn-primary">Ver todos os artigos</Link>
          </div>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-28 pb-0 overflow-hidden">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src={post.image}
            alt={post.alt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="badge bg-primary-600 text-white text-sm">{post.category}</span>
                <span className="text-white/70 text-sm flex items-center gap-1">
                  <Clock size={13} /> {post.readTime} de leitura
                </span>
              </div>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight max-w-3xl">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link to="/" className="hover:text-primary-600 transition-colors">Início</Link>
            <span>›</span>
            <Link to="/blog" className="hover:text-primary-600 transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-slate-600">{post.title.substring(0, 40)}...</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main */}
            <div>
              {/* Author */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                <img
                  src={post.authorAvatar}
                  alt={`${post.author} — ${post.authorRole}`}
                  className="w-14 h-14 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-slate-900">{post.author}</p>
                  <p className="text-sm text-slate-500">{post.authorRole}</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Publicado em {new Date(post.date).toLocaleDateString('pt-PT', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>

              {/* Article Content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="prose prose-slate prose-lg max-w-none
                  prose-headings:font-display prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:text-slate-900 prose-h2:mt-10 prose-h2:mb-4
                  prose-p:text-slate-600 prose-p:leading-relaxed
                  prose-a:text-primary-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-slate-900
                  prose-ul:text-slate-600"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-100">
                {['condução', 'Lisboa', 'carta de condução', post.category.toLowerCase()].map(tag => (
                  <span key={tag} className="badge bg-slate-100 text-slate-600 text-sm">#{tag}</span>
                ))}
              </div>

              {/* Share */}
              <div className="mt-8">
                <p className="text-sm font-semibold text-slate-700 mb-3">Partilhar este artigo:</p>
                <div className="flex gap-3">
                  {['Facebook', 'Twitter', 'LinkedIn', 'WhatsApp'].map(net => (
                    <button key={net} className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm text-slate-600 font-medium transition-colors">
                      {net}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA Card */}
              <div className="bg-primary-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Pronto para conduzir?</h3>
                <p className="text-primary-100 text-sm mb-5 leading-relaxed">
                  Marque já a sua primeira aula gratuita na NextDrive Academy.
                </p>
                <Link to="/marcacao" className="btn-accent w-full justify-center text-sm">
                  Marcar Aula <ArrowRight size={14} />
                </Link>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Artigos relacionados</h3>
                  <div className="space-y-4">
                    {related.map(p => (
                      <Link key={p.id} to={`/blog/${p.slug}`} className="flex gap-3 group">
                        <img
                          src={p.image}
                          alt={p.alt}
                          className="w-20 h-16 rounded-xl object-cover flex-shrink-0 group-hover:opacity-90 transition-opacity"
                          loading="lazy"
                        />
                        <div>
                          <p className="text-sm font-medium text-slate-900 leading-snug group-hover:text-primary-600 transition-colors">
                            {p.title}
                          </p>
                          <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                            <Clock size={11} /> {p.readTime}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Rating */}
              <div className="bg-slate-50 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-accent-500 fill-accent-500" />)}
                  <span className="font-bold text-slate-900 text-sm">4.9</span>
                </div>
                <p className="text-xs text-slate-500">+500 avaliações no Google</p>
              </div>
            </aside>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-100">
            <Link to="/blog" className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 transition-colors font-medium">
              <ArrowLeft size={16} /> Todos os artigos
            </Link>
            <Link to="/marcacao" className="btn-primary text-sm">
              Marcar Aula <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
