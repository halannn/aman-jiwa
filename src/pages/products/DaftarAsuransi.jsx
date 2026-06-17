import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const heroImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBfnPpA0qQN161usSyVgtZKsMotMyoYXpIIUhuGQfBuew0dXigcTCaZdv1bSvXo_w3ciuGwO6p1LCgiAZXX5_Vsklpa1rqa44aQVh_u7OHxZ60qCfBlVRez_YShbXLE7CMqwFli1ISWtdCgIHKSymnm1xpFb57_sVPUO7vz_rca4M1O6r1Kp94CI1ZQsjebN3cHFFVyMgQpx3TAa-YXvscZwAJ79hLa-T_ErTX39-YJgZeWCvvwgO68IXvaQdssgvuQ7ENcA7fnDv8";

const driveUrl =
  "https://drive.google.com/drive/u/3/folders/1bDY8q8440X0GRdhzIKvzcXNs3WLr4I56";

const googleFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScNG_cFOl2RGsQkP_031qF2mDGxZqiWkMMAgXDm6DHbSyisQQ/viewform";

const googleFormEmbedUrl = `${googleFormUrl}?embedded=true`;

const documents = [
  {
    name: "Ringkasan Informasi Produk.pdf",
    date: "15 Jan 2024",
    icon: "picture_as_pdf",
    iconClass: "text-red-600",
  },
  {
    name: "Ketentuan Umum Polis.pdf",
    date: "12 Jan 2024",
    icon: "picture_as_pdf",
    iconClass: "text-red-600",
  },
  {
    name: "Formulir Klaim.docx",
    date: "10 Jan 2024",
    icon: "description",
    iconClass: "text-blue-600",
  },
];

const progressSteps = [
  "Isi Data",
  "Dokumen",
  "Verifikasi",
  "Underwriting",
  "Polis Terbit",
];

const statusTimeline = [
  {
    title: "Diterima",
    description: "12 Jan 2024, 10:30 WIB - Aplikasi telah masuk ke sistem.",
    icon: "done",
    active: true,
  },
  {
    title: "Verifikasi",
    description: "Dokumen sedang diverifikasi oleh tim administrasi.",
    icon: "hourglass_empty",
  },
  {
    title: "Underwriting",
    description: "Penilaian risiko kesehatan dan finansial.",
    icon: "clinical_notes",
  },
  {
    title: "Disetujui",
    description: "Keputusan final pengajuan Anda.",
    icon: "thumb_up",
  },
  {
    title: "Polis Terbit",
    description: "E-Polis akan dikirimkan ke email Anda.",
    icon: "description",
  },
];

const inputClass =
  "w-full rounded-lg border border-outline-variant bg-white px-4 py-3 text-sm text-primary outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20";

const selectClass =
  "w-full rounded-lg border border-outline-variant bg-white px-4 py-3 text-sm text-primary outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20";

export default function DaftarAsuransi() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [age, setAge] = useState("");
  const [sumAssured, setSumAssured] = useState("1000000000");
  const [frequency, setFrequency] = useState("Bulanan");

  const premium = useMemo(() => {
    const numericAge = Number(age || 30);
    const assured = Number(sumAssured);

    const basePremium = assured / 2500;
    const ageAdjustment = Math.max(numericAge - 25, 0) * 12000;
    const monthlyPremium = Math.round(basePremium + ageAdjustment);

    if (frequency === "Tahunan") {
      return Math.round(monthlyPremium * 12 * 0.95);
    }

    return monthlyPremium;
  }, [age, sumAssured, frequency]);

  const formattedPremium = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(premium);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccess(true);

    window.setTimeout(() => {
      document
        .getElementById("success-state")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <Navbar />

      {/* <a
        href="https://wa.me/#"
        target="_blank"
        rel="noreferrer"
        className="fixed right-6 bottom-6 z-[100] hidden items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white shadow-2xl transition-all hover:scale-105 md:flex"
      >
        <span className="material-symbols-outlined">chat</span>
        <span>Hubungi Konsultan Asuransi</span>
      </a> */}

      <main className="pt-20">
        <section className="relative flex min-h-[700px] items-center overflow-hidden bg-primary-container">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImageUrl}
              alt="Keluarga lintas generasi dalam suasana hangat"
              className="h-full w-full object-cover opacity-30"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-12 md:px-margin-desktop">
            <div className="flex flex-col justify-center md:col-span-8">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-secondary/30 bg-secondary-container/20 px-3 py-1 text-secondary-fixed">
                <span className="material-symbols-outlined text-[18px]">
                  verified_user
                </span>

                <span className="font-label-sm text-label-sm uppercase tracking-widest">
                  Berizin & Diawasi oleh OJK
                </span>
              </div>

              <h1 className="font-display-lg text-display-lg mb-6 leading-tight text-surface-container-lowest">
                Mulai Lindungi Masa Depan{" "}
                <br className="hidden md:block" />
                Keluarga Anda Hari Ini
              </h1>

              <p className="font-body-lg text-body-lg mb-10 max-w-2xl text-primary-fixed opacity-90">
                AJ Lifelong Assurance memberikan perlindungan jiwa hingga usia
                99 tahun dengan manfaat meninggal dunia, kecelakaan, cacat
                tetap total, serta nilai tunai yang terus berkembang.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="#registration"
                  className="gold-glow rounded-lg bg-secondary-container px-10 py-4 text-center text-lg font-bold text-on-secondary-container transition-all hover:-translate-y-1 active:scale-95"
                >
                  Daftar Sekarang
                </a>

                <a
                  href="#calculator"
                  className="rounded-lg border border-secondary-fixed px-10 py-4 text-center text-lg font-bold text-secondary-fixed transition-all hover:bg-secondary-fixed hover:text-primary"
                >
                  Hitung Premi
                </a>

                {/* <a
                  href="#digital-document-center"
                  className="flex items-center gap-2 font-bold text-surface-bright hover:underline"
                >
                  Konsultasi Gratis
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </section>

        <section
          id="digital-document-center"
          className="bg-surface py-24"
        >
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="mb-16 text-center">
              <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">
                PUSAT DOKUMEN DIGITAL
              </h2>

              <p className="mx-auto max-w-2xl text-on-surface-variant">
                Akses cepat ke seluruh dokumen resmi dan formulir layanan Aman
                Jiwa.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="flex h-full flex-col justify-between rounded-2xl bg-primary-container p-8 text-surface-bright shadow-xl">
                  <div>
                    <h3 className="font-headline-md text-headline-md mb-6 text-secondary-fixed">
                      Dokumen Polis AJ Lifelong Assurance
                    </h3>

                    <p className="font-body-md mb-8 text-primary-fixed-dim">
                      Dokumen polis lengkap yang berisi hak, kewajiban, manfaat,
                      risiko, pengecualian, prosedur klaim, dan ketentuan
                      lainnya yang berlaku bagi pemegang polis.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <a
                      href={driveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg bg-secondary-container px-8 py-3 font-bold text-on-secondary-container transition-colors hover:bg-secondary-fixed"
                    >
                      <span className="material-symbols-outlined">
                        visibility
                      </span>
                      Lihat Dokumen
                    </a>
{/* 
                    <a
                      href={driveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg border border-secondary-fixed px-8 py-3 font-bold text-secondary-fixed transition-all hover:bg-secondary-fixed hover:text-primary"
                    >
                      <span className="material-symbols-outlined">
                        download
                      </span>
                      Download PDF
                    </a> */}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="overflow-hidden rounded-2xl border border-outline-variant bg-white shadow-xl">
                  <div className="flex items-center justify-between border-b border-outline-variant bg-surface p-6">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">
                        folder_shared
                      </span>

                      <span className="font-bold text-primary">
                        Google Drive Integration
                      </span>
                    </div>

                    <a
                      href={driveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-sm font-bold text-secondary hover:underline"
                    >
                      Buka di Drive
                      <span className="material-symbols-outlined text-sm">
                        open_in_new
                      </span>
                    </a>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                      <thead>
                        <tr className="bg-surface-container text-xs uppercase tracking-wider text-on-surface-variant">
                          <th className="px-6 py-4 font-bold">Nama File</th>
                          <th className="px-6 py-4 font-bold">
                            Tanggal Upload
                          </th>
                          <th className="px-6 py-4 text-right font-bold">
                            Aksi
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-outline-variant">
                        {documents.map((document) => (
                          <tr
                            key={document.name}
                            className="transition-colors hover:bg-surface-container-low"
                          >
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <span
                                  className={`material-symbols-outlined ${document.iconClass}`}
                                >
                                  {document.icon}
                                </span>

                                <span className="font-medium text-primary">
                                  {document.name}
                                </span>
                              </div>
                            </td>

                            <td className="px-6 py-4 text-sm text-on-surface-variant">
                              {document.date}
                            </td>

                            <td className="px-6 py-4 text-right">
                              <div className="flex justify-end gap-2">
                                <a
                                  href={driveUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="rounded p-2 text-primary transition-colors hover:bg-primary/10"
                                  aria-label={`Lihat ${document.name}`}
                                >
                                  <span className="material-symbols-outlined">
                                    visibility
                                  </span>
                                </a>

                                <a
                                  href={driveUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="rounded p-2 text-primary transition-colors hover:bg-primary/10"
                                  aria-label={`Download ${document.name}`}
                                >
                                  <span className="material-symbols-outlined">
                                    download
                                  </span>
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="calculator"
          className="bg-surface-container-low py-24"
        >
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="rounded-2xl border border-outline-variant bg-surface-bright p-8 shadow-xl md:p-12">
              <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h2 className="font-headline-lg text-headline-lg mb-2 text-primary">
                    Kalkulator Premi Cepat
                  </h2>

                  <p className="text-on-surface-variant">
                    Estimasi biaya perlindungan Anda hanya dalam beberapa detik.
                  </p>
                </div>

                <div className="flex items-center gap-2 font-bold text-secondary">
                  <span className="material-symbols-outlined">info</span>
                  <span className="text-sm">Hasil bersifat estimasi awal</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-primary">
                    Usia Tertanggung
                  </label>

                  <input
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                    className={inputClass}
                    placeholder="Contoh: 30"
                    type="number"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-primary">
                    Uang Pertanggungan
                  </label>

                  <select
                    value={sumAssured}
                    onChange={(event) => setSumAssured(event.target.value)}
                    className={selectClass}
                  >
                    <option value="500000000">Rp 500.000.000</option>
                    <option value="1000000000">Rp 1.000.000.000</option>
                    <option value="2500000000">Rp 2.500.000.000</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-primary">
                    Frekuensi Bayar
                  </label>

                  <select
                    value={frequency}
                    onChange={(event) => setFrequency(event.target.value)}
                    className={selectClass}
                  >
                    <option>Bulanan</option>
                    <option>Tahunan</option>
                  </select>
                </div>

                <div className="flex flex-col justify-end">
                  <a
                    href="#registration"
                    className="w-full rounded-lg bg-primary py-3 text-center font-bold text-on-primary transition-colors hover:bg-tertiary"
                  >
                    Lanjut Daftar
                  </a>
                </div>
              </div>

              <div className="mt-12 flex flex-col items-center justify-between gap-8 rounded-xl bg-primary-container p-8 text-surface-bright md:flex-row">
                <div>
                  <span className="text-sm font-bold uppercase tracking-widest text-primary-fixed-dim">
                    Estimasi Premi Anda
                  </span>

                  <div className="font-display-lg mt-2 text-4xl text-secondary-fixed md:text-5xl">
                    {formattedPremium}
                    <span className="text-xl font-normal">
                      /{frequency === "Bulanan" ? "bulan" : "tahun"}
                    </span>
                  </div>
                </div>

                <a
                  href="#registration"
                  className="rounded-lg bg-secondary-container px-8 py-4 text-lg font-bold text-on-secondary-container transition-transform hover:scale-105"
                >
                  Lanjutkan ke Pendaftaran
                </a>
              </div>
            </div>
          </div>
        </section>

        {!showSuccess && (
          <section
            id="registration"
            className="bg-surface py-24"
          >
            <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
              <div className="mb-16 text-center">
                <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">
                  Pendaftaran Online Mandiri
                </h2>

                <p className="mx-auto max-w-2xl text-on-surface-variant">
                  Lengkapi data Anda dengan mudah melalui sistem digital
                  terenkripsi kami.
                </p>
              </div>

              <ProgressSteps />

              <div className="overflow-hidden rounded-2xl border border-outline-variant bg-white shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="border-r border-outline-variant p-8 md:p-12 lg:col-span-2">
                    <form className="space-y-10" onSubmit={handleSubmit}>
                      <FormSection
                        number="1"
                        title="Data Calon Pemegang Polis"
                      >
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <Field
                            label="Nama Lengkap (Sesuai KTP)"
                            placeholder="Nama Lengkap"
                          />
                          <Field
                            label="Nomor NIK KTP"
                            placeholder="16 Digit NIK"
                          />
                          <Field
                            label="Email Aktif"
                            placeholder="email@contoh.com"
                            type="email"
                          />
                          <Field
                            label="Nomor WhatsApp"
                            placeholder="0812..."
                            type="tel"
                          />
                        </div>
                      </FormSection>

                      <FormSection number="2" title="Data Calon Tertanggung">
                        <label className="mb-6 flex items-center gap-4 rounded-lg bg-surface-container-low p-4 text-sm font-medium">
                          <input
                            className="rounded text-secondary focus:ring-secondary"
                            type="checkbox"
                          />
                          Tertanggung adalah Pemegang Polis
                        </label>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <Field
                            label="Nama Tertanggung"
                            placeholder="Nama Tertanggung"
                          />

                          <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold text-on-surface-variant">
                              Hubungan dengan Pemegang
                            </label>

                            <select className={selectClass}>
                              <option>Diri Sendiri</option>
                              <option>Istri / Suami</option>
                              <option>Anak</option>
                              <option>Orang Tua</option>
                            </select>
                          </div>
                        </div>
                      </FormSection>

                      <FormSection number="3" title="Pernyataan Kesehatan">
                        <div className="space-y-4">
                          <HealthQuestion question="Apakah Anda pernah menderita penyakit kritis dalam 5 tahun terakhir?" />
                          <HealthQuestion question="Apakah Anda merokok secara aktif dalam 12 bulan terakhir?" />
                        </div>
                      </FormSection>

                      <FormSection number="4" title="Upload Dokumen">
                        <div className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-outline-variant p-10 text-center transition-colors hover:border-secondary">
                          <span className="material-symbols-outlined mb-4 text-5xl text-outline transition-colors group-hover:text-secondary">
                            cloud_upload
                          </span>

                          <p className="mb-1 font-bold text-primary">
                            Klik atau seret foto KTP Anda ke sini
                          </p>

                          <p className="text-xs text-on-surface-variant">
                            Maksimal 5MB, format JPG/PNG
                          </p>
                        </div>
                      </FormSection>

                      <div className="border-t border-outline-variant pt-10">
                        <label className="mb-8 flex items-start gap-3">
                          <input
                            className="mt-1 rounded text-secondary focus:ring-secondary"
                            type="checkbox"
                            required
                          />

                          <span className="text-sm text-on-surface-variant">
                            Saya menyatakan bahwa seluruh data yang diisi adalah
                            benar dan menyetujui{" "}
                            <a
                              className="font-bold text-primary underline"
                              href="#"
                            >
                              Syarat & Ketentuan
                            </a>{" "}
                            serta{" "}
                            <a
                              className="font-bold text-primary underline"
                              href="#"
                            >
                              Kebijakan Privasi
                            </a>{" "}
                            Aman Jiwa.
                          </span>
                        </label>

                        <button
                          type="submit"
                          className="w-full rounded-lg bg-primary py-4 text-lg font-bold text-on-primary shadow-lg transition-colors hover:bg-tertiary active:scale-[0.98]"
                        >
                          Ajukan Kepesertaan
                        </button>
                      </div>
                    </form>
                  </div>

                  <RegistrationSummary />
                </div>
              </div>
            </div>
          </section>
        )}

        {showSuccess && <SuccessState />}

        <section className="bg-primary-container py-24 text-surface-bright">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
              <div>
                <h2 className="font-headline-lg text-headline-lg mb-6">
                  Metode Alternatif: Google Form
                </h2>

                <p className="mb-10 text-lg text-primary-fixed-dim">
                  Lebih nyaman menggunakan antarmuka Google? Kami juga melayani
                  pendaftaran melalui Google Form resmi Aman Jiwa.
                </p>

                <ul className="mb-10 space-y-4">
                  {["Sinkronisasi data otomatis", "Aman dan Terenkripsi"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary-fixed">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>

                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-lg bg-secondary-container px-10 py-4 text-lg font-bold text-on-secondary-container transition-colors hover:bg-secondary-fixed"
                >
                  Buka Google Form
                </a>
              </div>

              <div className="h-[600px] overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">
                <iframe
                  title="Google Form Pendaftaran Aman Jiwa"
                  src={googleFormEmbedUrl}
                  width="100%"
                  height="100%"
                  className="border-0"
                >
                  Memuat…
                </iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-24">
          <div className="mx-auto max-w-3xl px-margin-mobile md:px-margin-desktop">
            <div className="mb-16 text-center">
              <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">
                Cek Status Pengajuan
              </h2>

              <p className="text-on-surface-variant">
                Pantau proses aplikasi asuransi Anda secara real-time.
              </p>
            </div>

            <div className="mb-16 rounded-2xl border border-outline-variant bg-surface-bright p-8 shadow-xl">
              <form className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <input
                  className={inputClass}
                  placeholder="Nomor Referensi"
                  type="text"
                />

                <input
                  className={inputClass}
                  placeholder="Email Terdaftar"
                  type="email"
                />

                <button className="rounded bg-primary px-6 py-3 font-bold text-on-primary transition-colors hover:bg-tertiary">
                  Lacak Status
                </button>
              </form>
            </div>

            <div className="space-y-12">
              {statusTimeline.map((item, index) => (
                <div
                  key={item.title}
                  className={`relative flex items-center gap-6 ${
                    item.active ? "" : "opacity-50"
                  }`}
                >
                  {index < statusTimeline.length - 1 && (
                    <div
                      className={`absolute left-[20px] top-[40px] h-[60px] w-0.5 ${
                        item.active ? "bg-secondary" : "bg-outline-variant"
                      }`}
                    />
                  )}

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      item.active
                        ? "bg-secondary text-on-secondary"
                        : "bg-outline-variant text-on-surface-variant"
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">
                      {item.icon}
                    </span>
                  </div>

                  <div>
                    <h5 className="font-bold text-primary">{item.title}</h5>
                    <p className="text-xs text-on-surface-variant">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-outline-variant bg-surface py-8">
          <div className="mx-auto flex max-w-container-max flex-wrap items-center justify-center gap-8 px-margin-mobile opacity-60 grayscale transition-all hover:grayscale-0 md:justify-between md:px-margin-desktop">
            <span className="font-bold tracking-widest text-primary">
              AAUI MEMBER
            </span>

            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                security
              </span>

              <span className="font-bold text-primary">
                ISO 27001 CERTIFIED
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                verified_user
              </span>

              <span className="max-w-[150px] text-sm font-semibold leading-tight">
                Terdaftar & Diawasi oleh OJK
              </span>
            </div>

            <span className="font-bold tracking-widest text-primary">
              LPS GUARANTEED
            </span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ProgressSteps() {
  return (
    <div className="mb-16 overflow-x-auto">
      <div className="relative flex min-w-[720px] items-center justify-between">
        <div className="absolute top-1/2 left-0 -z-10 h-1 w-full -translate-y-1/2 bg-surface-container-highest" />
        <div className="absolute top-1/2 left-0 -z-10 h-1 w-1/4 -translate-y-1/2 bg-secondary" />

        {progressSteps.map((step, index) => {
          const isActive = index === 0;

          return (
            <div
              key={step}
              className="flex flex-col items-center gap-2 bg-surface px-4"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-bold ${
                  isActive
                    ? "border-secondary bg-secondary text-on-secondary"
                    : "border-outline-variant bg-surface text-on-surface-variant"
                }`}
              >
                {index + 1}
              </div>

              <span
                className={`text-xs font-bold uppercase ${
                  isActive ? "text-primary" : "text-on-surface-variant"
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FormSection({ number, title, children }) {
  return (
    <div>
      <h3 className="font-headline-md text-headline-md mb-6 flex items-center gap-3 text-primary">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-on-primary">
          {number}
        </span>
        {title}
      </h3>

      {children}
    </div>
  );
}

function Field({ label, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-on-surface-variant">
        {label}
      </label>

      <input className={inputClass} placeholder={placeholder} type={type} />
    </div>
  );
}

function HealthQuestion({ question }) {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-lg border border-outline-variant p-4 md:flex-row md:items-start md:gap-6">
      <p className="text-sm">{question}</p>

      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input className="text-secondary" name={question} type="radio" />
          Ya
        </label>

        <label className="flex items-center gap-2">
          <input className="text-secondary" name={question} type="radio" />
          Tidak
        </label>
      </div>
    </div>
  );
}

function RegistrationSummary() {
  return (
    <aside className="bg-surface-container-low p-8 md:p-12">
      <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-primary">
        Ringkasan Pengajuan
      </h4>

      <div className="space-y-6">
        <SummaryRow label="Produk" value="AJ Lifelong" />
        <SummaryRow label="Plan" value="Platinum" />
        <SummaryRow label="UP" value="Rp 1 Miliar" />

        <div className="rounded-lg border border-secondary-container bg-secondary-container/20 p-4">
          <div className="mb-1 text-xs font-bold uppercase tracking-widest text-secondary">
            Estimasi Premi Tahunan
          </div>

          <div className="text-2xl font-bold text-primary">Rp 5.400.000</div>
        </div>

        <div className="pt-8">
          <h5 className="mb-4 text-sm font-bold uppercase text-primary">
            Butuh Bantuan?
          </h5>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">
                support_agent
              </span>

              <span className="text-sm">Live Chat (08.00 - 17.00)</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">
                mail
              </span>

              <span className="text-sm">help@amanjiwa.co.id</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between border-b border-outline-variant pb-4">
      <span className="text-on-surface-variant">{label}</span>
      <span className="font-bold text-primary">{value}</span>
    </div>
  );
}

function SuccessState() {
  return (
    <section id="success-state" className="py-24">
      <div className="mx-auto max-w-md px-6 text-center">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600">
          <span
            className="material-symbols-outlined text-5xl"
            style={{
              fontVariationSettings:
                "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            }}
          >
            check_circle
          </span>
        </div>

        <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">
          Pengajuan Berhasil!
        </h2>

        <p className="mb-8 text-on-surface-variant">
          Terima kasih atas kepercayaan Anda. Pengajuan Anda sedang kami proses.
        </p>

        <div className="mb-10 rounded-xl border border-outline-variant bg-surface-container p-6">
          <span className="mb-2 block text-xs font-bold uppercase text-on-surface-variant">
            Nomor Referensi
          </span>

          <div className="font-mono text-2xl font-bold tracking-widest text-primary">
            AJI-REG-2026-000001
          </div>
        </div>

        <a
          href="#status"
          className="block w-full rounded-lg bg-primary py-4 font-bold text-on-primary"
        >
          Cek Status Pengajuan
        </a>
      </div>
    </section>
  );
}