import { CalendarClock, CreditCard, BarChart3, Package } from 'lucide-react';

const features = [
  {
    title: 'Manajemen Pesanan',
    desc: 'Kelola pickup, proses, dan pengantaran dengan status real-time untuk setiap cucian.',
    icon: Package,
  },
  {
    title: 'Penjadwalan Fleksibel',
    desc: 'Atur jadwal pickup & delivery otomatis dengan pengingat untuk pelanggan.',
    icon: CalendarClock,
  },
  {
    title: 'Pembayaran Terintegrasi',
    desc: 'Dukungan e-wallet, kartu, dan transfer untuk checkout yang mulus.',
    icon: CreditCard,
  },
  {
    title: 'Laporan & Analitik',
    desc: 'Pantau pendapatan, pelanggan, dan performa cabang dalam satu dashboard.',
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Fitur Utama</h2>
          <p className="mt-3 text-slate-600">Semua yang Anda butuhkan untuk menjalankan bisnis laundry dengan lancar dan modern.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
