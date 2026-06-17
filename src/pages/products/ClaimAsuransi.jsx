import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const googleFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeq1rg652sGsV2xv4SE-N3b__hDtF7iUA_t6v2neLerm6sF_g/viewform";

const googleFormEmbedUrl = `${googleFormUrl}?embedded=true`;

const workflowSteps = [
  {
    icon: "campaign",
    title: "Laporkan Kejadian",
    description: "Segera lapor maksimal 7x24 jam",
    active: true,
  },
  {
    icon: "description",
    title: "Lengkapi Dokumen",
    description: "Sesuai persyaratan jenis klaim",
  },
  {
    icon: "fact_check",
    title: "Verifikasi Dokumen",
    description: "Pengecekan keaslian data",
  },
  {
    icon: "travel_explore",
    title: "Investigasi",
    description: "Analisis medis jika diperlukan",
  },
  {
    icon: "verified",
    title: "Persetujuan Klaim",
    description: "Keputusan final dari Underwriting",
  },
  {
    icon: "payments",
    title: "Pembayaran",
    description: "Transfer dana ke rekening tujuan",
    final: true,
  },
];

const trackerSteps = [
  {
    icon: "check",
    label: "Diterima",
    active: true,
  },
  {
    icon: "sync",
    label: "Sedang Diverifikasi",
    active: true,
  },
  {
    icon: "search",
    label: "Investigasi",
  },
  {
    icon: "verified",
    label: "Disetujui",
  },
  {
    icon: "payments",
    label: "Dibayarkan",
  },
];

const claimDocumentTabs = {
  meninggal: {
    label: "Klaim Meninggal Dunia",
    icon: "verified_user",
    title: "Dokumen Utama",
    items: [
      "Polis Asli AJ Lifelong Assurance",
      "Formulir Klaim Meninggal Dunia yang diisi Pemegang Polis atau Ahli Waris",
      "Fotokopi KTP/Identitas Diri Pemegang Polis dan Ahli Waris",
      "Surat Kematian dari Instansi Berwenang yang sudah dilegalisir",
    ],
    note:
      "Dalam hal Tertanggung meninggal dunia karena kecelakaan atau sebab yang tidak wajar, Perusahaan berhak meminta Berita Acara Pemeriksaan (BAP) dari Kepolisian setempat.",
  },
  cacat: {
    label: "Klaim Cacat Tetap Total",
    icon: "medical_services",
    title: "Persyaratan Medis",
    items: [
      "Surat Keterangan Dokter tentang Cacat Tetap Total",
      "Hasil pemeriksaan penunjang seperti Rontgen, MRI, atau dokumen medis lain",
      "Resume Medis dari Rumah Sakit terakhir",
      "Fotokopi identitas Pemegang Polis dan Tertanggung",
    ],
    note:
      "Tim klaim dapat meminta pemeriksaan lanjutan apabila dokumen medis belum cukup untuk proses penilaian klaim.",
  },
  tunai: {
    label: "Klaim Nilai Tunai",
    icon: "account_balance_wallet",
    title: "Administrasi Keuangan",
    items: [
      "Formulir Pengajuan Manfaat Nilai Tunai",
      "Fotokopi Buku Tabungan halaman depan",
      "Fotokopi identitas Pemegang Polis",
      "Dokumen pendukung lain sesuai ketentuan polis",
    ],
    note:
      "Nilai tunai hanya dapat diproses apabila polis telah memenuhi ketentuan pembentukan nilai tunai sesuai perjanjian polis.",
  },
};

const inputClass =
  "w-full rounded border border-outline-variant bg-white p-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function ClaimAsuransi() {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeTab, setActiveTab] = useState("meninggal");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeDocument = claimDocumentTabs[activeTab];

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    window.setTimeout(() => {
      document
        .getElementById("claim-success")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        <section className="relative flex min-h-[614px] items-center overflow-hidden bg-primary-container">
          <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-12 px-margin-mobile md:grid-cols-2 md:px-margin-desktop">
            <div className="text-on-primary">
              <h1 className="font-display-lg text-display-lg mb-6 leading-tight">
                Ajukan Klaim dengan Mudah dan Cepat
              </h1>

              <p className="font-body-lg text-body-lg mb-10 max-w-xl text-on-primary-container">
                PT Aman Jiwa Insurance berkomitmen memberikan pelayanan klaim
                yang transparan dan profesional sesuai ketentuan Polis AJ
                Lifelong Assurance.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#claim-section"
                  className="premium-shadow rounded bg-secondary px-8 py-4 font-bold text-on-secondary transition-all hover:bg-secondary-fixed"
                >
                  Ajukan Klaim Online
                </a>

                <a
                  href="#google-form"
                  className="rounded border border-secondary px-8 py-4 font-bold text-secondary transition-all hover:bg-secondary hover:text-white"
                >
                  Buka Google Form
                </a>

                {/* <a
                  href="mailto:claims@amanjiwa.co.id"
                  className="flex items-center gap-2 text-on-primary-container underline underline-offset-4 hover:text-white"
                >
                  <span className="material-symbols-outlined text-sm">
                    support_agent
                  </span>
                  Hubungi Customer Service
                </a> */}
              </div>
            </div>

            <div className="hidden md:block">
              <div className="premium-shadow rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
                <div className="flex flex-col gap-6">
                  <HeroInfoCard
                    icon="security"
                    title="Perlindungan Terjamin"
                    description="Dana klaim disiapkan secara likuid"
                    variant="secondary"
                  />

                  <HeroInfoCard
                    icon="bolt"
                    title="Proses Ekspres"
                    description="Verifikasi dokumen dalam 3 hari kerja"
                    variant="primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="mb-16 text-center">
              <span className="font-label-sm mb-2 block uppercase tracking-widest text-secondary">
                Workflow
              </span>

              <h2 className="font-headline-lg text-headline-lg text-primary">
                Prosedur Standar Pengajuan
              </h2>
            </div>

            <div className="relative">
              <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-6">
                {workflowSteps.map((step) => (
                  <div
                    key={step.title}
                    className="group flex flex-col items-center text-center"
                  >
                    <div
                      className={`relative z-20 mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${
                        step.active
                          ? "premium-shadow bg-primary text-secondary-fixed"
                          : step.final
                            ? "premium-shadow bg-secondary-container text-primary"
                            : "border border-outline-variant bg-surface-container text-primary"
                      }`}
                    >
                      <span className="material-symbols-outlined">
                        {step.icon}
                      </span>
                    </div>

                    <h3 className="mb-2 font-bold text-primary">
                      {step.title}
                    </h3>

                    <p className="text-xs text-on-surface-variant">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="absolute top-8 left-0 hidden h-[2px] w-full bg-outline-variant md:block" />
            </div>
          </div>
        </section>

        <section id="claim-section" className="bg-white py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="grid gap-16 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="premium-shadow rounded-xl border border-surface-container bg-surface-container-lowest p-8 md:p-12">
                  <div className="mb-8 flex items-center gap-3">
                    <div className="h-8 w-2 rounded-full bg-secondary" />
                    <h2 className="font-headline-md text-headline-md text-primary">
                      Formulir Klaim Digital
                    </h2>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit}>
                      <StepProgress currentStep={currentStep} />

                      {currentStep === 1 && (
                        <ClaimStepOne onNext={() => setCurrentStep(2)} />
                      )}

                      {currentStep === 2 && (
                        <ClaimStepTwo
                          onPrev={() => setCurrentStep(1)}
                          onNext={() => setCurrentStep(3)}
                        />
                      )}

                      {currentStep === 3 && (
                        <ClaimStepThree
                          onPrev={() => setCurrentStep(2)}
                          onNext={() => setCurrentStep(4)}
                        />
                      )}

                      {currentStep === 4 && (
                        <ClaimStepFour onPrev={() => setCurrentStep(3)} />
                      )}
                    </form>
                  ) : (
                    <div id="claim-success" className="py-12 text-center">
                      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <span className="material-symbols-outlined text-4xl">
                          check_circle
                        </span>
                      </div>

                      <h3 className="font-headline-md text-headline-md mb-3 text-primary">
                        Pengajuan Klaim Berhasil Dikirim
                      </h3>

                      <p className="mx-auto mb-8 max-w-md text-on-surface-variant">
                        Tim klaim Aman Jiwa akan melakukan verifikasi awal dan
                        menghubungi Anda melalui kontak yang terdaftar.
                      </p>

                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setCurrentStep(1);
                        }}
                        className="rounded bg-primary px-8 py-4 font-bold text-white"
                      >
                        Buat Pengajuan Baru
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div id="google-form" className="lg:col-span-5">
                <div className="sticky top-24">
                  <div className="rounded-t-xl bg-primary p-8 text-on-primary">
                    <h3 className="font-headline-md text-headline-md mb-2">
                      Gunakan Google Form
                    </h3>

                    <p className="text-on-primary-container opacity-80">
                      Alternatif pengajuan melalui platform pihak ketiga.
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-b-xl border-x border-b border-outline-variant bg-white p-6">
                    <div className="aspect-[9/16] md:aspect-auto">
                      <iframe
                        title="Google Form Klaim Aman Jiwa"
                        src={googleFormEmbedUrl}
                        width="100%"
                        height="600"
                        className="border-0"
                      >
                        Memuat…
                      </iframe>
                    </div>

                    <a
                      href={googleFormUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded border border-primary bg-surface p-4 font-bold text-primary transition-all hover:bg-primary hover:text-white"
                    >
                      <span className="material-symbols-outlined">
                        open_in_new
                      </span>
                      Ajukan Klaim melalui Google Form
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-outline-variant bg-surface-container-low py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">
                  Lacak Status Klaim Anda
                </h2>

                <p className="text-on-surface-variant">
                  Masukkan rincian polis untuk mengetahui progres terbaru dari
                  tim verifikator kami.
                </p>
              </div>

              <div className="premium-shadow mb-12 flex flex-col gap-2 rounded-lg bg-white p-2 md:flex-row">
                <input
                  className="flex-1 border-none p-4 outline-none focus:ring-0"
                  placeholder="Nomor Polis"
                  type="text"
                />

                <div className="my-2 hidden w-px self-stretch bg-outline-variant md:block" />

                <input
                  className="flex-1 border-none p-4 outline-none focus:ring-0"
                  placeholder="Nomor Referensi Klaim"
                  type="text"
                />

                <button className="rounded bg-primary px-10 py-4 font-bold text-white">
                  Cek Status
                </button>
              </div>

              <div className="relative overflow-x-auto rounded-xl border border-outline-variant bg-white p-8">
                <div className="flex min-w-[700px] items-start justify-between px-4 pt-8 pb-4">
                  {trackerSteps.map((step, index) => (
                    <div
                      key={step.label}
                      className="relative flex flex-1 flex-col items-center gap-3"
                    >
                      <div
                        className={`z-10 flex h-10 w-10 items-center justify-center rounded-full ${
                          step.active
                            ? "bg-primary text-white"
                            : "border border-outline-variant bg-surface-container text-on-surface-variant"
                        }`}
                      >
                        <span className="material-symbols-outlined text-base">
                          {step.icon}
                        </span>
                      </div>

                      {index < trackerSteps.length - 1 && (
                        <div
                          className={`absolute top-5 left-1/2 h-[2px] w-full ${
                            step.active ? "bg-primary" : "bg-outline-variant"
                          }`}
                        />
                      )}

                      <span
                        className={`text-xs font-bold ${
                          step.active
                            ? "text-primary"
                            : "text-on-surface-variant"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">
                  Informasi Dokumen Klaim
                </h2>

                <p className="max-w-xl text-on-surface-variant">
                  Lengkapi dokumen pendukung sesuai jenis pertanggungan untuk
                  mempercepat proses peninjauan.
                </p>
              </div>
            </div>

            <div className="mb-10 flex overflow-x-auto whitespace-nowrap border-b border-outline-variant">
              {Object.entries(claimDocumentTabs).map(([key, tab]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`px-8 py-4 transition-all ${
                    activeTab === key
                      ? "border-b-2 border-secondary font-bold text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <h3 className="flex items-center gap-2 text-xl font-bold text-primary">
                  <span className="material-symbols-outlined text-secondary">
                    {activeDocument.icon}
                  </span>
                  {activeDocument.title}
                </h3>

                <ul className="space-y-4">
                  {activeDocument.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-1 text-sm text-secondary">
                        check_circle
                      </span>

                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-surface-container p-8">
                <h4 className="mb-4 font-bold text-primary">
                  Catatan Penting
                </h4>

                <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
                  {activeDocument.note}
                </p>

                {/* <a
                  href="#"
                  className="inline-flex items-center gap-2 font-bold text-primary underline"
                >
                  Download PDF Persyaratan
                  <span className="material-symbols-outlined text-sm">
                    download
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-24 text-on-primary">
          <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
            <h2 className="font-headline-lg text-headline-lg mb-6">
              Butuh Bantuan Segera?
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-on-primary-container opacity-80">
              Tim klaim kami siap membantu menjawab pertanyaan Anda melalui
              berbagai kanal komunikasi yang tersedia.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="tel:0211234567"
                className="flex items-center gap-3 rounded border border-white/20 bg-white/10 px-8 py-4 transition-all hover:bg-white/20"
              >
                <span className="material-symbols-outlined">call</span>
                <span className="font-bold">Hotline (021) 1234-567</span>
              </a>

              <a
                href="mailto:claims@amanjiwa.co.id"
                className="flex items-center gap-3 rounded border border-white/20 bg-white/10 px-8 py-4 transition-all hover:bg-white/20"
              >
                <span className="material-symbols-outlined">mail</span>
                <span className="font-bold">claims@amanjiwa.co.id</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <a
        href="https://wa.me/628123456789?text=Halo%20PT%20Aman%20Jiwa%20Insurance%2C%20saya%20ingin%20menanyakan%20proses%20pengajuan%20klaim."
        target="_blank"
        rel="noreferrer"
        className="premium-shadow group fixed right-8 bottom-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>

        <div className="premium-shadow pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-lg border border-outline-variant bg-white px-4 py-2 text-sm font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Tanya via WhatsApp
        </div>
      </a>
    </div>
  );
}

function HeroInfoCard({ icon, title, description, variant }) {
  const iconClass =
    variant === "secondary"
      ? "bg-secondary-container text-primary"
      : "bg-primary text-secondary-fixed";

  return (
    <div className="flex items-center gap-4 border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full ${iconClass}`}
      >
        <span className="material-symbols-outlined">{icon}</span>
      </div>

      <div>
        <p className="font-bold text-white">{title}</p>
        <p className="text-sm text-on-primary-container">{description}</p>
      </div>
    </div>
  );
}

function StepProgress({ currentStep }) {
  return (
    <div className="mb-10 flex gap-2 overflow-x-auto pb-4">
      {[1, 2, 3, 4].map((step) => (
        <div
          key={step}
          className={`h-1 flex-1 rounded ${
            step <= currentStep ? "bg-primary" : "bg-surface-container"
          }`}
        />
      ))}
    </div>
  );
}

function ClaimStepOne({ onNext }) {
  return (
    <div>
      <StepTitle number="01" title="Informasi Polis" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field
          label="Nomor Polis"
          placeholder="Contoh: AJL-12345678"
          className="md:col-span-2"
        />
        <Field label="Nama Pemegang Polis" />
        <Field label="Nama Tertanggung" />
        <Field label="Nomor Telepon" type="tel" />
        <Field label="Alamat Email" type="email" />
      </div>

      <div className="mt-10 flex justify-end">
        <button
          type="button"
          onClick={onNext}
          className="rounded bg-primary px-10 py-4 font-bold text-white transition-all hover:bg-primary-container"
        >
          Lanjut ke Jenis Klaim
        </button>
      </div>
    </div>
  );
}

function ClaimStepTwo({ onPrev, onNext }) {
  return (
    <div>
      <StepTitle number="02" title="Jenis Klaim" />

      <div className="space-y-4">
        <label className="mb-2 block text-sm font-bold text-on-surface-variant">
          Pilih Jenis Klaim
        </label>

        <select className="w-full appearance-none rounded border border-outline-variant bg-white p-4 outline-none focus:ring-2 focus:ring-primary/20">
          <option>Meninggal Dunia</option>
          <option>Cacat Tetap Total</option>
          <option>Penarikan Nilai Tunai</option>
          <option>Akhir Masa Polis (Maturity)</option>
        </select>

        <div className="rounded border-l-4 border-secondary bg-primary/5 p-4">
          <p className="text-sm text-primary">
            Pastikan Anda telah membaca syarat dan ketentuan dokumen untuk jenis
            klaim ini.
          </p>
        </div>
      </div>

      <StepActions
        onPrev={onPrev}
        onNext={onNext}
        nextLabel="Lanjut ke Kejadian"
      />
    </div>
  );
}

function ClaimStepThree({ onPrev, onNext }) {
  return (
    <div>
      <StepTitle number="03" title="Detail Kejadian" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="Tanggal Kejadian" type="date" />
        <Field label="Tempat Kejadian" />
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-bold text-on-surface-variant">
            Kronologi Singkat
          </label>
          <textarea className={inputClass} rows="4" />
        </div>
        <Field label="Rumah Sakit (Jika ada)" />
        <Field label="Nama Dokter Pemeriksa" />
      </div>

      <StepActions
        onPrev={onPrev}
        onNext={onNext}
        nextLabel="Lanjut ke Dokumen"
      />
    </div>
  );
}

function ClaimStepFour({ onPrev }) {
  return (
    <div>
      <StepTitle number="04" title="Unggah Dokumen" />

      <label className="group block cursor-pointer rounded-xl border-2 border-dashed border-outline-variant p-10 text-center transition-colors hover:border-primary">
        <span className="material-symbols-outlined mb-4 text-5xl text-outline transition-colors group-hover:text-primary">
          cloud_upload
        </span>

        <p className="mb-1 font-bold text-primary">
          Klik atau seret file ke sini
        </p>

        <p className="text-sm text-on-surface-variant">
          Mendukung PDF, JPG, PNG. Maksimal 5MB per file.
        </p>

        <input className="hidden" multiple type="file" />
      </label>

      <div className="mt-8 space-y-4">
        <label className="flex items-center gap-2">
          <input
            className="rounded text-primary focus:ring-primary"
            type="checkbox"
            required
          />

          <span className="text-sm text-on-surface-variant">
            Saya menyatakan bahwa data yang saya berikan adalah benar dan sesuai
            dengan keadaan sebenarnya.
          </span>
        </label>
      </div>

      <div className="mt-10 flex justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="px-6 py-4 font-bold text-primary"
        >
          Kembali
        </button>

        <button
          type="submit"
          className="premium-shadow rounded bg-secondary px-10 py-4 font-bold text-on-secondary transition-all hover:bg-secondary-fixed"
        >
          Kirim Pengajuan Klaim
        </button>
      </div>
    </div>
  );
}

function StepTitle({ number, title }) {
  return (
    <h3 className="mb-6 flex items-center gap-2 font-bold text-primary">
      <span className="text-secondary">{number}.</span>
      {title}
    </h3>
  );
}

function StepActions({ onPrev, onNext, nextLabel }) {
  return (
    <div className="mt-10 flex justify-between">
      <button
        type="button"
        onClick={onPrev}
        className="px-6 py-4 font-bold text-primary"
      >
        Kembali
      </button>

      <button
        type="button"
        onClick={onNext}
        className="rounded bg-primary px-10 py-4 font-bold text-white transition-all hover:bg-primary-container"
      >
        {nextLabel}
      </button>
    </div>
  );
}

function Field({ label, placeholder, type = "text", className = "" }) {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-bold text-on-surface-variant">
        {label}
      </label>

      <input className={inputClass} placeholder={placeholder} type={type} />
    </div>
  );
}