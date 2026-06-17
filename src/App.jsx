import { Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home";
import Profile from "./pages/about/Profile";
import Direksi from "./pages/about/Direksi";
import Gcg from "./pages/about/Gcg";
import SolusiAsuransi from "./pages/products/SolusiAsuransi";
import DaftarAsuransi from "./pages/products/DaftarAsuransi";
import ClaimAsuransi from "./pages/products/ClaimAsuransi";
import Testimonials from "./pages/claims/Testimonials";
import BlogEdukasi from "./pages/blog/BlogEdukasi";
import BlogArticleDetail from "./pages/blog/BlogArticleDetail";

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-background pt-32 text-primary">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <h1 className="font-display-lg text-display-lg">{title}</h1>
        <p className="mt-4 max-w-2xl text-on-surface-variant">
          Halaman ini disiapkan untuk tahap pengembangan berikutnya.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<Navigate to="/about/profile" replace />} />
      <Route path="/about/profile" element={<Profile />} />
      <Route path="/about/direksi" element={<Direksi />} />
      <Route path="/about/gcg" element={<Gcg />} />

      <Route
        path="/products"
        element={<Navigate to="/products/solusi-asuransi" replace />}
      />
      <Route path="/products/solusi-asuransi" element={<SolusiAsuransi />} />
      <Route path="/products/daftar-asuransi" element={<DaftarAsuransi />} />
      <Route path="/products/claim-asuransi" element={<ClaimAsuransi />} />

      <Route path="/claims" element={<Testimonials />} />
      <Route path="/blog-edukasi" element={<BlogEdukasi />} />
      <Route path="/blog-edukasi/:slug" element={<BlogArticleDetail />} />
    </Routes>
  );
}
