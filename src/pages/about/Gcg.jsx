import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const governanceImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCHHODn3Zl6czdSbRzhHlMr03ybMBA4c5XNfYdtyaBPsGOYSiTukGDLKygww6FJoL54OmG_cdaawjLRkDQqP-xrs2B9D-PtkWFDhEm8712I71FnCbWkAwZAzi7WpfaFwVsbwMSHC89H0TxllKdW3HyioUb0FD5stZSeFIYHbXe_6ozPq1DkOEaTjB0itYcx1tZv4MRrvGmqj0VWZnxAMCGq_Is8uZSwVFvdpT5iWEU-PpQP-nH0Gi2W7zyMm6Qc6BI7avT3g5HFZ_E";

const boardroomImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD0Hh8UE96qL0y5qsz-J2tgLAsg3lPFYuWzYo_GAQKC40QdrJ7eJsQbZWX9EtJKge0nPrsiBwI-t40aKb-DghMpYqbiplwmCh4nWlbhIKoq8gVY37h1RwQxSKz5dtCCkJpQ6HONDcm2Gl3aOT7CQSfFQCUEt6UwJ-tHcl6KmL9FEAekTLRB15zghcPAxS6EPXRtmw0nLDcvO-uJsknqKIBhWJsQIrCNn9lYJMEK_ZoZegq63zj8fCRjFdXC2ySafQOpOo-xbfZi9SI";

const principles = [
  {
    icon: "visibility",
    title: "Transparansi",
    description:
      "Keterbukaan informasi material yang relevan secara tepat waktu dan akurat.",
  },
  {
    icon: "account_balance",
    title: "Akuntabilitas",
    description:
      "Kejelasan fungsi, struktur, dan pertanggungjawaban organ Perusahaan.",
  },
  {
    icon: "handshake",
    title: "Responsibilitas",
    description:
      "Kepatuhan terhadap peraturan perundang-undangan dan prinsip korporasi sehat.",
  },
  {
    icon: "balance",
    title: "Independensi",
    description:
      "Pengelolaan profesional tanpa benturan kepentingan atau tekanan pihak lain.",
  },
  {
    icon: "diversity_3",
    title: "Kewajaran & Kesetaraan",
    description:
      "Keadilan dan kesetaraan dalam memenuhi hak-hak pemangku kepentingan.",
  },
];

const governancePoints = [
  "Audit Internal & Eksternal yang ketat",
  "Sistem Pelaporan Pelanggaran (Whistleblowing)",
  "Manajemen Risiko Terintegrasi",
];

const badges = [
  {
    title: "OJK",
    label: "Regulator",
  },
  {
    title: "AAUI",
    label: "Member",
  },
  {
    title: "ISO 27001",
    label: "Data Security",
  },
];

export default function Gcg() {
  return (
    <div className="bg-background text-on-background selection:bg-secondary-fixed selection:text-primary">
      <Navbar />

      <header className="relative overflow-hidden bg-primary-container pt-32 pb-24">
        <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl">
            <span className="font-label-sm text-label-sm mb-4 inline-block uppercase tracking-[0.2em] text-secondary-fixed">
              Corporate Integrity
            </span>

            <h1 className="font-display-lg text-display-lg mb-6 leading-tight text-on-primary">
              Tata Kelola Perusahaan <br />
              <span className="gold-gradient-text">
                (Good Corporate Governance)
              </span>
            </h1>

            <p className="font-body-lg text-body-lg max-w-2xl leading-relaxed text-primary-fixed-dim">
              PT Aman Jiwa Insurance berkomitmen menerapkan prinsip Good
              Corporate Governance (GCG) dalam seluruh aktivitas bisnis guna
              menjaga kepercayaan nasabah, mitra, dan pemangku kepentingan.
            </p>
          </div>
        </div>
      </header>

      <main className="py-24">
        <section className="mx-auto mb-32 max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 text-center">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">
              Pilar GCG Kami
            </h2>

            <p className="font-body-md text-body-md mx-auto max-w-2xl text-outline">
              Kami berpegang teguh pada standar internasional untuk memastikan
              transparansi dan keadilan bagi setiap pemegang polis.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className={`gcg-card-hover group rounded-xl border border-outline-variant bg-surface-container-lowest p-8 premium-shadow transition-all duration-300 ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-fixed text-primary transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined">
                    {principle.icon}
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md mb-3 text-primary">
                  {principle.title}
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 items-stretch gap-gutter lg:grid-cols-12">
              <div className="flex flex-col justify-center lg:col-span-5">
                <h2 className="font-headline-lg text-headline-lg mb-6 text-primary">
                  Struktur Tata Kelola
                </h2>

                <p className="font-body-md text-body-md mb-8 leading-relaxed text-on-surface-variant">
                  Organ utama GCG Aman Jiwa terdiri dari Rapat Umum Pemegang
                  Saham (RUPS), Dewan Komisaris, dan Direksi yang didukung oleh
                  berbagai komite penunjang untuk memastikan pengawasan berjalan
                  efektif.
                </p>

                <ul className="mb-8 space-y-4">
                  {governancePoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="material-symbols-outlined pt-1 text-secondary">
                        verified
                      </span>

                      <span className="font-body-md text-body-md">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
                <div className="group relative h-64 overflow-hidden rounded-xl bg-surface-container-highest">
                  <img
                    src={governanceImageUrl}
                    alt="Modern corporate architecture"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-end bg-primary/20 p-6">
                    <span className="font-headline-md text-on-primary">
                      Modern Infrastruktur
                    </span>
                  </div>
                </div>

                <div className="flex h-64 flex-col items-center justify-center rounded-xl border-t-2 border-secondary bg-primary p-8 text-center">
                  <span className="font-display-lg text-display-lg mb-2 text-secondary-fixed">
                    98%
                  </span>

                  <span className="font-body-md text-on-primary">
                    Indeks Kepatuhan Regulasi
                  </span>
                </div>

                <div className="group relative h-64 overflow-hidden rounded-xl bg-surface-container-highest sm:col-span-2">
                  <img
                    src={boardroomImageUrl}
                    alt="Professional boardroom"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-primary/40">
                    <div className="text-center">
                      <h4 className="font-headline-lg text-on-primary">
                        Pengawasan Berkelanjutan
                      </h4>

                      <p className="text-secondary-fixed">
                        Dewan Komisaris & Direksi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
          <div className="flex flex-col items-center justify-between gap-12 rounded-2xl border border-outline-variant bg-white p-12 md:flex-row">
            <div className="text-center md:text-left">
              <h4 className="font-headline-md text-headline-md mb-2 text-primary">
                Terdaftar & Diawasi Oleh
              </h4>

              <p className="font-body-md text-on-surface-variant">
                Kepatuhan regulasi adalah prioritas utama kami untuk melindungi
                Anda.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-70 transition-all duration-500 hover:grayscale-0 hover:opacity-100">
              {badges.map((badge) => (
                <div key={badge.title} className="flex flex-col items-center">
                  <div className="flex h-16 w-32 items-center justify-center rounded-lg border border-outline-variant bg-surface-container font-bold text-primary">
                    {badge.title}
                  </div>

                  <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-outline">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}