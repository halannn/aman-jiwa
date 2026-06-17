import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { categories, articles } from "../../data/blogArticles";
import { Link } from "react-router";

export default function BlogEdukasi() {
  const [activeCategory, setActiveCategory] = useState("All Topics");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All Topics") {
      return articles;
    }

    return articles.filter((article) => article.category === activeCategory);
  }, [activeCategory]);

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email) return;

    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar />

      <main className="pt-20">
        <section className="relative overflow-hidden bg-primary-container py-24 text-on-primary md:py-32">
          <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="max-w-2xl">
              <h1 className="font-display-lg text-display-lg mb-6 leading-tight">
                Blog & Edukasi
              </h1>

              <p className="font-body-lg text-body-lg mb-8 text-on-primary-container/90">
                Empowering you with the knowledge to make informed financial
                decisions. Explore our deep dives into life insurance, wealth
                management, and legacy planning.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="font-label-sm text-label-sm flex items-center gap-2 rounded-full bg-secondary px-4 py-2 font-bold uppercase tracking-wider text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    verified
                  </span>
                  Expert Insights
                </div>

                <div className="font-label-sm text-label-sm flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  <span className="material-symbols-outlined text-[18px]">
                    auto_stories
                  </span>
                  Education First
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-20 z-40 border-b border-outline-variant/30 bg-surface/80 backdrop-blur-xl">
          <div className="mx-auto max-w-container-max overflow-x-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex min-w-max items-center gap-8 py-6">
              {categories.map((category) => {
                const isActive = category === activeCategory;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={
                      isActive
                        ? "border-b-2 border-secondary pb-1 font-bold text-secondary"
                        : "text-on-surface-variant transition-colors hover:text-primary"
                    }
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-surface py-20">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="font-headline-lg text-headline-lg mb-2 text-primary">
                  {activeCategory === "All Topics"
                    ? "Editor's Picks"
                    : activeCategory}
                </h2>

                <p className="text-on-surface-variant">
                  {activeCategory === "All Topics"
                    ? "Selected deep-dives for your financial growth."
                    : `Menampilkan ${filteredArticles.length} artikel pada kategori ${activeCategory}.`}
                </p>
              </div>

              <div className="hidden gap-2 sm:flex">
                <button
                  type="button"
                  className="rounded-full border border-outline-variant p-2 transition-colors hover:bg-primary-fixed"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>

                <button
                  type="button"
                  className="rounded-full border border-outline-variant p-2 transition-colors hover:bg-primary-fixed"
                >
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.title} article={article} />
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="rounded-xl border border-outline-variant bg-surface-container-low p-10 text-center text-on-surface-variant">
                Belum ada artikel pada kategori ini.
              </div>
            )}

            {/* <div className="mt-16 text-center">
              <button
                type="button"
                className="rounded-lg border-2 border-primary px-12 py-4 font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                View All Articles
              </button>
            </div> */}
          </div>
        </section>

        <section className="bg-primary-container py-20">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-12 md:p-20">
              <div className="relative z-10 max-w-xl">
                <h2 className="font-headline-lg text-headline-lg mb-6 text-on-primary">
                  Stay Informed, Stay Protected
                </h2>

                <p className="text-body-lg mb-8 text-on-primary-container">
                  Dapatkan update mingguan mengenai tren pasar asuransi, tips
                  investasi, dan panduan perencanaan keuangan langsung di inbox
                  Anda.
                </p>

                <form
                  className="flex flex-col gap-4 sm:flex-row"
                  onSubmit={handleSubscribe}
                >
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="font-body-md flex-grow rounded-lg border-none bg-white px-6 py-4 text-primary transition-all focus:ring-4 focus:ring-secondary/30"
                    placeholder="Alamat Email Anda"
                    required
                    type="email"
                  />

                  <button
                    className="flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-4 font-bold text-primary transition-all hover:bg-secondary-fixed"
                    type="submit"
                  >
                    Subscribe Now
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </form>

                {isSubscribed ? (
                  <p className="text-label-sm mt-4 text-secondary-fixed">
                    Terima kasih. Email Anda sudah masuk daftar newsletter.
                  </p>
                ) : (
                  <p className="text-label-sm mt-4 text-on-primary-container/60">
                    Kami menghargai privasi Anda. Berhenti berlangganan kapan
                    saja.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-20">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="grid h-auto grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2">
              <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-primary p-10 text-on-primary md:col-span-4 md:row-span-2">
                <div className="relative z-10">
                  <span className="material-symbols-outlined mb-6 text-5xl text-secondary">
                    shield
                  </span>

                  <h3 className="font-headline-lg text-headline-lg mb-4">
                    Perlindungan Tak Terputus
                  </h3>

                  <p className="text-body-md max-w-sm text-on-primary-container">
                    Mempelajari cara kerja asuransi adalah investasi pertama
                    Anda dalam perlindungan keluarga.
                  </p>
                </div>

                <button
                  type="button"
                  className="relative z-10 mt-10 flex w-fit items-center gap-2 font-bold text-secondary transition-all hover:gap-4"
                >
                  Explore Education Hub
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </button>

                <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const fallbackArticleImage =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80";

function ArticleCard({ article }) {
  return (
    <Link
      to={`/blog-edukasi/${article.slug}`}
      className="article-card-hover group block cursor-pointer overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-lowest shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          className="article-image h-full w-full object-cover transition-transform duration-500"
          src={article.image || fallbackArticleImage}
          alt={article.title}
        />

        <div className="absolute top-4 left-4">
          <span className="text-label-sm rounded bg-secondary px-3 py-1 font-boldshadow-md text-white">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="font-label-sm mb-4 flex items-center gap-2 text-on-surface-variant">
          <span className="material-symbols-outlined text-[16px]">
            calendar_today
          </span>
          {article.date}
          <span className="mx-2">•</span>
          <span className="material-symbols-outlined text-[16px]">
            schedule
          </span>
          {article.readTime}
        </div>

        <h3 className="font-headline-md text-headline-md mb-4 text-primary transition-colors group-hover:text-secondary">
          {article.title}
        </h3>

        <p className="line-clamp-3 mb-6 text-on-surface-variant">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-fixed font-bold text-primary">
            {article.initials}
          </div>

          <div>
            <p className="font-bold leading-tight text-primary">
              {article.author}
            </p>

            <p className="text-label-sm text-on-surface-variant">
              {article.role}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
