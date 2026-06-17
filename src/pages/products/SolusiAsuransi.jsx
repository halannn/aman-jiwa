import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const heroImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDr4ea-KAPLtCuv1GQSkx54GIDudypTExnlzp_ZN8h57WchWp-IjteORMLRuwgo33IuiEtmuB7Oykw3qxYBAGHcpktLAGFze6NCJABBrhBeRRlyowZg6AlEyVj-sdYMbONf2pwOWOe6jScLdZIyGx_WtSgGHUETa4tnp_L8NfwMH53IubACC-z_0Da3hZnVIam9Ish2Ozs_D335rcznrfqBRG3oZkrPnER6dMo6K_T0zDftR_P4n8Z3gZZl4IjGKXrmBdgdHP-iPhE";

const ojkLogoUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBIglPnFvcuVIG6KfEV0GShqWE9QSNHa1ACQNT4WmGgRxPrUR7sdmmvsr0pycv86XHuMBOL035YyFLYeYE_n4wFSs9xmBQ4_AyiVIOdaxeAoU48YTQ2VzQcKZKANggaCPMuLYen_63RdH-K4a_p39HU0Z2PAVFfA8HbRen5tKMeTGeMD2-LTwygcJKR_Cmm_t_txhQ495vLDq49Ka0dE96pkQMNc6yPX6181yvqEIPbL2bMJWL60jTZF4xo3PkfAUedMJocFG4_Noo";

const benefits = [
  {
    icon: "heart_check",
    iconBoxClass: "bg-primary-fixed",
    iconClass: "text-primary",
    title: "Manfaat Meninggal Dunia",
    description:
      "Memberikan santunan sebesar 100% Uang Pertanggungan (UP) apabila Tertanggung meninggal dunia karena sebab alami atau sakit.",
  },
  {
    icon: "emergency_home",
    iconBoxClass: "bg-secondary-fixed",
    iconClass: "text-secondary",
    title: "Manfaat Kecelakaan",
    description:
      "Ekstra perlindungan hingga 200% Uang Pertanggungan jika risiko meninggal dunia terjadi akibat kecelakaan yang tidak terduga.",
  },
  {
    icon: "accessible",
    iconBoxClass: "bg-tertiary-fixed",
    iconClass: "text-tertiary",
    title: "Cacat Tetap Total",
    description:
      "Jaminan kelangsungan hidup dengan manfaat 100% UP sesuai ketentuan polis jika terjadi kondisi Cacat Tetap Total.",
  },
  {
    icon: "savings",
    iconBoxClass: "bg-primary-fixed",
    iconClass: "text-primary",
    title: "Akumulasi Nilai Tunai",
    description:
      "Nilai tunai yang mulai terbentuk sejak tahun ke-3 kepesertaan, memberikan fleksibilitas finansial di masa depan.",
  },
  {
    icon: "calendar_month",
    iconBoxClass: "bg-secondary-fixed",
    iconClass: "text-secondary",
    title: "Akhir Masa Pertanggungan",
    description:
      "Menerima 100% nilai tunai yang tersedia saat Tertanggung mencapai usia 99 tahun sebagai apresiasi atas kepercayaan Anda.",
  },
  {
    icon: "groups",
    iconBoxClass: "bg-secondary",
    iconClass: "text-white",
    title: "Warisan Finansial",
    description:
      "Memastikan kesejahteraan ahli waris terjaga dengan proses klaim yang transparan dan profesional dari tim kami.",
    dark: true,
  },
];

const steps = [
  {
    title: "Konsultasi",
    description:
      "Hubungi agen profesional kami untuk diskusi mengenai kebutuhan perlindungan Anda dan keluarga secara mendalam.",
  },
  {
    title: "Lengkapi Data Diri",
    description:
      "Isi formulir pendaftaran dengan melampirkan dokumen identitas resmi (KTP/Passport) melalui sistem digital kami yang aman.",
  },
  {
    title: "Pembayaran & Aktivasi",
    description:
      "Lakukan pembayaran premi pertama melalui kanal resmi. Polis Anda akan segera diproses dan dikirimkan secara elektronik.",
  },
];

export default function SolusiAsuransi() {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        <section className="relative flex min-h-[600px] items-center overflow-hidden bg-primary-container">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImageUrl}
              alt="Keluarga Indonesia bahagia"
              className="h-full w-full object-cover opacity-40 mix-blend-luminosity"
            />
          </div>

          <div className="relative z-10 mx-auto grid max-w-container-max items-center gap-12 px-margin-mobile py-20 md:grid-cols-2 md:px-margin-desktop">
            <div className="text-on-primary">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-3 py-1 text-secondary-fixed">
                <span className="material-symbols-outlined text-[18px]">
                  verified
                </span>

                <span className="font-label-sm text-label-sm uppercase tracking-wider">
                  Terpercaya & Berizin OJK
                </span>
              </div>

              <h1 className="font-display-lg text-display-lg mb-6 leading-tight">
                AJ Lifelong Assurance:{" "}
                <span className="text-secondary-fixed">Warisan Finansial</span>{" "}
                & Perlindungan Seumur Hidup
              </h1>

              <p className="font-body-lg text-body-lg mb-10 max-w-xl text-on-primary-container">
                Berikan kepastian masa depan bagi orang tercinta dengan produk
                asuransi jiwa yang memberikan perlindungan komprehensif hingga
                usia 99 tahun.
              </p>

              {/* <div className="flex flex-wrap gap-4">
                <button className="premium-shadow flex items-center gap-2 rounded-xl bg-secondary-container px-8 py-4 font-headline-md text-[18px] text-on-secondary-container transition-all hover:bg-secondary-fixed">
                  Hitung Premi Sekarang
                  <span className="material-symbols-outlined">
                    trending_flat
                  </span>
                </button>

                <button className="flex items-center gap-2 rounded-xl border border-outline-variant px-8 py-4 font-headline-md text-[18px] text-on-primary transition-all hover:bg-white/10">
                  <span className="material-symbols-outlined">download</span>
                  Download Brosur
                </button>
              </div> */}
            </div>

            <div className="hidden justify-center md:flex">
              <div className="relative rounded-full border border-white/20 bg-white/10 p-8 backdrop-blur-xl">
                <div className="flex animate-pulse flex-col items-center justify-center rounded-full border-4 border-secondary bg-primary p-12 text-center shadow-2xl">
                  <span className="font-label-sm text-label-sm mb-1 uppercase tracking-[0.2em] text-secondary-fixed">
                    Perlindungan Hingga
                  </span>

                  <div className="flex items-baseline gap-1">
                    <span className="text-[80px] font-extrabold leading-none text-white">
                      99
                    </span>

                    <span className="text-headline-md font-bold text-secondary-fixed">
                      TAHUN
                    </span>
                  </div>

                  <div className="mt-2 flex gap-1">
                    {[1, 2, 3].map((item) => (
                      <span
                        key={item}
                        className="material-symbols-outlined text-secondary-fixed"
                        style={{
                          fontVariationSettings:
                            "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                        }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-headline-lg text-headline-lg mb-6 text-primary">
                Solusi Perlindungan Menyeluruh
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant">
                AJ Lifelong Assurance dirancang khusus untuk Anda yang
                mengutamakan ketenangan pikiran dalam jangka panjang. Sebagai
                asuransi jiwa tradisional yang stabil, produk ini tidak hanya
                memberikan proteksi finansial terhadap risiko meninggal dunia,
                namun juga berfungsi sebagai instrumen akumulasi nilai tunai
                yang terjamin untuk mendukung masa depan keluarga Anda.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Manfaat Utama Produk
                </h2>

                <div className="mt-2 h-1.5 w-24 rounded-full bg-secondary" />
              </div>

              <span className="font-label-sm text-label-sm hidden text-on-surface-variant md:block">
                KEUNGGULAN AJ LIFELONG ASSURANCE
              </span>
            </div>

            <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className={`bento-card premium-shadow flex h-full flex-col rounded-xl p-8 ${
                    benefit.dark ? "bg-primary shadow-xl" : "bg-white"
                  }`}
                >
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-lg ${benefit.iconBoxClass}`}
                  >
                    <span
                      className={`material-symbols-outlined text-[32px] ${benefit.iconClass}`}
                    >
                      {benefit.icon}
                    </span>
                  </div>

                  <h3
                    className={`font-headline-md text-headline-md mb-3 ${
                      benefit.dark ? "text-white" : "text-primary"
                    }`}
                  >
                    {benefit.title}
                  </h3>

                  <p
                    className={`flex-grow ${
                      benefit.dark
                        ? "text-primary-fixed"
                        : "text-on-surface-variant"
                    }`}
                  >
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-surface py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-headline-lg text-headline-lg mb-12 text-center text-primary">
                Cara Mendaftar Mudah
              </h2>

              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={step.title} className="flex items-start gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-white">
                      {index + 1}
                    </div>

                    <div>
                      <h4 className="font-headline-md text-headline-md mb-2 text-primary">
                        {step.title}
                      </h4>

                      <p className="text-on-surface-variant">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 flex flex-col items-start gap-6 rounded-2xl bg-surface-container p-8 sm:flex-row sm:items-center">
                <img
                  src={ojkLogoUrl}
                  alt="OJK Logo"
                  className="h-12 w-auto grayscale opacity-80"
                />

                <p className="text-sm leading-relaxed text-on-surface-variant">
                  PT Aman Jiwa Insurance berizin dan diawasi oleh{" "}
                  <strong>Otoritas Jasa Keuangan (OJK)</strong>. Produk AJ
                  Lifelong Assurance telah terdaftar sesuai ketentuan yang
                  berlaku.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-white md:px-12">
              <div className="relative z-10">
                <h2 className="font-display-lg text-display-lg mx-auto mb-6 max-w-4xl">
                  Lindungi Orang Tercinta Dengan Kepastian Finansial Terbaik
                </h2>

                <p className="font-body-lg text-body-lg mb-10 text-primary-fixed">
                  Tim ahli asuransi kami siap membantu Anda menyusun rencana
                  masa depan.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <div className="flex items-center gap-4 rounded-xl border border-white/20 bg-white/10 px-8 py-4">
                    <span className="material-symbols-outlined text-[32px] text-secondary-fixed">
                      call
                    </span>

                    <div className="text-left">
                      <p className="text-xs text-on-primary-container">
                        LAYANAN NASABAH 24/7
                      </p>

                      <p className="text-xl font-bold">1500 123</p>
                    </div>
                  </div>

                  <button className="rounded-xl bg-secondary-fixed px-10 py-5 text-lg font-bold text-primary transition-transform hover:scale-105">
                    Chat Dengan Agen (WhatsApp)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}