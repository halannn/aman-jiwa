import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { heroImageUrl, logoUrl, posterImageUrl } from "../constants/assets";

const stats = [
  {
    id: "stat1",
    target: 10,
    suffix: ".000+",
    label: "Polis Aktif",
    delay: "0ms",
  },
  {
    id: "stat2",
    target: 98,
    suffix: "%",
    label: "Kepuasan Nasabah",
    delay: "100ms",
  },
  {
    id: "stat3",
    target: 95,
    suffix: "%",
    label: "Klaim Tepat Waktu",
    delay: "200ms",
  },
  {
    id: "stat4",
    target: 15,
    suffix: "+",
    label: "Tahun Pengalaman",
    delay: "300ms",
  },
];

const reasons = [
  {
    icon: "bolt",
    title: "Proses Cepat",
    description:
      "Penerbitan polis dan proses klaim dilakukan secara efisien dengan teknologi terkini tanpa birokrasi rumit.",
  },
  {
    icon: "payments",
    title: "Premi Terjangkau",
    description:
      "Skema pembayaran yang fleksibel mulai dari bulanan hingga tahunan, disesuaikan dengan kemampuan finansial Anda.",
  },
  {
    icon: "shield_person",
    title: "Perlindungan Terpercaya",
    description:
      "Didukung oleh reasuransi terkemuka dan diawasi ketat oleh OJK demi keamanan dana nasabah kami.",
  },
  {
    icon: "devices",
    title: "Layanan Digital 24/7",
    description:
      "Akses status polis, bantuan klaim, dan konsultasi kapanpun melalui platform digital kami yang user-friendly.",
  },
  {
    icon: "visibility",
    title: "Transparan dan Aman",
    description:
      "Tidak ada biaya tersembunyi. Semua syarat dan ketentuan dijelaskan secara lugas dan mudah dimengerti.",
  },
  {
    icon: "star",
    title: "Pelayanan Prima",
    description:
      "Tim Customer Care profesional yang siap membimbing Anda dalam setiap langkah perjalanan asuransi Anda.",
  },
];

const benefits = [
  {
    title: "Perlindungan hingga Usia 99 Tahun",
    description:
      "Komitmen perlindungan jangka panjang yang memastikan Anda terlindungi hingga masa tua dengan tenang.",
  },
  {
    title: "Santunan Meninggal Dunia 100%",
    description:
      "Warisan finansial pasti bagi keluarga tercinta untuk menjamin keberlangsungan hidup mereka.",
  },
  {
    title: "Manfaat Kecelakaan (200%)",
    description:
      "Tambahan santunan jika resiko meninggal dunia disebabkan oleh kecelakaan.",
  },
  {
    title: "Pembebasan Premi Cacat Tetap",
    description:
      "Jika terjadi cacat tetap total, polis tetap aktif tanpa Anda perlu membayar premi lagi.",
  },
  {
    title: "Nilai Tunai Terjamin",
    description:
      "Akumulasi nilai tunai yang dapat digunakan sebagai cadangan dana darurat atau modal masa tua.",
  },
  {
    title: "Asuransi Tambahan (Riders)",
    description:
      "Pilihan tambahan perlindungan kesehatan, penyakit kritis, dan lainnya sesuai kebutuhan Anda.",
  },
];

const faqs = [
  "Apa itu AJ Lifelong Assurance?",
  "Kapan polis aktif?",
  "Berapa masa leluasa pembayaran premi?",
  "Apakah tersedia Free Look Period?",
  "Kapan nilai tunai mulai terbentuk?",
  "Bagaimana cara mengajukan klaim?",
  "Apa saja pengecualian polis?",
];

export default function Home() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((element) => revealObserver.observe(element));

    let triggered = false;

    const animateValue = (element, start, end, duration, suffix) => {
      if (!element) return;

      let startTimestamp = null;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;

        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);

        element.innerHTML = `${value}${suffix}`;

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    const statsSection = document.querySelector("#stats-section");

    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !triggered) {
        stats.forEach((stat) => {
          animateValue(
            document.getElementById(stat.id),
            0,
            stat.target,
            2000,
            stat.suffix,
          );
        });

        triggered = true;
      }
    });

    if (statsSection) {
      statsObserver.observe(statsSection);
    }

    return () => {
      revealElements.forEach((element) => revealObserver.unobserve(element));

      if (statsSection) {
        statsObserver.unobserve(statsSection);
      }
    };
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      <Navbar activeMenu="Beranda" />

      <header
        id="home"
        className="relative flex min-h-[90vh] items-center overflow-hidden pt-32 pb-20 md:pt-48 md:pb-40"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroImageUrl}
            alt="Keluarga Indonesia tersenyum di ruang keluarga modern"
            className="h-full w-full object-cover opacity-15 grayscale"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-container-max grid-cols-1 items-center gap-12 px-margin-mobile md:grid-cols-2 md:px-margin-desktop">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary-container px-3 py-1 text-on-secondary-container">
              <span className="material-symbols-outlined text-[18px]">
                verified_user
              </span>

              <span className="font-label-sm text-label-sm uppercase tracking-widest">
                AJ Lifelong Assurance
              </span>
            </div>

            <h1 className="font-display-lg mb-6 text-[42px] leading-[1.1] text-primary md:text-display-lg">
              Perlindungan Seumur Hidup untuk Masa Depan Keluarga Anda
            </h1>

            <p className="font-body-lg text-body-lg mb-10 max-w-lg text-on-surface-variant">
              AJ Lifelong Assurance memberikan perlindungan jiwa hingga usia 99
              tahun dengan manfaat meninggal dunia, kecelakaan, cacat tetap
              total, dan nilai tunai yang terus berkembang.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-xl bg-primary px-8 py-4 font-bold text-on-primary shadow-lg transition-all hover:translate-y-[-2px]">
                Ajukan Sekarang
              </button>

              <button className="rounded-xl bg-secondary-fixed px-8 py-4 font-bold text-on-secondary-fixed shadow-md transition-all hover:bg-secondary-fixed-dim">
                Hitung Premi
              </button>

              <button className="rounded-xl border-2 border-primary px-8 py-4 font-bold text-primary transition-all hover:bg-primary/5">
                Konsultasi Gratis
              </button>
            </div>
          </div>

          <div
            className="reveal hidden md:block"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-secondary-fixed/20 blur-3xl" />

              <img
                src={logoUrl}
                alt="Logo Icon"
                className="animate-float relative z-10 mx-auto w-full max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      <section id="stats-section" className="bg-primary py-16 text-on-primary">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 md:gap-gutter">
            {stats.map((stat) => (
              <div
                key={stat.id}
                style={{ transitionDelay: stat.delay }}
              >
                <div
                  id={stat.id}
                  className="mb-1 text-[32px] font-extrabold md:text-[48px]"
                >
                  0{stat.suffix}
                </div>

                <div className="text-body-md text-on-primary-container">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="reveal order-2 lg:order-1 lg:col-span-7">
              <div className="overflow-hidden rounded-3xl border-8 border-white shadow-2xl">
                <img
                  src={posterImageUrl}
                  alt="Product Poster AJ Lifelong Assurance"
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div
              className="reveal order-1 lg:order-2 lg:col-span-5"
              style={{ transitionDelay: "200ms" }}
            >
              <h2 className="font-headline-lg text-headline-lg mb-6 text-primary">
                Inovasi Perlindungan Modern untuk Keluarga
              </h2>

              <p className="font-body-lg text-body-lg mb-8 text-on-surface-variant">
                Kami mengerti bahwa masa depan adalah aset paling berharga. AJ
                Lifelong Assurance dirancang untuk memberikan ketenangan pikiran
                mutlak melalui sistem perlindungan yang komprehensif dan
                fleksibel.
              </p>

              <ul className="space-y-4">
                {[
                  "Santunan hingga 200% Uang Pertanggungan",
                  "Nilai Tunai Berkembang Sepanjang Polis Aktif",
                  "Bebas Premi jika Terjadi Resiko Cacat Tetap",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border-l-4 border-secondary bg-white p-4 shadow-sm"
                  >
                    <span className="material-symbols-outlined font-bold text-primary">
                      check_circle
                    </span>

                    <span className="font-bold text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="reveal mb-16 text-center">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">
              Mengapa Memilih Kami?
            </h2>

            <div className="mx-auto mb-6 h-1 w-24 bg-secondary" />

            <p className="mx-auto max-w-2xl text-on-surface-variant">
              Standar emas dalam pelayanan asuransi yang mengutamakan
              transparansi dan kecepatan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="reveal card-hover rounded-3xl border border-outline-variant/30 bg-white p-8 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-container text-secondary-fixed">
                  <span className="material-symbols-outlined text-3xl">
                    {reason.icon}
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md mb-4 text-primary">
                  {reason.title}
                </h3>

                <p className="text-on-surface-variant">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="claims"
        className="relative overflow-hidden bg-primary py-24 text-on-primary"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <h2 className="reveal font-headline-lg text-headline-lg mb-12 text-center">
            Keunggulan Asuransi Seumur Hidup Aman Jiwa
          </h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {[benefits.slice(0, 3), benefits.slice(3)].map(
              (group, groupIndex) => (
                <div key={groupIndex} className="space-y-8">
                  {group.map((benefit, index) => {
                    const number = groupIndex * 3 + index + 1;

                    return (
                      <div
                        key={benefit.title}
                        className="reveal flex gap-6"
                        style={{ transitionDelay: `${number * 100}ms` }}
                      >
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-primary">
                          {number}
                        </div>

                        <div>
                          <h4 className="font-headline-md text-headline-md mb-2">
                            {benefit.title}
                          </h4>

                          <p className="text-on-primary-container">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ),
            )}
          </div>

          <div className="reveal mt-20 rounded-[2rem] border-2 border-secondary/20 bg-surface-container-lowest p-12 text-center text-primary shadow-2xl">
            <blockquote className="font-headline-md mb-6 text-[24px] leading-relaxed italic">
              "Karena hidup penuh ketidakpastian, berikan kepastian perlindungan
              untuk keluarga Anda."
            </blockquote>

            <p className="inline-block rounded-lg bg-primary px-4 py-2 font-bold text-secondary-fixed-dim">
              AJ Lifelong Assurance
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="reveal mb-16 text-center">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>

            <div className="mx-auto h-1 w-24 bg-secondary" />
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq}
                className="reveal overflow-hidden rounded-2xl border border-outline-variant/30 bg-white shadow-sm"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex cursor-pointer items-center justify-between p-6 transition-colors hover:bg-primary/5">
                  <h3 className="font-bold text-primary">{faq}</h3>

                  <span className="material-symbols-outlined text-secondary">
                    expand_more
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
