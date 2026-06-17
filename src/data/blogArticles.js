export const categories = [
  "All Topics",
  "Edukasi Asuransi Jiwa",
  "Perencanaan Keuangan",
  "Perlindungan Keluarga",
  "Investasi dan Warisan",
  "Tips Klaim Asuransi",
];

const categoryImageMap = {
  "Edukasi Asuransi Jiwa":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC6tiYZi0IyxrL754laOHv_jxJ-kvOSys94TUQ1RgrlLuPhImXh2DWKIeX2y7miWuwi7PluDxZiy1jLggeatXd9PT6juyWcdBDy7_2q5xCtpGqeIAFl90xTEnm-A_1oWx3DgIUfoN5jDwA1bEaqeTbtOMvEGOSE5I2qdRyHo67iJYgwZWYXoYBB_UIFDtG54mKKatZJPsrZryGjzcfo_9CnTXN3njtt0CUOA7IssAhRwMzMpGrZMqs8bq3QX5enZiNJbASyrcxHTsY",

  "Perencanaan Keuangan":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAvhzrmtEH6CJI_GiE_pUSoJiC2EE0u9U-_Z95_V8o74_vxRrL-IvaCiDcdvH9zINLQIINh75CMWoYQH3VaR7xqtiHAkdDlSEPwzKx-zm7YgoHbpCpfpb6wyVDxf4olGcrJA8NyGWm7s0X611B2z807V97V9adEm3bBtGOYh4MBXR0vTfFxHQaFBWfr-McUYS5fhFwgMLR9h0zT0zS2MGV3AMu4FoYqxD155YDMmzGnRU-zN0X_vMnEvsaHZFZjUEtSKDi-4XK9Q-w",

  "Perlindungan Keluarga":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC5ho2w1oAp4ZgiH52ds7O6Z1c3Rw11am8iJvT236uBKvhA7d0nd5VDccbR8IZPc7qEQSQGiXd24WZjUynoCy_6VCogtNgp1dkDZgCEyMQkq9c4xeqUpDk-m4JVs2hsZc6dV_8kMmNpYi1wM7oBUWlKk42Qnqoo_6ccFkM4y0dqr1TwTLSk1Aeehp0gXeY2s5wV92Ys2c5GeGEEQLUEJbaMLwBFyr-A_moMy_1EiAI4HPz6i1MRFzkwzlp6GH6OvBpW-cMJQ7P8wfc",

  "Investasi dan Warisan":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC5ho2w1oAp4ZgiH52ds7O6Z1c3Rw11am8iJvT236uBKvhA7d0nd5VDccbR8IZPc7qEQSQGiXd24WZjUynoCy_6VCogtNgp1dkDZgCEyMQkq9c4xeqUpDk-m4JVs2hsZc6dV_8kMmNpYi1wM7oBUWlKk42Qnqoo_6ccFkM4y0dqr1TwTLSk1Aeehp0gXeY2s5wV92Ys2c5GeGEEQLUEJbaMLwBFyr-A_moMy_1EiAI4HPz6i1MRFzkwzlp6GH6OvBpW-cMJQ7P8wfc",

  "Tips Klaim Asuransi":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC6tiYZi0IyxrL754laOHv_jxJ-kvOSys94TUQ1RgrlLuPhImXh2DWKIeX2y7miWuwi7PluDxZiy1jLggeatXd9PT6juyWcdBDy7_2q5xCtpGqeIAFl90xTEnm-A_1oWx3DgIUfoN5jDwA1bEaqeTbtOMvEGOSE5I2qdRyHo67iJYgwZWYXoYBB_UIFDtG54mKKatZJPsrZryGjzcfo_9CnTXN3njtt0CUOA7IssAhRwMzMpGrZMqs8bq3QX5enZiNJbASyrcxHTsY",
};

const articlesByCategory = {
  "Edukasi Asuransi Jiwa": [
    {
      title: "Apa Itu Asuransi Jiwa dan Mengapa Penting?",
      date: "14 Okt 2024",
      readTime: "5 min read",
      excerpt:
        "Memahami dasar asuransi jiwa, manfaat utama, dan bagaimana perlindungan ini membantu keluarga menghadapi risiko finansial.",
      author: "Admin Aman Jiwa",
      role: "Insurance Educator",
      initials: "AJ",
    },
    {
      title: "Perbedaan Asuransi Jiwa Tradisional dan Unit Link",
      date: "11 Okt 2024",
      readTime: "7 min read",
      excerpt:
        "Kenali perbedaan karakteristik produk asuransi jiwa tradisional dan unit link agar Anda dapat memilih sesuai kebutuhan.",
      author: "Dimas Pratama",
      role: "Product Specialist",
      initials: "DP",
    },
    {
      title: "Istilah Penting dalam Polis Asuransi Jiwa",
      date: "07 Okt 2024",
      readTime: "6 min read",
      excerpt:
        "Pelajari istilah seperti premi, uang pertanggungan, tertanggung, pemegang polis, ahli waris, dan nilai tunai.",
      author: "Nadia Lestari",
      role: "Policy Advisor",
      initials: "NL",
    },
    {
      title: "Cara Menentukan Uang Pertanggungan yang Ideal",
      date: "02 Okt 2024",
      readTime: "8 min read",
      excerpt:
        "Uang pertanggungan perlu disesuaikan dengan tanggungan, utang, kebutuhan pendidikan, dan rencana hidup keluarga.",
      author: "Admin Aman Jiwa",
      role: "Senior Financial Consultant",
      initials: "AJ",
    },
    {
      title: "Kapan Waktu Terbaik Membeli Asuransi Jiwa?",
      date: "28 Sep 2024",
      readTime: "4 min read",
      excerpt:
        "Semakin awal Anda memulai, semakin besar peluang mendapatkan perlindungan dengan premi yang lebih efisien.",
      author: "Rizal Mahendra",
      role: "Life Planner",
      initials: "RM",
    },
    {
      title: "Kesalahan Umum Saat Memilih Asuransi Jiwa",
      date: "22 Sep 2024",
      readTime: "6 min read",
      excerpt:
        "Hindari memilih produk hanya karena premi murah tanpa memahami manfaat, pengecualian, dan kebutuhan keluarga.",
      author: "Sari Wulandari",
      role: "Customer Education Lead",
      initials: "SW",
    },
  ],

  "Perencanaan Keuangan": [
    {
      title: "Mengapa Perencanaan Keuangan Sejak Dini Adalah Kunci?",
      date: "12 Okt 2024",
      readTime: "6 min read",
      excerpt:
        "Membangun kekayaan dan keamanan finansial tidak terjadi semalam. Pelajari langkah strategis untuk mengamankan masa depan.",
      author: "Admin Aman Jiwa",
      role: "Senior Financial Consultant",
      initials: "AJ",
    },
    {
      title: "Cara Membuat Dana Darurat Keluarga",
      date: "09 Okt 2024",
      readTime: "5 min read",
      excerpt:
        "Dana darurat membantu keluarga tetap stabil saat menghadapi risiko seperti kehilangan penghasilan atau kebutuhan mendadak.",
      author: "Raka Prasetyo",
      role: "Financial Planner",
      initials: "RP",
    },
    {
      title: "Prioritas Keuangan untuk Pasangan Muda",
      date: "05 Okt 2024",
      readTime: "6 min read",
      excerpt:
        "Mulai dari anggaran bulanan, dana darurat, proteksi jiwa, hingga rencana pendidikan anak di masa depan.",
      author: "Maya Putri",
      role: "Family Finance Advisor",
      initials: "MP",
    },
    {
      title: "Mengatur Keuangan Setelah Memiliki Anak",
      date: "30 Sep 2024",
      readTime: "7 min read",
      excerpt:
        "Kehadiran anak mengubah prioritas keuangan keluarga. Pelajari cara menyesuaikan anggaran dan perlindungan.",
      author: "Fauzan Hakim",
      role: "Financial Consultant",
      initials: "FH",
    },
    {
      title: "Cara Menyeimbangkan Tabungan, Investasi, dan Proteksi",
      date: "25 Sep 2024",
      readTime: "8 min read",
      excerpt:
        "Keuangan sehat membutuhkan kombinasi tabungan likuid, investasi jangka panjang, dan proteksi risiko yang memadai.",
      author: "Rini Permata",
      role: "Wealth Educator",
      initials: "RP",
    },
    {
      title: "Checklist Keuangan Tahunan untuk Keluarga",
      date: "18 Sep 2024",
      readTime: "5 min read",
      excerpt:
        "Evaluasi cashflow, utang, proteksi, investasi, dan tujuan keuangan keluarga setidaknya satu kali dalam setahun.",
      author: "Sastra Budiman",
      role: "Legacy Planner",
      initials: "SB",
    },
  ],

  "Perlindungan Keluarga": [
    {
      title: "Warisan Berharga: Lebih Dari Sekadar Angka",
      date: "01 Okt 2024",
      readTime: "8 min read",
      excerpt:
        "Bagaimana asuransi jiwa membantu Anda mewariskan nilai keluarga dan keamanan finansial bagi generasi berikutnya.",
      author: "Sastra Budiman",
      role: "Legacy Planner",
      initials: "SB",
    },
    {
      title: "Melindungi Keluarga dari Risiko Kehilangan Penghasilan",
      date: "27 Sep 2024",
      readTime: "6 min read",
      excerpt:
        "Risiko kehilangan pencari nafkah utama dapat berdampak besar. Proteksi jiwa membantu menjaga stabilitas keluarga.",
      author: "Dewi Kartika",
      role: "Family Protection Advisor",
      initials: "DK",
    },
    {
      title: "Rencana Perlindungan untuk Orang Tua Muda",
      date: "24 Sep 2024",
      readTime: "5 min read",
      excerpt:
        "Orang tua muda perlu menyiapkan perlindungan untuk pendidikan anak, cicilan rumah, dan kebutuhan keluarga.",
      author: "Andi Saputra",
      role: "Insurance Planner",
      initials: "AS",
    },
    {
      title: "Proteksi Finansial untuk Sandwich Generation",
      date: "19 Sep 2024",
      readTime: "7 min read",
      excerpt:
        "Bagi generasi yang menanggung orang tua dan anak, perlindungan jiwa menjadi bagian penting dari strategi keuangan.",
      author: "Nina Harahap",
      role: "Financial Educator",
      initials: "NH",
    },
    {
      title: "Menyiapkan Masa Depan Anak dengan Perlindungan Jiwa",
      date: "14 Sep 2024",
      readTime: "6 min read",
      excerpt:
        "Proteksi jiwa membantu memastikan rencana pendidikan anak tetap berjalan meskipun terjadi risiko pada orang tua.",
      author: "Admin Aman Jiwa",
      role: "Customer Education Lead",
      initials: "AJ",
    },
    {
      title: "Cara Membicarakan Asuransi dengan Keluarga",
      date: "10 Sep 2024",
      readTime: "4 min read",
      excerpt:
        "Diskusi tentang proteksi sering terasa sensitif. Mulailah dari tujuan keluarga, bukan dari rasa takut.",
      author: "Maya Putri",
      role: "Family Finance Advisor",
      initials: "MP",
    },
  ],

  "Investasi dan Warisan": [
    {
      title: "Mengenal Konsep Warisan Finansial yang Terencana",
      date: "29 Sep 2024",
      readTime: "7 min read",
      excerpt:
        "Warisan yang baik bukan hanya jumlah aset, tetapi juga struktur, kepastian, dan kejelasan penerima manfaat.",
      author: "Sastra Budiman",
      role: "Legacy Planner",
      initials: "SB",
    },
    {
      title: "Asuransi Jiwa sebagai Bagian dari Perencanaan Warisan",
      date: "23 Sep 2024",
      readTime: "6 min read",
      excerpt:
        "Manfaat asuransi jiwa dapat membantu keluarga memiliki dana likuid saat proses pengalihan aset berlangsung.",
      author: "Dimas Pratama",
      role: "Product Specialist",
      initials: "DP",
    },
    {
      title: "Perbedaan Menabung, Investasi, dan Proteksi",
      date: "20 Sep 2024",
      readTime: "5 min read",
      excerpt:
        "Ketiganya memiliki fungsi berbeda. Menabung untuk likuiditas, investasi untuk pertumbuhan, proteksi untuk risiko.",
      author: "Raka Prasetyo",
      role: "Financial Planner",
      initials: "RP",
    },
    {
      title: "Strategi Menjaga Aset Keluarga dalam Jangka Panjang",
      date: "16 Sep 2024",
      readTime: "8 min read",
      excerpt:
        "Aset keluarga perlu dilindungi dari risiko kesehatan, kehilangan penghasilan, inflasi, dan keputusan finansial yang keliru.",
      author: "Fauzan Hakim",
      role: "Financial Consultant",
      initials: "FH",
    },
    {
      title: "Membangun Legacy Planning untuk Generasi Berikutnya",
      date: "12 Sep 2024",
      readTime: "7 min read",
      excerpt:
        "Legacy planning membantu keluarga mewariskan aset, nilai, dan arah finansial dengan lebih tertata.",
      author: "Nadia Lestari",
      role: "Policy Advisor",
      initials: "NL",
    },
    {
      title: "Mengapa Nilai Tunai Bisa Menjadi Cadangan Finansial?",
      date: "08 Sep 2024",
      readTime: "6 min read",
      excerpt:
        "Pada produk tertentu, nilai tunai dapat menjadi sumber dana yang membantu fleksibilitas keuangan jangka panjang.",
      author: "Rini Permata",
      role: "Wealth Educator",
      initials: "RP",
    },
  ],

  "Tips Klaim Asuransi": [
    {
      title: "Panduan Lengkap Klaim Asuransi Tanpa Hambatan",
      date: "08 Okt 2024",
      readTime: "4 min read",
      excerpt:
        "Klaim asuransi tidak harus rumit. Pelajari kesalahan umum yang sering terjadi dan cara menghindarinya.",
      author: "Rini Permata",
      role: "Claims Specialist",
      initials: "RP",
    },
    {
      title: "Dokumen yang Perlu Disiapkan Saat Mengajukan Klaim",
      date: "04 Okt 2024",
      readTime: "5 min read",
      excerpt:
        "Persiapan dokumen yang lengkap membantu proses klaim berjalan lebih cepat dan mengurangi risiko penundaan.",
      author: "Bima Santoso",
      role: "Claims Officer",
      initials: "BS",
    },
    {
      title: "Cara Melaporkan Kejadian Klaim dengan Benar",
      date: "29 Sep 2024",
      readTime: "4 min read",
      excerpt:
        "Pelaporan awal yang jelas membantu tim klaim memahami kronologi dan menentukan dokumen pendukung yang dibutuhkan.",
      author: "Rini Permata",
      role: "Claims Specialist",
      initials: "RP",
    },
    {
      title: "Mengapa Klaim Bisa Tertunda?",
      date: "21 Sep 2024",
      readTime: "6 min read",
      excerpt:
        "Klaim dapat tertunda karena dokumen tidak lengkap, data tidak sesuai, atau diperlukan investigasi tambahan.",
      author: "Dewi Kartika",
      role: "Claims Analyst",
      initials: "DK",
    },
    {
      title: "Tips Mengisi Formulir Klaim agar Tidak Salah",
      date: "17 Sep 2024",
      readTime: "5 min read",
      excerpt:
        "Perhatikan nomor polis, data tertanggung, kronologi, tanggal kejadian, dan tanda tangan agar formulir valid.",
      author: "Bima Santoso",
      role: "Claims Officer",
      initials: "BS",
    },
    {
      title: "Apa yang Terjadi Setelah Klaim Diajukan?",
      date: "12 Sep 2024",
      readTime: "5 min read",
      excerpt:
        "Setelah klaim masuk, tim akan memeriksa dokumen, melakukan verifikasi, menilai kelayakan, lalu memberikan keputusan.",
      author: "Admin Aman Jiwa",
      role: "Customer Education Lead",
      initials: "AJ",
    },
  ],
};

const unsplash = (photoId) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=80`;

const articleImagesByTitle = {
  // Edukasi Asuransi Jiwa
  "Apa Itu Asuransi Jiwa dan Mengapa Penting?": unsplash(
    "photo-1450101499163-c8848c66ca85",
  ),
  "Perbedaan Asuransi Jiwa Tradisional dan Unit Link": unsplash(
    "photo-1560472354-b33ff0c44a43",
  ),
  "Istilah Penting dalam Polis Asuransi Jiwa": unsplash(
    "photo-1586281380349-632531db7ed4",
  ),
  "Cara Menentukan Uang Pertanggungan yang Ideal": unsplash(
    "photo-1554224155-6726b3ff858f",
  ),
  "Kapan Waktu Terbaik Membeli Asuransi Jiwa?": unsplash(
    "photo-1507679799987-c73779587ccf",
  ),
  "Kesalahan Umum Saat Memilih Asuransi Jiwa": unsplash(
    "photo-1551836022-d5d88e9218df",
  ),

  // Perencanaan Keuangan
  "Mengapa Perencanaan Keuangan Sejak Dini Adalah Kunci?": unsplash(
    "photo-1460925895917-afdab827c52f",
  ),
  "Cara Membuat Dana Darurat Keluarga": unsplash(
    "photo-1554224154-26032ffc0d07",
  ),
  "Prioritas Keuangan untuk Pasangan Muda": unsplash(
    "photo-1522202176988-66273c2fd55f",
  ),
  "Mengatur Keuangan Setelah Memiliki Anak": unsplash(
    "photo-1511895426328-dc8714191300",
  ),
  "Cara Menyeimbangkan Tabungan, Investasi, dan Proteksi": unsplash(
    "photo-1504384308090-c894fdcc538d",
  ),
  "Checklist Keuangan Tahunan untuk Keluarga": unsplash(
    "photo-1454165804606-c3d57bc86b40",
  ),

  // Perlindungan Keluarga
  "Warisan Berharga: Lebih Dari Sekadar Angka": unsplash(
    "photo-1500530855697-b586d89ba3ee",
  ),
  "Melindungi Keluarga dari Risiko Kehilangan Penghasilan": unsplash(
    "photo-1497366754035-f200968a6e72",
  ),
  "Rencana Perlindungan untuk Orang Tua Muda": unsplash(
    "photo-1609220136736-443140cffec6",
  ),
  "Proteksi Finansial untuk Sandwich Generation": unsplash(
    "photo-1529156069898-49953e39b3ac",
  ),
  "Menyiapkan Masa Depan Anak dengan Perlindungan Jiwa": unsplash(
    "photo-1503454537195-1dcabb73ffb9",
  ),
  "Cara Membicarakan Asuransi dengan Keluarga": unsplash(
    "photo-1543269865-cbf427effbad",
  ),

  // Investasi dan Warisan
  "Mengenal Konsep Warisan Finansial yang Terencana": unsplash(
    "photo-1521791136064-7986c2920216",
  ),
  "Asuransi Jiwa sebagai Bagian dari Perencanaan Warisan": unsplash(
    "photo-1559526324-593bc073d938",
  ),
  "Perbedaan Menabung, Investasi, dan Proteksi": unsplash(
    "photo-1579621970563-ebec7560ff3e",
  ),
  "Strategi Menjaga Aset Keluarga dalam Jangka Panjang": unsplash(
    "photo-1565373677928-90e963765eac",
  ),
  "Membangun Legacy Planning untuk Generasi Berikutnya": unsplash(
    "photo-1517245386807-bb43f82c33c4",
  ),
  "Mengapa Nilai Tunai Bisa Menjadi Cadangan Finansial?": unsplash(
    "photo-1554224155-8d04cb21cd6c",
  ),

  // Tips Klaim Asuransi
  "Panduan Lengkap Klaim Asuransi Tanpa Hambatan": unsplash(
    "photo-1589829545856-d10d557cf95f",
  ),
  "Dokumen yang Perlu Disiapkan Saat Mengajukan Klaim": unsplash(
    "photo-1586281380117-5a60ae2050cc",
  ),
  "Cara Melaporkan Kejadian Klaim dengan Benar": unsplash(
    "photo-1556745757-8d76bdb6984b",
  ),
  "Mengapa Klaim Bisa Tertunda?": unsplash("photo-1573496359142-b8d87734a5a2"),
  "Tips Mengisi Formulir Klaim agar Tidak Salah": unsplash(
    "photo-1554224155-1696413565d3",
  ),
  "Apa yang Terjadi Setelah Klaim Diajukan?": unsplash(
    "photo-1556742049-0cfed4f6a45d",
  ),
};

const createSlug = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, "dan")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const createDefaultContent = (article, category) => [
  {
    heading: "Ringkasan",
    body: `${article.excerpt} Artikel ini membahas topik ${category.toLowerCase()} dengan pendekatan yang mudah dipahami agar pembaca dapat mengambil keputusan finansial secara lebih bijak.`,
  },
  {
    heading: "Mengapa Topik Ini Penting?",
    body: `Dalam perencanaan perlindungan finansial, memahami ${category.toLowerCase()} membantu keluarga menyiapkan strategi yang lebih matang, terukur, dan sesuai kebutuhan jangka panjang.`,
  },
  {
    heading: "Hal yang Perlu Diperhatikan",
    body: "Setiap keputusan finansial sebaiknya mempertimbangkan kondisi penghasilan, tanggungan keluarga, tujuan hidup, risiko kesehatan, serta kemampuan membayar premi secara konsisten.",
  },
  {
    heading: "Langkah Berikutnya",
    body: "Mulailah dengan mengevaluasi kebutuhan perlindungan keluarga, membaca ringkasan produk, lalu berkonsultasi dengan tenaga pemasar resmi agar pilihan produk sesuai dengan profil risiko Anda.",
  },
];

export const articles = Object.entries(articlesByCategory).flatMap(
  ([category, items]) =>
    items.map((item) => ({
      ...item,
      category,
      slug: item.slug ?? createSlug(item.title),
      image: articleImagesByTitle[item.title],
      content: item.content ?? createDefaultContent(item, category),
    })),
);

export const getArticleBySlug = (slug) => {
  return articles.find((article) => article.slug === slug);
};

export const getRelatedArticles = (currentArticle, limit = 3) => {
  return articles
    .filter(
      (article) =>
        article.slug !== currentArticle.slug &&
        article.category === currentArticle.category,
    )
    .slice(0, limit);
};
