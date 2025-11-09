import { useState } from 'react';
import { Rocket, Menu, X, User, LogIn } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-500 text-white shadow-lg">
              <Rocket size={18} />
            </span>
            <span className="text-lg font-semibold tracking-tight text-slate-900">LaundraX</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-slate-200" />
            <a href="#login" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
              <User size={18} />
              Log in
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-500 px-4 py-2 text-white shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/30 transition-all"
            >
              <LogIn size={18} />
              Get Started
            </a>
          </nav>

          <button
            aria-label="Open Menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-slate-200 my-2" />
              <a href="#login" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100 inline-flex items-center gap-2">
                <User size={18} /> Log in
              </a>
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-500 px-4 py-2 text-white shadow-md"
              >
                <LogIn size={18} /> Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
