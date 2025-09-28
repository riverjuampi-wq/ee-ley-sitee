
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight, Check, Mail, ShieldCheck, FileText, MessageSquare, Calendar, Youtube, Instagram, Linkedin, Twitter,
  Gavel, BookOpen, Globe, CreditCard, Upload, Facebook, Ticket, Banknote, Images, PhoneCall, Bot
} from 'lucide-react'

const NAV = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'contenidos', label: 'Casos & Contenido' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'contacto', label: 'Contacto' },
]

const WHATSAPP_ES = '+34643107191'
const WHATSAPP_EC = '+593967799802'
const BRAND = 'EE-Ley'
const PERSON = 'Ab. Juan Pablo España'
const TAGLINE = 'Hablemos claro y derecho'
const DOMAIN = 'ee-ley.com'
const LOGO_URL = '/logo-ee-ley.png'

const BASE_PRICE = 40
const PROMO_ACTIVE = true
const PROMO_CODE = 'PROMO20'
const PROMO_PRICE = 20

const CAL_URL = 'https://calendly.com/riverjuampi/30min'
const STRIPE_LINK_NORMAL = 'https://buy.stripe.com/eVq14o6yC3jJ1BkfIM7Vm00'
const STRIPE_LINK_PROMO  = 'https://buy.stripe.com/eVqdRa8GK07x3Js0NS7Vm01'

export default function App() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openBooking, setOpenBooking] = useState(false)
  const year = new Date().getFullYear()

  const jsonLd = useMemo(() => ({ 
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${BRAND} – ${PERSON}`,
    url: `https://${DOMAIN}`,
    areaServed: ["Spain","Ecuador","LatAm"],
    sameAs: [
      "https://www.youtube.com/@abjuanpablorivera",
      "https://www.instagram.com/abjuanpablorivera",
      "https://www.facebook.com/abjuanpablorivera",
      "https://www.tiktok.com/@abjuanpablorivera",
      "https://x.com/abjuanpablorivera",
      "https://www.linkedin.com/in/"
    ],
    image: `https://${DOMAIN}${LOGO_URL}`,
    telephone: ["+34 643 107 191", "+593 967 799 802"],
    priceRange: "€€",
    founder: { "@type":"Person", name: PERSON, jobTitle:"Abogado de Extranjería y Derecho Internacional, Corporativo y Digital" },
    serviceType: [
      "Extranjería (España)",
      "Derecho Migratorio e Internacional",
      "Derecho Corporativo",
      "Derecho Digital, Legaltech, IA & Blockchain"
    ],
    address: { "@type":"PostalAddress", addressCountry:"ES" }
  }), [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="w-full bg-slate-900 text-slate-100 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="EE-Ley Logo" className="h-7" />
            <span className="font-medium">{BRAND}</span>
            <span className="opacity-80">— {TAGLINE}</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a className="inline-flex items-center gap-1 hover:underline" href={`https://wa.me/${WHATSAPP_ES}`}><MessageSquare className="w-4 h-4" /> +34 643 107 191</a>
            <a className="inline-flex items-center gap-1 hover:underline" href={`https://wa.me/${WHATSAPP_EC}`}><MessageSquare className="w-4 h-4" /> +593 967 799 802</a>
            <a className="inline-flex items-center gap-1 hover:underline" href="mailto:contacto@ee-ley.com"><Mail className="w-4 h-4" /> contacto@ee-ley.com</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/75 backdrop-blur border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-white grid place-items-center shadow overflow-hidden">
              <img src={LOGO_URL} alt="EE-Ley Logo" className="w-9 h-9 object-contain" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold">{PERSON}</div>
              <div className="text-xs text-slate-500">Abogado de Extranjería · Derecho Migratorio, Internacional, Corporativo y Digital</div>
            </div>
          </a>
          <button aria-label="abrir menú" className="md:hidden p-2" onClick={() => setOpenMenu(!openMenu)}>
            <div className="w-6 h-0.5 bg-slate-800 mb-1" />
            <div className="w-6 h-0.5 bg-slate-800 mb-1" />
            <div className="w-6 h-0.5 bg-slate-800" />
          </button>
          <ul className={`md:flex items-center gap-6 ${openMenu ? 'block':'hidden'} md:block`}>
            {NAV.map(i => (<li key={i.id}><a className="text-sm font-medium text-slate-700 hover:text-indigo-600" href={`#${i.id}`}>{i.label}</a></li>))}
            <li>
              <button onClick={() => setOpenBooking(true)} className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-4 py-2 shadow hover:bg-indigo-700">
                <Calendar className="w-4 h-4" /> Reservar consulta
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-20 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Asesoría jurídica moderna, clara y cercana</h1>
              <p className="mt-4 text-lg text-slate-700">
                Extranjería (España), Derecho Migratorio e Internacional, Derecho Corporativo y <strong>Derecho Digital · Legaltech · IA &amp; Blockchain</strong>.
                Soluciones aplicables, cumplimiento y acompañamiento paso a paso.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => setOpenBooking(true)} className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-3 shadow hover:bg-indigo-700">
                  Agenda una consulta <ArrowRight className="w-4 h-4" />
                </button>
                <a href="#servicios" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 border border-slate-200 hover:border-indigo-300">
                  Ver servicios
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-slate-500">
                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Cumplimiento RGPD</div>
                <div className="flex items-center gap-2"><FileText className="w-4 h-4" /> Contratos y escritos</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.1 }}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-indigo-200 to-indigo-400 rounded-3xl blur opacity-50" />
                <div className="relative rounded-3xl bg-white shadow-xl p-6 md:p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white grid place-items-center text-indigo-700 shadow overflow-hidden">
                      <img src={LOGO_URL} alt="EE-Ley Logo" className="w-16 h-16 object-contain" />
                    </div>
                    <div>
                      <div className="font-semibold text-xl">{PERSON}</div>
                      <div className="text-slate-500">España – Ecuador · {BRAND}</div>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {["Extranjería: estancias por estudios, residencias, nacionalidad.","Derecho Digital, IA y Blockchain: cumplimiento y contratos.","Empresas y marketplace: términos, privacidad y fiscalidad básica."].map((t, i) => (
                      <li key={i} className="flex items-start gap-3"><Check className="mt-1 w-5 h-5 text-indigo-600" /><span>{t}</span></li>
                    ))}
                  </ul>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <a href={`https://wa.me/${WHATSAPP_ES}`} className="rounded-xl bg-slate-900 text-white px-4 py-3 inline-flex items-center justify-center gap-2 hover:bg-slate-800"><MessageSquare className="w-4 h-4"/>WhatsApp ES</a>
                    <a href={`https://wa.me/${WHATSAPP_EC}`} className="rounded-2xl bg-slate-100 px-4 py-3 inline-flex items-center justify-center gap-2 hover:bg-slate-200"><MessageSquare className="w-4 h-4"/>WhatsApp EC</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold">Sobre mí</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Soy {PERSON}. MBA con énfasis en Derecho Internacional y formación en Derecho Digital, IA & Blockchain.
                Atiendo principalmente Extranjería y Derecho Migratorio en España, además de asuntos corporativos y de cumplimiento digital.
                Construyo {BRAND} como despacho jurídico digital con soluciones claras, ágiles y orientadas a resultados; creo en la educación legal abierta (contenidos, ebooks, cursos) y la atención cercana.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm">Extranjería</span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm">IA & Cumplimiento</span>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">Corporativo</span>
                <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-sm">Emprendimiento</span>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow p-6">
              <h3 className="font-semibold flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-indigo-600"/> Valores</h3>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>✔️ Claridad y honestidad profesional</li>
                <li>✔️ Cumplimiento y seguridad jurídica</li>
                <li>✔️ Educación y mejora continua</li>
                <li>✔️ Enfoque práctico y humano</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Servicios</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Extranjería (España)", desc: "Estancias por estudios, residencias, nacionalidad, reagrupaciones." },
              { icon: ShieldCheck, title: "RGPD & Derecho Digital", desc: "Adecuación RGPD, políticas de privacidad, contratos de encargo." },
              { icon: FileText, title: "Contratos & Empresa", desc: "Términos & Condiciones, marketplace, acuerdos con proveedores." },
              { icon: BookOpen, title: "Guías, formularios y cursos (hazlo tú mismo)", desc: "Compra guías, ebooks y cursos prácticos paso a paso." },
              { icon: Calendar, title: "Cita / Consulta online", desc: "Reserva fecha y hora, adjunta documentos y realiza el pago." },
              { icon: PhoneCall, title: "Consultas urgentes", desc: "Vía WhatsApp/llamada con prioridad (según disponibilidad)." }
            ].map((s, i) => (
              <div key={i} className="rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-lg transition">
                <s.icon className="w-8 h-8 text-indigo-600"/>
                <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.desc}</p>
                <button onClick={() => setOpenBooking(true)} className="mt-4 inline-flex items-center gap-2 text-indigo-700 font-medium hover:underline">Cita previa & pago <ArrowRight className="w-4 h-4"/></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contenidos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Casos & Contenido</h2>
          <p className="mt-2 text-slate-600">Análisis de casos reales, guías prácticas y material para tu proceso.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "¿Te despidieron por WhatsApp?", desc: "Cuándo puede ser nulo y cómo reclamar.", tag: "Laboral" },
              { title: "Estancia por estudios 2025", desc: "Requisitos, plazos y errores frecuentes.", tag: "Extranjería" },
              { title: "RGPD para emprendedores", desc: "Lo mínimo viable para cumplir sin morir en el intento.", tag: "Digital" }
            ].map((card, i) => (
              <article key={i} className="rounded-3xl border border-slate-200 p-6 hover:shadow-lg transition">
                <div className="text-xs inline-flex px-2 py-1 rounded-full bg-slate-100 text-slate-700">{card.tag}</div>
                <h3 className="mt-3 font-semibold text-lg">{card.title}</h3>
                <p className="mt-2 text-slate-600">{card.desc}</p>
                <div className="mt-4 flex gap-3 text-slate-500">
                  <a className="inline-flex items-center gap-2 hover:text-indigo-600" href="#"><Youtube className="w-4 h-4"/> Video</a>
                  <a className="inline-flex items-center gap-2 hover:text-indigo-600" href="#"><FileText className="w-4 h-4"/> Artículo</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonios" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Testimonios</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { q: "Me explicó los pasos con claridad y conseguí la autorización sin problemas.", a: "María G." },
              { q: "Su checklist de RGPD fue directo al grano. Implementamos todo en una semana.", a: "Carlos R." },
              { q: "Atención cercana y profesional. Volveré a contratar el plan Pro.", a: "Andrea L." }
            ].map((t, i) => (
              <blockquote key={i} className="rounded-3xl bg-white border border-slate-200 p-6">
                <p className="text-slate-700">“{t.q}”</p>
                <footer className="mt-3 text-sm text-slate-500">— {t.a}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Contacto</h2>
          <p className="mt-2 text-slate-600">Elige el canal que prefieras. Respondo en el menor tiempo posible.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-white p-6 border border-slate-200">
              <h3 className="font-semibold">Reserva / Mensaje</h3>
              <div className="mt-4 grid gap-3">
                <button onClick={() => setOpenBooking(true)} className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-3 hover:bg-indigo-700"><Calendar className="w-4 h-4"/>Abrir calendario y formulario</button>
              </div>
              <div className="mt-6 text-sm text-slate-500 flex items-center gap-2"><ShieldCheck className="w-4 h-4"/>Tus datos se tratan conforme al RGPD. No spam.</div>
            </div>
            <div className="rounded-3xl bg-slate-900 text-slate-100 p-6">
              <h3 className="font-semibold">Atención rápida</h3>
              <div className="mt-4 grid gap-3">
                <a className="inline-flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 hover:bg-white/15" href={`https://wa.me/${WHATSAPP_ES}?text=${encodeURIComponent("Hola, me interesa una asesoría jurídica.")}`}>
                  <span className="inline-flex items-center gap-3"><MessageSquare className="w-5 h-5"/> WhatsApp España</span>
                  <span>+34 643 107 191</span>
                </a>
                <a className="inline-flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 hover:bg-white/15" href={`https://wa.me/${WHATSAPP_EC}?text=${encodeURIComponent("Hola, me interesa una asesoría jurídica.")}`}>
                  <span className="inline-flex items-center gap-3"><MessageSquare className="w-5 h-5"/> WhatsApp Ecuador</span>
                  <span>+593 967 799 802</span>
                </a>
                <a className="inline-flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 hover:bg-white/15" href="mailto:contacto@ee-ley.com">
                  <span className="inline-flex items-center gap-3"><Mail className="w-5 h-5"/> Email</span>
                  <span>contacto@ee-ley.com</span>
                </a>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a className="p-2 rounded-xl bg-white/10 hover:bg-white/15" href="https://www.facebook.com/abjuanpablorivera" aria-label="Facebook"><Facebook className="w-5 h-5"/></a>
                  <a className="p-2 rounded-xl bg-white/10 hover:bg-white/15" href="https://www.tiktok.com/@abjuanpablorivera" aria-label="TikTok"><Images className="w-5 h-5"/></a>
                  <a className="p-2 rounded-xl bg-white/10 hover:bg-white/15" href="https://www.youtube.com/@abjuanpablorivera" aria-label="YouTube"><Youtube className="w-5 h-5"/></a>
                  <a className="p-2 rounded-xl bg-white/10 hover:bg-white/15" href="https://www.instagram.com/abjuanpablorivera" aria-label="Instagram"><Instagram className="w-5 h-5"/></a>
                  <a className="p-2 rounded-xl bg-white/10 hover:bg-white/15" href="https://x.com/abjuanpablorivera" aria-label="Twitter/X"><Twitter className="w-5 h-5"/></a>
                  <a className="p-2 rounded-xl bg-white/10 hover:bg-white/15" href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-semibold">{BRAND} · {PERSON}</div>
            <div className="text-sm text-slate-600 mt-2">España – Ecuador</div>
            <div className="text-sm text-slate-600 mt-1">WhatsApp ES: +34 643 107 191</div>
            <div className="text-sm text-slate-600">WhatsApp EC: +593 967 799 802</div>
          </div>
          <div>
            <div className="font-semibold">Enlaces</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#servicios" className="hover:underline">Servicios</a></li>
              <li><a href="#contenidos" className="hover:underline">Casos & Contenido</a></li>
              <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Aviso Legal</a></li>
              <li><a href="#" className="hover:underline">Privacidad</a></li>
              <li><a href="#" className="hover:underline">Cookies</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Boletín</div>
            <form className="mt-2 flex gap-2" onSubmit={(e)=>{e.preventDefault(); alert("¡Gracias por suscribirte!")}}>
              <input type="email" required placeholder="tu@email.com" className="flex-1 rounded-xl border border-slate-300 px-3 py-2"/>
              <button className="rounded-xl bg-slate-900 text-white px-4">Suscribirme</button>
            </form>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 pb-8">© {year} {BRAND}. Todos los derechos reservados.</div>
      </footer>

      <CookieBanner />
      {openBooking && <BookingModal onClose={() => setOpenBooking(false)} />}
      <ChatWidget />
    </div>
  )
}

function CookieBanner() {
  const [show, setShow] = useState(() => !localStorage.getItem('cookie-ok'))
  if (!show) return null
  return (
    <div role="dialog" aria-live="polite" className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 max-w-xl rounded-2xl bg-white border border-slate-200 shadow-xl p-4">
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-indigo-600 mt-1"/>
        <div className="text-sm text-slate-700">
          Usamos cookies propias para mejorar la experiencia. Puedes consultar <a href="#" className="underline">la política de cookies</a>.
        </div>
      </div>
      <div className="mt-3 flex gap-2 justify-end">
        <button onClick={() => { localStorage.setItem('cookie-ok','1'); setShow(false) }} className="rounded-xl bg-slate-900 text-white px-4 py-2">Aceptar</button>
        <button onClick={() => setShow(false)} className="rounded-xl border border-slate-300 px-4 py-2">Rechazar</button>
      </div>
    </div>
  )
}

function BookingModal({ onClose }) {
  const [promo, setPromo] = useState('')
  const [files, setFiles] = useState([])
  const appliedPromo = PROMO_ACTIVE && promo.trim().toUpperCase() === PROMO_CODE
  const price = appliedPromo ? PROMO_PRICE : BASE_PRICE

  return (
    <div className="fixed inset-0 z-50 bg-black/50 grid place-items-center p-4">
      <div className="w-full max-w-5xl rounded-3xl bg-white shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="font-semibold text-lg">Reserva y pago de consulta</h3>
          <button onClick={onClose} className="rounded-xl px-3 py-1 border hover:bg-slate-50">Cerrar</button>
        </div>

        <div className="p-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <h4 className="font-semibold">1) Elige fecha y hora</h4>
            <p className="text-sm text-slate-600 mb-2">Se abre la agenda en tiempo real. Tras reservar, vuelve para el pago.</p>
            <a href={CAL_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-3">
              <Calendar className="w-4 h-4"/> Abrir agenda (Calendly)
            </a>
            <div className="mt-3 text-xs text-slate-500">* Integraremos reserva + pago en el mismo flujo si activas pagos en Calendly Pro.</div>
          </div>

          <form className="lg:col-span-1 grid gap-3" onSubmit={(e) => { e.preventDefault(); alert('Formulario registrado. Completa el pago para confirmar la cita.') }}>
            <h4 className="font-semibold">2) Cuéntame tu caso</h4>
            <div>
              <label className="text-sm text-slate-600">Nombre completo</label>
              <input required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Tu nombre" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-slate-600">WhatsApp</label>
                <input required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Ej. +34 600 000 000" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Correo electrónico</label>
                <input type="email" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="tucorreo@email.com" />
              </div>
            </div>
            <div>
              <label className="text-sm text-slate-600 flex items-center gap-2"><Upload className="w-4 h-4"/>Adjuntar archivos (PDF/JPG/PNG)</label>
              <input type="file" multiple onChange={(e)=> setFiles(Array.from(e.target.files || []))} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
              {files?.length ? <div className="text-xs text-slate-500 mt-1">{files.length} archivo(s) seleccionados</div> : null}
            </div>
            <div>
              <label className="text-sm text-slate-600">Mensaje</label>
              <textarea rows={6} required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Describe brevemente tu situación" />
            </div>
            <div>
              <label className="text-sm text-slate-600 flex items-center gap-2"><Ticket className="w-4 h-4"/> Código promocional</label>
              <input value={promo} onChange={(e)=> setPromo(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder={PROMO_ACTIVE ? PROMO_CODE : 'No activo'} />
              <div className="text-xs text-slate-500 mt-1">Precio: ${price} USD {appliedPromo ? '(promo aplicada)' : ''}</div>
            </div>
            <button className="rounded-xl bg-slate-900 text-white px-4 py-3 inline-flex items-center gap-2 justify-center"><FileText className="w-4 h-4"/> Registrar formulario</button>
          </form>

          <div className="lg:col-span-1 rounded-2xl border border-slate-200 p-4">
            <h4 className="font-semibold flex items-center gap-2"><CreditCard className="w-5 h-5"/> 3) Paga tu consulta</h4>
            <p className="text-sm text-slate-600 mt-1">El pago confirma y bloquea la cita.</p>
            <div className="mt-3 grid gap-2">
              <a href={appliedPromo ? STRIPE_LINK_PROMO : STRIPE_LINK_NORMAL} target="_blank" rel="noreferrer" className="rounded-xl bg-indigo-600 text-white px-4 py-3 inline-flex items-center gap-2 justify-center">
                <CreditCard className="w-4 h-4"/> Pagar con tarjeta (Stripe)
              </a>
              <div className="rounded-xl bg-slate-50 p-3 text-sm">
                <div className="font-medium flex items-center gap-2"><Banknote className="w-4 h-4"/> Bizum (España)</div>
                <div className="text-slate-600">Número: <span className="font-mono">643 107 191</span></div>
              </div>
              <div className="rounded-xl bg-slate-50 p-3 text-sm">
                <div className="font-medium">Transferencia (España – ING Naranja)</div>
                <div className="text-slate-600 break-words">IBAN: <span className="font-mono">ES81 1465 0100 9120 6653 1289</span></div>
              </div>
              <div className="rounded-xl bg-slate-50 p-3 text-sm">
                <div className="font-medium">Transferencia (Ecuador – Banco Pichincha)</div>
                <div className="text-slate-600">Ahorros: <span className="font-mono">2205669168</span> (Adrian Rivera Cedeño)</div>
              </div>
              <div className="rounded-xl bg-slate-50 p-3 text-sm">
                <div className="font-medium">PayPal</div>
                <div className="text-slate-600">Enviar a: <span className="font-mono">ab.mba.juanpablorivera@gmail.com</span></div>
              </div>
            </div>
            <div className="mt-4 text-xs text-slate-500">
              Tras el pago, comparte el comprobante por WhatsApp o adjúntalo en el formulario.
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-xs text-slate-600">
            Nota: Para pago con tarjeta dentro del mismo flujo, crea Payment Links en Stripe ($40 y $20) — ya integrados aquí — o activa pagos en Calendly Pro.
          </div>
        </div>
      </div>
    </div>
  )
}

function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hola 👋 Soy el asistente de EE-Ley. ¿En qué puedo ayudarte?' },
    { role: 'bot', text: 'Puedo orientarte sobre Extranjería, citas y pagos. Usa los atajos o escribe tu consulta.' }
  ])
  const [input, setInput] = useState('')

  const quick = ['Estancia por estudios','Nacionalidad','Reservar y pagar']

  function send(text) {
    const user = (text ?? input).trim(); if (!user) return;
    setMessages(m => [...m, { role: 'user', text: user }])
    let answer = 'Gracias por tu mensaje. ¿Quieres agendar una consulta y adjuntar tus documentos?'
    const u = user.toLowerCase()
    if (u.includes('estudio') || u.includes('estancia')) answer = 'Estancia por estudios: requisitos y errores frecuentes. Puedes reservar en Calendly y confirmar con pago.'
    else if (u.includes('nacionalid')) answer = 'Nacionalidad por residencia: reviso tiempo y documentos. ¿Te paso el enlace de la agenda?'
    else if (u.includes('precio') || u.includes('pago') || u.includes('promoc')) answer = `La consulta cuesta ${BASE_PRICE}. Con código ${PROMO_CODE} queda en ${PROMO_PRICE}. Puedes pagar con tarjeta (Stripe) o Bizum/transferencia.`
    else if (u.includes('whatsapp')) answer = `WhatsApp: España ${WHATSAPP_ES} · Ecuador ${WHATSAPP_EC}.`
    setTimeout(() => setMessages(m => [...m, { role: 'bot', text: answer }]), 400)
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="w-80 h-96 bg-white border border-slate-200 rounded-2xl shadow-xl flex flex-col overflow-hidden">
          <div className="px-3 py-2 border-b flex items-center justify-between bg-slate-900 text-white">
            <div className="flex items-center gap-2"><Bot className="w-4 h-4"/> Asistente EE-Ley</div>
            <button onClick={() => setOpen(false)} className="text-xs bg-white/10 rounded px-2 py-0.5">Cerrar</button>
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm ${m.role==='bot'?'text-slate-700':'text-slate-900'}`}>
                <div className={`max-w-[90%] rounded-2xl px-3 py-2 ${m.role==='bot'?'bg-slate-100':'bg-indigo-100 ml-auto'}`}>{m.text}</div>
              </div>
            ))}
            <div className="flex gap-2 flex-wrap">
              {quick.map((q, i) => (<button key={i} onClick={() => send(q)} className="text-xs rounded-full border px-2 py-1">{q}</button>))}
            </div>
          </div>
          <div className="p-2 border-t">
            <form onSubmit={(e) => { e.preventDefault(); send(input) }} className="flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 rounded-xl border px-3 py-2" placeholder="Escribe aquí..." />
              <button className="rounded-xl bg-indigo-600 text-white px-3">Enviar</button>
            </form>
            <div className="mt-2 text-[10px] text-slate-500">Para atención inmediata: WhatsApp ES {WHATSAPP_ES} · EC {WHATSAPP_EC}</div>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(s => !s)} className="rounded-full w-14 h-14 grid place-items-center shadow-xl bg-indigo-600 text-white">
        <Bot className="w-6 h-6"/>
      </button>
    </div>
  )
}
