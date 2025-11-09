import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Rp149K',
    period: '/bulan',
    cta: 'Mulai Gratis',
    features: ['1 Cabang', '250 Pesanan/bulan', 'Invoice & Struk', 'Support Email'],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: 'Rp399K',
    period: '/bulan',
    cta: 'Pilih Paket Ini',
    features: ['3 Cabang', 'Tak Terbatas', 'Pembayaran Online', 'Integrasi WhatsApp'],
    highlighted: true,
  },
  {
    name: 'Scale',
    price: 'Hubungi Kami',
    period: '',
    cta: 'Konsultasi',
    features: ['Multi-Cabang', 'Custom SLA', 'Prioritas Support', 'Akses API'],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Paket Harga</h2>
          <p className="mt-3 text-slate-600">Pilih paket sesuai kebutuhan. Semua paket dapat dibatalkan kapan saja.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border ${tier.highlighted ? 'border-indigo-500 shadow-indigo-500/20' : 'border-slate-200'} bg-white p-6 shadow-sm`}
            >
              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
                <span className="text-slate-500">{tier.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 text-emerald-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#get-started"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium transition ${tier.highlighted ? 'bg-indigo-600 text-white shadow hover:opacity-90' : 'border border-slate-300 text-slate-700 hover:bg-slate-50'}`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
