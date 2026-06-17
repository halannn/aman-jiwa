import { Link, Navigate, useParams } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  getArticleBySlug,
  getRelatedArticles,
} from "../../data/blogArticles";

const fallbackArticleImage =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80";

export default function BlogArticleDetail() {
  const { slug } = useParams();

  const article = getArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/blog-edukasi" replace />;
  }

  const relatedArticles = getRelatedArticles(article);

  return (
    <div className="bg-background text-on-surface font-body-md">
      <Navbar />

      <main className="pt-20">
        <article>
          <section className="bg-primary-container py-20 text-on-primary md:py-28">
            <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
              <Link
                to="/blog-edukasi"
                className="mb-8 inline-flex items-center gap-2 text-secondary-fixed transition-colors hover:text-secondary"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Kembali ke Blog & Edukasi
              </Link>

              <div className="max-w-4xl">
                <span className="font-label-sm text-label-sm mb-5 inline-block rounded-full bg-secondary px-4 py-2 font-bold uppercase tracking-wider text-primary">
                  {article.category}
                </span>

                <h1 className="font-display-lg text-display-lg mb-6 leading-tight">
                  {article.title}
                </h1>

                <p className="font-body-lg text-body-lg mb-8 max-w-3xl text-on-primary-container">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-on-primary-container">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-fixed font-bold text-primary">
                      {article.initials}
                    </div>

                    <div>
                      <p className="font-bold text-on-primary">
                        {article.author}
                      </p>
                      <p>{article.role}</p>
                    </div>
                  </div>

                  <span className="hidden h-8 w-px bg-white/20 sm:block" />

                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">
                      calendar_today
                    </span>
                    {article.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">
                      schedule
                    </span>
                    {article.readTime}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-surface py-16">
            <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
              <div className="overflow-hidden rounded-3xl border border-outline-variant/30 bg-white shadow-xl">
                <img
                  src={article.image || fallbackArticleImage}
                  alt={article.title}
                  className="h-[320px] w-full object-cover md:h-[520px]"
                />
              </div>
            </div>
          </section>

          <section className="bg-surface pb-24">
            <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 px-margin-mobile md:px-margin-desktop lg:grid-cols-12">
              <aside className="lg:col-span-3">
                <div className="sticky top-28 rounded-2xl border border-outline-variant bg-surface-container-low p-6">
                  <p className="font-label-sm mb-4 uppercase tracking-widest text-secondary">
                    Artikel
                  </p>

                  <div className="space-y-4 text-sm text-on-surface-variant">
                    <div>
                      <p className="font-bold text-primary">Kategori</p>
                      <p>{article.category}</p>
                    </div>

                    <div>
                      <p className="font-bold text-primary">Penulis</p>
                      <p>{article.author}</p>
                    </div>

                    <div>
                      <p className="font-bold text-primary">Tanggal</p>
                      <p>{article.date}</p>
                    </div>

                    <div>
                      <p className="font-bold text-primary">Durasi Baca</p>
                      <p>{article.readTime}</p>
                    </div>
                  </div>
                </div>
              </aside>

              <div className="lg:col-span-7">
                <div className="prose max-w-none">
                  <p className="font-body-lg text-body-lg mb-10 text-on-surface-variant">
                    {article.excerpt}
                  </p>

                  <div className="space-y-10">
                    {article.content.map((section) => (
                      <section key={section.heading}>
                        <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">
                          {section.heading}
                        </h2>

                        <p className="text-body-md leading-relaxed text-on-surface-variant">
                          {section.body}
                        </p>
                      </section>
                    ))}
                  </div>

                  <div className="mt-12 rounded-2xl bg-primary p-8 text-on-primary">
                    <h3 className="font-headline-md text-headline-md mb-3">
                      Butuh Konsultasi Lebih Lanjut?
                    </h3>

                    <p className="mb-6 text-on-primary-container">
                      Tim Aman Jiwa siap membantu Anda memahami kebutuhan
                      perlindungan keluarga secara lebih personal.
                    </p>

                    <Link
                      to="/products/daftar-asuransi"
                      className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-bold text-primary transition-all hover:bg-secondary-fixed"
                    >
                      Mulai Konsultasi
                      <span className="material-symbols-outlined">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <aside className="lg:col-span-2">
                <div className="sticky top-28 rounded-2xl border border-outline-variant bg-white p-6">
                  <p className="font-label-sm mb-4 uppercase tracking-widest text-secondary">
                    Bagikan
                  </p>

                  <div className="flex gap-3 lg:flex-col">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-primary transition-colors hover:bg-primary hover:text-white">
                      <span className="material-symbols-outlined text-[20px]">
                        link
                      </span>
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-primary transition-colors hover:bg-primary hover:text-white">
                      <span className="material-symbols-outlined text-[20px]">
                        mail
                      </span>
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-primary transition-colors hover:bg-primary hover:text-white">
                      <span className="material-symbols-outlined text-[20px]">
                        share
                      </span>
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </article>

        {relatedArticles.length > 0 && (
          <section className="bg-surface-container-low py-20">
            <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
              <div className="mb-10 flex items-end justify-between">
                <div>
                  <h2 className="font-headline-lg text-headline-lg mb-2 text-primary">
                    Artikel Terkait
                  </h2>

                  <p className="text-on-surface-variant">
                    Bacaan lain dari kategori {article.category}.
                  </p>
                </div>

                <Link
                  to="/blog-edukasi"
                  className="hidden font-bold text-secondary hover:underline md:block"
                >
                  Lihat Semua
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.slug}
                    to={`/blog-edukasi/${relatedArticle.slug}`}
                    className="group overflow-hidden rounded-xl border border-outline-variant bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <img
                      src={relatedArticle.image || fallbackArticleImage}
                      alt={relatedArticle.title}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="p-6">
                      <span className="font-label-sm mb-3 inline-block text-secondary">
                        {relatedArticle.category}
                      </span>

                      <h3 className="font-headline-md text-headline-md mb-3 text-primary group-hover:text-secondary">
                        {relatedArticle.title}
                      </h3>

                      <p className="line-clamp-3 text-sm text-on-surface-variant">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}