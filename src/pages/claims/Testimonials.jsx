import { useEffect, useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const featuredTestimonials = [
  {
    name: "Andini Saraswati",
    since: "Nasabah sejak 2018",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkQHQmdcuRWyCOzsU7jEXzpXWn-lFzPQdR4dih18oDXDVSHlgfNhaiJJlstgbx5M8mn-u1yi2rHrxBy1X53wY2wJy1uTLpIpVpnqHPKkZR2xbMXeM4TC0NlefgtDPbBwy72vtgbdz1sG0ijW6mwcR-PEP0slXHltu1oVMu_WeWNoLbvvM_7ob4EZK0eOI7Xscx8r7Qt8unQy9515Bd-64o33ObuAAMe7HK2Oioljr_GoJv62sg3kulExgK5C_W-ZZjDyoFVuhPYjs",
    quote:
      "Awalnya saya ragu memilih asuransi pendidikan untuk anak. Namun, transparansi dan profesionalisme PT Aman Jiwa Insurance lewat AJ Lifelong Assurance benar-benar memberikan ketenangan. Proses klaim kesehatan saya tahun lalu pun ditangani sangat cepat.",
  },
  {
    name: "Bambang Wijaya",
    since: "Nasabah sejak 2015",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDc54DaZ78rSdXZOuwLiG7rIXbgBtI6RWtZYjAMBfc624BDbUobY1gN7p3bgb1EqbpZFlcix9xux4b88lG5VSCLwJtfhNtjbt-FaycfFoQX7MvDpXZlUJC4dXbcuekEMzjeirB2uIduOhp1i275lKYtzzDYJ8Dqc4DKnWaa1FK2BAfJvBlK6XQ4LFgS_YJF8ddmImVqaRjxx_TK0q1Erw0QozVkSyafQ8ziIf3CAs5Dnpb8EGxHw4E4v5Zt71FJ1aaGNOwQrmwem9E",
    quote:
      "Proteksi finansial bagi saya adalah warisan terbaik untuk keluarga. AJ Lifelong Assurance memberikan rasa aman yang tidak saya temukan di tempat lain. Layanan konsultasinya sangat personal dan memahami profil risiko saya dengan mendalam.",
  },
];

const testimonials = [
  {
    name: "Rizky Ardiansyah",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_RIDPhhMQ9cuJvHyv7N76VENucU7KZYtG1a4o2TjYJdaX31Je2qWiAhYyCRIlFL09NDb2RsU4glxHx3LV7lpBlU_QWd5-F7rVvUNvh-7KSPSXjcjf6EDEWF74171w7d7sABKMSCdpwbaAK7CwHmmM6WaKL104-nMJkYXfLvRFbYOeJOGWsOTI0l0znENXgGo9k1BHKcBmPnM0s10k3Rq1rmk-CCsWTWaJh5cCxDX3QZTHvKYeLdfVz2LKbWC7Pwbexyf5vV1MDcY",
    quote:
      "Proses pendaftaran AJ Lifelong Assurance sangat mudah lewat aplikasinya. Tidak berbelit-belit dan polis langsung aktif dalam hitungan jam.",
  },
  {
    name: "Maya Kurnia",
    rating: 4.5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUPRrti_fZkwxCjpIkb5WHGPtolNxCzegmU5npOETqmsxluZH4fW2BlT1PRpAxQ_shQLTXTT7k7fXCR_sKEDztvo52S9eX0htuXGrfUfhOCP3tHaOAgfcLcEbDB8bcst08YvdH9XXhUmzhBvQHm3ATEFzTHYvTLq-gzd_MvAaEQk6LrLknojdjK1Y1GKkcTLp9K6Hr_rcSisitjDJWLr0vAlah9GWy-t_f1kvflaLUDak9S_7Owza6Jq6O24J8OQFkWoWm4cJ2568",
    quote:
      "Customer service Aman Jiwa sangat responsif saat saya bertanya detail produk. Penjelasannya jujur dan tidak memaksa.",
  },
  {
    name: "Donny Kusuma",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1klocq5ZfzVNppNeuUHx6vfTfjEcgfnxekh30AgDIibQhttGJmeUoy-DL3EnoxUV-2ZEjhIsWn_8gR1z0E5dpxIxFcZ7b4gEsi3sCaTjwvUnjYseqOJKxumChbNdNNoFxr-5gWNNuHl0Dj9D1wAMv9_9w-ZsYN1MAMElgDugWuHF52NBrbOzSywTZZxYsohYM9FJ_AUH5-52C0K7r3eLeF6u_57AD6a0PK4r2sB6yUsT3gzE914hwmFhHFcz7ThSp74qAZfzBJDE",
    quote:
      "Sudah 5 tahun bersama Aman Jiwa. Tidak pernah ada masalah. Premi AJ Lifelong Assurance sangat kompetitif dibanding provider lain.",
  },
  {
    name: "Nadia Prameswari",
    rating: 5,
    initials: "NP",
    quote:
      "Saya merasa lebih tenang setelah memiliki perlindungan jiwa. Agen menjelaskan manfaat dan risiko dengan sangat jelas sejak awal.",
  },
  {
    name: "Fajar Nugroho",
    rating: 4.5,
    initials: "FN",
    quote:
      "Proses konsultasinya nyaman dan tidak terasa seperti dipaksa membeli produk. Semua dijelaskan berdasarkan kebutuhan keluarga saya.",
  },
  {
    name: "Siti Rahmawati",
    rating: 5,
    initials: "SR",
    quote:
      "Saat mengurus perubahan data polis, tim Aman Jiwa membantu dengan cepat. Respons WhatsApp dan emailnya juga rapi.",
  },
  {
    name: "Arman Setiawan",
    rating: 5,
    initials: "AS",
    quote:
      "Saya memilih AJ Lifelong Assurance karena perlindungannya jangka panjang. Cocok untuk rencana warisan keluarga.",
  },
  {
    name: "Laras Ayuningtyas",
    rating: 4.5,
    initials: "LA",
    quote:
      "Penjelasan manfaat nilai tunai mudah dipahami. Saya jadi lebih yakin untuk mulai menyiapkan proteksi sejak sekarang.",
  },
  {
    name: "Hendra Wijaya",
    rating: 5,
    initials: "HW",
    quote:
      "Yang saya suka adalah transparansi biaya dan manfaat. Tidak ada istilah yang dibuat rumit, semuanya dijelaskan dengan bahasa sederhana.",
  },
];

const stats = [
  {
    key: "policies",
    target: 10000,
    label: "Polis Aktif",
    formatter: (value) => `${value.toLocaleString("id-ID")}+`,
  },
  {
    key: "satisfaction",
    target: 98,
    label: "Kepuasan Nasabah",
    formatter: (value) => `${value}%`,
  },
  {
    key: "claims",
    target: 95,
    label: "Klaim Tepat Waktu",
    formatter: (value) => `${value}%`,
  },
  {
    key: "rating",
    target: null,
    label: "Rating Pelayanan",
    formatter: () => "4.9/5",
  },
  {
    key: "recommendation",
    target: 90,
    label: "Nasabah Merekomendasikan",
    formatter: (value) => `${value}%`,
  },
];

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [counterValues, setCounterValues] = useState({
    policies: 0,
    satisfaction: 0,
    claims: 0,
    recommendation: 0,
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % featuredTestimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const statsSection = document.getElementById("testimonial-stats");

    if (!statsSection) return;

    let hasStarted = false;

    const startCounter = () => {
      if (hasStarted) return;
      hasStarted = true;

      stats
        .filter((item) => item.target !== null)
        .forEach((item) => {
          let current = 0;
          const increment = Math.max(item.target / 80, 1);

          const timer = window.setInterval(() => {
            current += increment;

            if (current >= item.target) {
              setCounterValues((previous) => ({
                ...previous,
                [item.key]: item.target,
              }));
              window.clearInterval(timer);
              return;
            }

            setCounterValues((previous) => ({
              ...previous,
              [item.key]: Math.floor(current),
            }));
          }, 16);
        });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounter();
          observer.unobserve(entries[0].target);
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  const filteredTestimonials = useMemo(() => {
    return testimonials.filter((testimonial) => {
      const matchesSearch =
        testimonial.name.toLowerCase().includes(search.toLowerCase()) ||
        testimonial.quote.toLowerCase().includes(search.toLowerCase());

      const matchesRating =
        ratingFilter === "all" ||
        (ratingFilter === "5" && testimonial.rating === 5) ||
        (ratingFilter === "4" &&
          testimonial.rating >= 4 &&
          testimonial.rating < 5);

      return matchesSearch && matchesRating;
    });
  }, [search, ratingFilter]);

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="max-w-3xl">
              <h1 className="font-display-lg text-display-lg mb-6 text-primary">
                Kepercayaan Nasabah Adalah{" "}
                <span className="text-secondary">Prioritas Kami</span>
              </h1>

              <p className="font-body-lg text-body-lg mb-10 leading-relaxed text-on-surface-variant">
                Ribuan nasabah telah mempercayakan perlindungan finansial
                keluarga mereka kepada PT Aman Jiwa Insurance melalui produk AJ
                Lifelong Assurance.
              </p>

              <div className="flex w-fit flex-col items-start gap-6 rounded-xl border border-outline-variant/30 bg-white/50 p-6 backdrop-blur-md sm:flex-row sm:items-center">
                <div className="flex flex-col">
                  <StarRating rating={5} className="mb-1" />

                  <span className="font-headline-md text-headline-md text-primary">
                    4.9/5
                  </span>
                </div>

                <div className="hidden h-12 w-px bg-outline-variant sm:block" />

                <div>
                  <p className="font-body-md font-semibold text-on-surface">
                    Tingkat Kepuasan Nasabah
                  </p>

                  <p className="font-label-sm uppercase tracking-wider text-on-surface-variant">
                    Berdasarkan 8,500+ ulasan terverifikasi
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 right-0 hidden -translate-y-1/2 translate-x-1/4 opacity-20 lg:block">
            <span className="material-symbols-outlined rotate-12 text-[400px] text-primary">
              verified_user
            </span>
          </div>
        </section>

        <section id="testimonial-stats" className="bg-primary-container py-16">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-5 md:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.key}
                  className={index === 4 ? "col-span-2 md:col-span-1" : ""}
                >
                  <p className="font-display-lg text-headline-lg mb-2 text-secondary">
                    {stat.formatter(
                      stat.target === null
                        ? null
                        : counterValues[stat.key] || 0,
                    )}
                  </p>

                  <p className="font-label-sm uppercase text-on-primary-container">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">
                  Apa Kata Nasabah Kami
                </h2>

                <p className="font-body-md max-w-xl text-on-surface-variant">
                  Dengarkan langsung dari mereka yang telah merasakan ketenangan
                  pikiran bersama AJ Lifelong Assurance.
                </p>
              </div>

              <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                <div className="relative">
                  <span className="material-symbols-outlined absolute top-1/2 left-3 -translate-y-1/2 text-outline">
                    search
                  </span>

                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    className="text-body-md w-full rounded-lg border border-outline-variant bg-white py-2 pr-4 pl-10 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 md:w-64"
                    placeholder="Cari pengalaman nasabah..."
                    type="text"
                  />
                </div>

                <select
                  value={ratingFilter}
                  onChange={(event) => setRatingFilter(event.target.value)}
                  className="text-body-md rounded-lg border border-outline-variant bg-white px-4 py-2 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="all">Semua Rating</option>
                  <option value="5">5 Bintang</option>
                  <option value="4">4 Bintang</option>
                </select>
              </div>
            </div>

            <div className="group relative mb-20 overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${activeSlide * 100}%)`,
                }}
              >
                {featuredTestimonials.map((testimonial) => (
                  <FeaturedTestimonial
                    key={testimonial.name}
                    testimonial={testimonial}
                  />
                ))}
              </div>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {featuredTestimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className={`h-3 w-3 rounded-full ${
                      activeSlide === index
                        ? "bg-secondary"
                        : "bg-outline-variant"
                    }`}
                    aria-label={`Buka testimoni ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {filteredTestimonials.map((testimonial) => (
                <SmallTestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              ))}
            </div>

            {filteredTestimonials.length === 0 && (
              <div className="rounded-xl border border-outline-variant bg-surface-container-low p-8 text-center text-on-surface-variant">
                Tidak ada testimoni yang sesuai dengan pencarian.
              </div>
            )}

            {/* <div className="mt-16 text-center">
              <button className="border-b-2 border-primary pb-1 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:border-secondary hover:text-secondary">
                Lihat Semua 8,521 Testimoni
              </button>
            </div> */}
          </div>
        </section>

        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 z-0 bg-primary">
            <div className="absolute top-0 right-0 h-full w-1/3 translate-x-1/2 skew-x-12 bg-secondary/10" />
            <div className="absolute bottom-0 left-0 h-1/2 w-1/2 -translate-x-1/4 -skew-x-12 bg-secondary/5" />
          </div>

          <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display-lg text-display-lg mb-6 text-white">
                Bergabung Bersama Ribuan Nasabah yang Telah Terlindungi
              </h2>

              <p className="font-body-lg text-body-lg mb-12 text-primary-fixed-dim">
                AJ Lifelong Assurance membantu memberikan perlindungan finansial
                jangka panjang bagi keluarga Indonesia. Jangan tunda ketenangan
                pikiran Anda.
              </p>

              <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                <a
                  href="/products/daftar-asuransi"
                  className="animate-gold-pulse w-full rounded-lg bg-secondary px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-secondary-fixed md:w-auto"
                >
                  Daftar Sekarang
                </a>

                <a
                  href="/products/daftar-asuransi#calculator"
                  className="w-full rounded-lg border-2 border-secondary px-10 py-4 text-lg font-bold text-secondary transition-all hover:bg-secondary/10 md:w-auto"
                >
                  Hitung Premi
                </a>
              </div>

              <a
                href="mailto:customer@amanjiwa.co.id"
                className="group mt-12 flex cursor-pointer items-center justify-center gap-3 text-white/80 transition-colors hover:text-secondary"
              >
                <span className="material-symbols-outlined transition-transform group-hover:scale-110">
                  headset_mic
                </span>

                <span className="font-label-sm border-b border-transparent uppercase tracking-widest group-hover:border-secondary">
                  Konsultasi Gratis Dengan Ahli Kami
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeaturedTestimonial({ testimonial }) {
  return (
    <div className="min-w-full px-2">
      <div className="premium-shadow grid items-center gap-12 rounded-2xl border-t-2 border-secondary bg-white p-8 md:grid-cols-3 md:p-12">
        <div className="md:col-span-1">
          <div className="mb-6 aspect-square overflow-hidden rounded-full border-4 border-secondary/10">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <StarRating rating={testimonial.rating} className="mb-4" />

          <h3 className="font-headline-md text-headline-md mb-2 text-primary">
            {testimonial.name}
          </h3>

          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
              Verified Customer
            </span>

            <span className="text-sm text-on-surface-variant">
              • {testimonial.since}
            </span>
          </div>

          <blockquote className="font-body-lg text-body-lg leading-relaxed text-on-surface italic">
            "{testimonial.quote}"
          </blockquote>
        </div>
      </div>
    </div>
  );
}

function SmallTestimonialCard({ testimonial }) {
  return (
    <article className="group rounded-xl border border-outline-variant bg-surface-container-low p-6 transition-all hover:border-secondary hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-center gap-4">
        {testimonial.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed font-bold text-primary">
            {testimonial.initials}
          </div>
        )}

        <div>
          <p className="font-bold text-primary">{testimonial.name}</p>

          <p className="flex items-center gap-1 text-xs text-on-surface-variant">
            <span
              className="material-symbols-outlined text-[14px] text-primary"
              style={{
                fontVariationSettings:
                  "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              }}
            >
              verified
            </span>
            Verified
          </p>
        </div>
      </div>

      <StarRating rating={testimonial.rating} size="text-sm" className="mb-3" />

      <p className="text-sm leading-relaxed text-on-surface-variant">
        "{testimonial.quote}"
      </p>
    </article>
  );
}

function StarRating({ rating, size = "", className = "" }) {
  const stars = [];

  for (let index = 1; index <= 5; index += 1) {
    if (rating >= index) {
      stars.push("star");
    } else if (rating >= index - 0.5) {
      stars.push("star_half");
    } else {
      stars.push("star");
    }
  }

  return (
    <div className={`flex gap-1 text-secondary ${className}`}>
      {stars.map((star, index) => (
        <span
          key={`${star}-${index}`}
          className={`material-symbols-outlined ${size}`}
          style={{
            fontVariationSettings:
              star === "star" || star === "star_half"
                ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          }}
        >
          {star}
        </span>
      ))}
    </div>
  );
}
