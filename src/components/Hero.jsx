import Spline from '@splinetool/react-spline';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[520px] w-full">
        <Spline
          scene="https://prod.spline.design/1k2x1Qz8m5uY4jJ1/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-52 mb-16 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            Kelola Bisnis Laundry Anda dengan Mudah
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Platform SaaS modern untuk operasional laundry: pesanan, penjadwalan, pembayaran, hingga laporan—semua dalam satu tempat.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:opacity-90">
              Coba Gratis 14 Hari
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-50">
              Lihat Paket Harga
            </a>
          </div>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
            {[
              'Terima order online & walk-in',
              'Pantau status cucian real-time',
              'Integrasi pembayaran digital',
              'Laporan keuangan otomatis',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-600" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
