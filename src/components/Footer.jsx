import { ojkImageUrl } from "../constants/assets";

export default function Footer() {
  return (
    <footer
      id="network"
      className="bg-primary-container pt-20 pb-10 text-on-primary-container"
    >
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-20 grid grid-cols-1 gap-gutter md:grid-cols-4">
          <div>
            <div className="text-headline-md mb-6 font-bold text-secondary-fixed">
              Aman Jiwa Insurance
            </div>

            <p className="mb-8 opacity-80">
              Melindungi hari ini, mengamankan masa depan. Solusi asuransi
              terpercaya untuk keluarga Indonesia modern.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary-fixed/30 transition-all hover:bg-secondary-fixed hover:text-primary"
              >
                <span className="material-symbols-outlined text-sm">
                  face_nod
                </span>
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary-fixed/30 transition-all hover:bg-secondary-fixed hover:text-primary"
              >
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
            </div>
          </div>

          <FooterColumn
            title="Asuransi"
            delay="100ms"
            links={["Life Insurance", "Health Protection", "Corporate Plans"]}
          />

          <FooterColumn
            title="Bantuan"
            delay="200ms"
            links={["Contact Support", "Privacy Policy", "Terms of Service"]}
          />

          <div style={{ transitionDelay: "300ms" }}>
            <h4 className="text-headline-md mb-6 font-bold text-white">
              Hubungi Kami
            </h4>

            <div className="mb-4 flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary-fixed">
                call
              </span>

              <div>
                <div className="font-bold">1500 123</div>
                <div className="text-sm opacity-60">
                  Layanan Pelanggan 24 Jam
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary-fixed">
                location_on
              </span>

              <div className="text-sm opacity-80">
                Kawasan Sudirman Central Business District (SCBD), Jakarta
                Selatan
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-primary/20 pt-10 md:flex-row">
          <p className="text-sm opacity-60">
            © 2024 PT Aman Jiwa Insurance. Berizin dan Diawasi oleh OJK.
          </p>

          <img
            src={ojkImageUrl}
            alt="OJK Logo"
            className="h-8 cursor-pointer grayscale opacity-50 transition-all hover:grayscale-0"
          />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-headline-md mb-6 font-bold text-white">{title}</h4>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="inline-block transition-all hover:translate-x-1 hover:text-secondary-fixed"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
