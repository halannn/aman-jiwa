import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  profileHeroImageUrl,
  profileValuesImageUrl,
} from "../../constants/assets";

const stats = [
  {
    value: "20+",
    label: "Tahun Pengalaman",
  },
  {
    value: "1JT+",
    label: "Nasabah Aktif",
  },
  {
    value: "98%",
    label: "Claims Ratio",
  },
];

const missions = [
  {
    icon: "verified_user",
    title: "Perlindungan Berkualitas",
    description:
      "Menyediakan solusi proteksi komprehensif yang dirancang untuk kebutuhan unik keluarga Indonesia.",
  },
  {
    icon: "support_agent",
    title: "Pelayanan Nasabah",
    description:
      "Membangun hubungan jangka panjang melalui layanan yang empati, responsif, dan profesional.",
  },
  {
    icon: "gavel",
    title: "Integritas Tinggi",
    description:
      "Menjalankan operasional bisnis dengan standar etika tertinggi dan transparansi penuh.",
  },
  {
    icon: "lightbulb",
    title: "Solusi Inovatif",
    description:
      "Terus beradaptasi dengan teknologi terbaru untuk mempermudah akses perlindungan finansial.",
  },
];

const values = [
  {
    icon: "handshake",
    title: "Transparansi Tanpa Batas",
    description:
      "Setiap klausul dan manfaat dijelaskan dengan lugas tanpa ada biaya tersembunyi. Kejelasan adalah fondasi kepercayaan kami.",
  },
  {
    icon: "eco",
    title: "Keberlanjutan Finansial",
    description:
      "Kami mengelola aset dengan bijaksana untuk menjamin bahwa janji perlindungan kami tetap teguh hingga generasi mendatang.",
  },
  {
    icon: "diamond",
    title: "Layanan Premium",
    description:
      "Setiap nasabah diperlakukan sebagai mitra eksklusif dengan solusi yang disesuaikan secara personal dan presisi.",
  },
];

export default function Profile() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    const elements = document.querySelectorAll(".profile-reveal");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        <section className="profile-reveal relative mx-auto max-w-container-max overflow-hidden px-margin-mobile py-24 md:px-margin-desktop">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="z-10">
              <span className="font-label-sm text-label-sm mb-4 block uppercase tracking-widest text-secondary">
                Profil Perusahaan
              </span>

              <h1 className="font-display-lg text-display-lg mb-8 text-primary">
                Warisan Kepercayaan & Perlindungan Masa Depan
              </h1>

              <p className="font-body-lg text-body-lg mb-10 leading-relaxed text-on-surface-variant">
                PT Aman Jiwa Insurance merupakan perusahaan asuransi jiwa yang
                berkomitmen memberikan perlindungan finansial jangka panjang
                bagi masyarakat Indonesia melalui produk asuransi yang
                transparan, terpercaya, dan berorientasi pada kebutuhan nasabah.
              </p>

              <div className="flex flex-wrap gap-6">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="font-headline-md text-headline-md text-primary">
                        {stat.value}
                      </span>

                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {stat.label}
                      </span>
                    </div>

                    {index < stats.length - 1 && (
                      <div className="hidden h-12 w-px bg-outline-variant sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="premium-shadow overflow-hidden rounded-xl">
                <img
                  src={profileHeroImageUrl}
                  alt="Gedung kantor modern Aman Jiwa Insurance"
                  className="h-[500px] w-full object-cover"
                />
              </div>

              <div className="premium-shadow absolute -bottom-6 -left-6 hidden rounded-xl bg-secondary-container p-8 lg:block">
                <span className="material-symbols-outlined text-4xl text-on-secondary-container">
                  shield
                </span>

                <p className="mt-2 font-bold text-on-secondary-container">
                  Berizin & Diawasi
                  <br />
                  Oleh OJK
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-container py-32">
          <div className="profile-reveal mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="mb-20 text-center">
              <span className="font-label-sm text-label-sm mb-4 block uppercase tracking-widest text-secondary-fixed">
                Tujuan Kami
              </span>

              <h2 className="font-headline-lg text-headline-lg mb-4 text-on-primary">
                Visi & Misi
              </h2>

              <div className="mx-auto h-1 w-20 bg-secondary-fixed" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="flex flex-col justify-center rounded-xl border border-primary/20 bg-tertiary-container p-12 md:col-span-12 lg:col-span-5">
                <h3 className="font-label-sm text-label-sm mb-4 uppercase text-secondary-fixed-dim">
                  Visi Kami
                </h3>

                <p className="font-headline-md text-headline-md leading-relaxed text-on-primary italic">
                  "Menjadi perusahaan asuransi jiwa terpercaya yang memberikan
                  perlindungan finansial berkelanjutan bagi setiap keluarga
                  Indonesia."
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:col-span-12 md:grid-cols-2 lg:col-span-7">
                {missions.map((mission) => (
                  <div
                    key={mission.title}
                    className="rounded-xl border border-on-primary-container/20 bg-surface/5 p-8 transition-colors hover:bg-surface/10"
                  >
                    <span className="material-symbols-outlined mb-4 text-secondary-fixed">
                      {mission.icon}
                    </span>

                    <h4 className="font-headline-md mb-2 text-[20px] text-on-primary">
                      {mission.title}
                    </h4>

                    <p className="font-body-md text-on-primary-container">
                      {mission.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-8 rounded-xl bg-secondary-fixed p-8 md:col-span-12 md:flex-row">
                <span className="material-symbols-outlined text-4xl text-primary">
                  diversity_3
                </span>

                <div>
                  <h4 className="font-headline-md mb-2 text-primary">
                    Kesejahteraan Masyarakat
                  </h4>

                  <p className="font-body-md text-on-secondary-fixed-variant">
                    Berkontribusi aktif dalam meningkatkan literasi keuangan dan
                    standar hidup masyarakat luas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="profile-reveal mx-auto max-w-container-max px-margin-mobile py-32 md:px-margin-desktop">
          <div className="flex flex-col items-center gap-20 lg:flex-row">
            <div className="order-2 lg:order-1 lg:w-1/2">
              <div className="relative">
                <img
                  src={profileValuesImageUrl}
                  alt="Tim profesional Aman Jiwa Insurance"
                  className="premium-shadow h-[600px] w-full rounded-xl object-cover"
                />

                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary opacity-5 blur-3xl" />
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:w-1/2">
              <h2 className="font-display-lg text-display-lg mb-12 text-primary">
                Nilai-Nilai Korporasi Kami
              </h2>

              <div className="space-y-12">
                {values.map((value) => (
                  <div key={value.title} className="group flex gap-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-surface-container transition-colors group-hover:bg-primary">
                      <span className="material-symbols-outlined text-primary transition-colors group-hover:text-on-primary">
                        {value.icon}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-headline-md mb-2 text-primary">
                        {value.title}
                      </h4>

                      <p className="font-body-md text-on-surface-variant">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="profile-reveal mx-auto mb-20 max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
          <div className="hero-gradient relative overflow-hidden rounded-xl p-16 text-center">
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div
                className="absolute top-0 left-0 h-full w-full"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <h2 className="font-headline-lg text-headline-lg relative z-10 mb-6 text-on-primary">
              Siap Melindungi Masa Depan Anda?
            </h2>

            <p className="font-body-lg relative z-10 mx-auto mb-10 max-w-2xl text-on-primary-container">
              Bergabunglah dengan jutaan keluarga Indonesia yang telah
              mempercayakan ketenangan pikiran mereka kepada Aman Jiwa
              Insurance.
            </p>

            <div className="relative z-10 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="premium-shadow rounded-xl bg-secondary px-8 py-4 font-bold text-on-secondary transition-all hover:brightness-110">
                Bicara dengan Penasihat
              </button>

              <button className="rounded-xl border border-on-primary-container px-8 py-4 font-bold text-on-primary transition-all hover:bg-white/10">
                Lihat Produk Kami
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
