import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const presidentDirector = {
  name: "Ainun Aini Griselda",
  role: "Presiden Direktur",
  description:
    "Lebih dari 20 tahun pengalaman dalam menetapkan arah strategis perusahaan asuransi terkemuka.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCaUIIada_xN4zFhTcUecvJghAGxVjtgebxV633kWd8EEeaq4A2kXc2o2V6cjY_JtbbUembXGfFAYHCi9nz4fMCFqWMYfivpBD3K83LQMiwpUhxLcPrBxQTS6H7u9FVi_9UcHHxbBUn9taU5ti2MGTZfOVxT-rFmUhCpcgLX3n7O_N3f05LfAa_0PdI6AoRltHGcMg1lJ1Bo8Cud_6ZqNisl6Q82VpBfxdWT6g_x7RT8ZTIORW2DkEQZHnUOQAb9qOaH6IIXDjYiSQ",
};

const directors = [
  {
    name: "Niken Shafira",
    role: "Direktur Operasional",
    description:
      "Ahli dalam manajemen operasional, sistem klaim efisien, dan keunggulan layanan pelanggan.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGxPQfwJS4jgmT0eik7ahNJqdVi_FOkiqYar4ODfHUYqCJnzo-lr4Hwr51WGK_7w06UWeoa2tZoBEBgXz7n8NjV-DJ4Imim-Uh2LQAyiGpmx9-Y8y_ucOKiEjObrpLpVOg7XGmfus10vg-29lLiaj--9OGihkOiHEcul9_xymlnEEP-dzvEkV9jyztkGvp68ML7WfHabpneDGI0iiCE4w1dHX9s6OB5YvkeExhivk83E5fc3ZKzlsfXRzHZ7rdgZMXOQPpgCvRfKA",
  },
  {
    name: "Andi Febriana Manda",
    role: "Direktur Keuangan",
    description:
      "Mengelola portofolio investasi dan mitigasi risiko keuangan dengan standar kepatuhan tinggi.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeXustgBrwfZA8ZWV-H5oiPGoXtxK9syKV2eMQecu0pl6_xyOt3KMhi69Gyvw1rZbUnoBd7GaKVm_uFKw1JB1C3mzabLR4ZUwA1jN8FyUlHlJC-5caODDV2b_74906E0NYu2hc1AnnMIV6ZeAED-t2ba8oKx5zcNEEaiRcAfsPyxonfi4mCH0nWu1klfPl7jY77WnLMsmFUpRCf7Ll0gfeFCEN2JLRkKmQcsUOyldZEnRYbXTKU4H5FnRO0gSNTfHrM2l5oweEpVY",
  },
  {
    name: "Allia Maharani",
    role: "Dir. Pemasaran & Bisnis",
    description:
      "Mendorong pertumbuhan melalui pengembangan produk asuransi inovatif dan strategi pemasaran digital.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIdLp44wb4g6KLZKN43Ox6ITqDrruS7MX-73P7z75WQSJB71P6w9xDJRzyC0MJSF6fWfaasHX0ds3oLdRGNksTZ_EVfSiva6yFSsEPwPcafv_YYAtV3gxXYK6LoSv_FYAm4amiiwpZVAiqnj56_S1qsFP2sRecQRp_gM9rIK1Yaja5MO5xEgFUpWYy4ZATm7z5i2VK_pEvPKZOROkhis_mR_xGU5j61cXFJFj6xWAMcXluLn1jjnOZSaNYyvWqKJfs3b1Qqz5vN10",
  },
];

const stats = [
  {
    id: "director-stat-1",
    target: 10000,
    suffix: "+",
    label: "Polis Aktif",
  },
  {
    id: "director-stat-2",
    target: 98,
    suffix: "%",
    label: "Kepuasan Nasabah",
  },
  {
    id: "director-stat-3",
    target: 95,
    suffix: "%",
    label: "Kesuksesan Klaim",
  },
  {
    id: "director-stat-4",
    target: 15,
    suffix: "+",
    label: "Tahun Pengalaman",
  },
];

const values = [
  {
    icon: "verified_user",
    title: "Integritas",
    description:
      "Kejujuran dan transparansi dalam setiap interaksi dengan nasabah kami.",
  },
  {
    icon: "handshake",
    title: "Profesionalisme",
    description:
      "Memberikan solusi finansial terbaik melalui keahlian yang mendalam.",
  },
  {
    icon: "psychology",
    title: "Inovasi",
    description:
      "Terus beradaptasi dengan teknologi untuk mempermudah perlindungan Anda.",
  },
  {
    icon: "groups",
    title: "Fokus Nasabah",
    description:
      "Menempatkan kebutuhan dan masa depan Anda sebagai prioritas utama.",
  },
];

export default function Direksi() {
  useEffect(() => {
    let triggered = false;

    const animateCounter = (element, target, suffix = "") => {
      if (!element) return;

      let current = 0;
      const increment = target / 100;

      const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
          element.innerText = `${target.toLocaleString("id-ID")}${suffix}`;
          clearInterval(timer);
        } else {
          element.innerText = `${Math.floor(current).toLocaleString("id-ID")}${suffix}`;
        }
      }, 20);
    };

    const statsSection = document.getElementById("director-stats-section");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered) {
          stats.forEach((stat) => {
            animateCounter(
              document.getElementById(stat.id),
              stat.target,
              stat.suffix,
            );
          });

          triggered = true;
          observer.unobserve(entries[0].target);
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="mx-auto mb-24 max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
          <span className="font-label-sm mb-4 block uppercase tracking-widest text-secondary">
            Kepemimpinan Kami
          </span>

          <h1 className="font-display-lg text-display-lg mx-auto mb-6 max-w-5xl text-primary">
            Dewan Direksi & Manajemen PT Aman Jiwa Insurance
          </h1>

          <p className="font-body-lg text-body-lg mx-auto max-w-2xl text-on-surface-variant">
            Berdedikasi untuk memberikan perlindungan masa depan yang kokoh
            melalui tata kelola perusahaan yang transparan dan inovasi yang
            berkelanjutan.
          </p>
        </section>

        <section className="mx-auto mb-32 max-w-container-max overflow-hidden px-margin-mobile md:px-margin-desktop">
          <div className="relative flex flex-col items-center">
            <div className="z-10 mb-12 w-full max-w-sm">
              <DirectorCard person={presidentDirector} variant="president" />
            </div>

            <div className="absolute top-[280px] hidden h-[2px] w-3/4 bg-outline-variant md:block" />

            <div className="mb-12 hidden w-3/4 justify-between md:flex">
              <div className="h-12 w-[2px] bg-outline-variant" />
              <div className="h-12 w-[2px] bg-outline-variant" />
              <div className="h-12 w-[2px] bg-outline-variant" />
            </div>

            <div className="grid w-full grid-cols-1 gap-gutter md:grid-cols-3">
              {directors.map((director) => (
                <DirectorCard key={director.name} person={director} />
              ))}
            </div>
          </div>
        </section>

        <section id="director-stats-section" className="mb-32 bg-primary py-16">
          <div className="mx-auto grid max-w-container-max grid-cols-2 gap-gutter px-margin-mobile text-center md:grid-cols-4 md:px-margin-desktop">
            {stats.map((stat) => (
              <div key={stat.id}>
                <div
                  id={stat.id}
                  className="font-display-lg text-display-lg mb-2 text-secondary-fixed"
                >
                  0{stat.suffix}
                </div>

                <div className="font-label-sm uppercase tracking-wider text-on-primary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-24 max-w-container-max px-margin-mobile md:px-margin-desktop">
          <h2 className="font-display-lg text-display-lg mb-16 text-center text-primary">
            Nilai Inti Kami
          </h2>

          <div className="grid grid-cols-1 gap-gutter md:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border-t-2 border-secondary bg-surface-container-low p-8 transition-colors hover:bg-surface-container-high"
              >
                <span className="material-symbols-outlined mb-6 text-4xl text-secondary">
                  {value.icon}
                </span>

                <h4 className="font-headline-md text-headline-md mb-4 text-primary">
                  {value.title}
                </h4>

                <p className="text-body-md text-on-surface-variant">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function DirectorCard({ person, variant = "default" }) {
  const isPresident = variant === "president";

  return (
    <article
      className={`glass-card premium-shadow hover-lift group rounded-xl p-6 text-center border-t-4 ${
        isPresident ? "border-secondary-fixed" : "border-primary"
      }`}
    >
      <div
        className={`relative mx-auto mb-4 overflow-hidden rounded-full border-2 ${
          isPresident
            ? "h-32 w-32 border-secondary-fixed"
            : "h-28 w-28 border-outline-variant"
        }`}
      >
        <img
          src={person.image}
          alt={person.name}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="font-headline-md text-headline-md text-primary">
        {person.name}
      </h3>

      <p
        className={`mb-3 text-sm font-bold ${
          isPresident ? "text-secondary" : "text-on-surface-variant"
        }`}
      >
        {person.role}
      </p>

      <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">
        {person.description}
      </p>

      <a
        href="#"
        className="text-primary transition-colors hover:text-secondary"
        aria-label={`Lihat profil ${person.name}`}
      >
        <span className="material-symbols-outlined">link</span>
      </a>
    </article>
  );
}
