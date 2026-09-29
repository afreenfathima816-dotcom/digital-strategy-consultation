import Image from "next/image";
import type { ReactNode } from "react";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import MobileNav from "@/components/MobileNav";

const BRAND = "Digital Strategy Consultation";
const CONTACT_EMAIL = "hello@grayline.example";
// PLACEHOLDER: sample number, replace with the real business line before launch.
const CONTACT_PHONE = "+91 00000 00000";
const OFFICE_ADDRESS = "Chennai, Tamil Nadu, India";
const BOOKING_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Digital strategy consultation")}`;

const COVERS = [
  {
    title: "Channels and marketing",
    text: "Which channels bring customers, what each one costs, and where budget is being wasted.",
    icon: <path d="M4 20V11M10 20V5M16 20v-6M22 20H2" />,
  },
  {
    title: "Systems and data",
    text: "The tools you run, how they connect, and whether your customer data can be trusted.",
    icon: <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5" />,
  },
  {
    title: "Operations",
    text: "Manual work that software should be doing, and the order in which to automate it.",
    icon: <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18 3v4h-4M6 21v-4h4" />,
  },
  {
    title: "Team and ownership",
    text: "Who is responsible for digital, what skills are missing, and what to hire or outsource.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M16 14.2a5 5 0 0 1 6 4.8" />
      </>
    ),
  },
];

const STEPS = [
  {
    label: "Step one",
    title: "Discovery call",
    text: "Thirty minutes to understand your business, goals and current setup. Free, no obligation.",
  },
  {
    label: "Step two",
    title: "Audit",
    text: "We review your channels, systems and numbers without changing anything. Takes one to two weeks.",
  },
  {
    label: "Step three",
    title: "Strategy session",
    text: "A working session where we walk through what we found and agree the priorities with you.",
  },
  {
    label: "Step four",
    title: "Your roadmap",
    text: "A written plan: what to do, in what order, what it costs, and how you will measure it.",
  },
];

const ENGAGEMENTS = [
  {
    name: "Consultation",
    price: "Free",
    detail: "30 minutes",
    items: ["Discovery call", "Where you stand today", "Three things to fix first"],
  },
  {
    name: "Strategy audit",
    price: "From ₹1,50,000",
    detail: "2 to 3 weeks",
    items: ["Full audit of channels, systems and data", "Strategy session with your team", "A roadmap for the next twelve months"],
    featured: true,
  },
  {
    name: "Ongoing advisory",
    price: "From ₹75,000 / month",
    detail: "3 month minimum",
    items: ["Monthly review of the roadmap", "Vendor and hiring decisions", "Direct access between sessions"],
  },
];

// PLACEHOLDERS: replace with real client testimonials (with their permission) before launch.
const TESTIMONIALS = [
  {
    quote: "We finally know which channels bring customers and which ones were just spending money. The roadmap gave us a clear order of work.",
    name: "Jane Doe",
    role: "Founder, Acme Retail",
  },
  {
    quote: "The audit connected our sales and marketing data for the first time. Decisions now start from numbers, not opinions.",
    name: "John Smith",
    role: "Director, Example Foods",
  },
  {
    quote: "Independent advice with nothing to sell us. We hired the right people and stopped paying for tools we did not use.",
    name: "Alex Sample",
    role: "Managing Partner, Placeholder Studio",
  },
  {
    quote: "Our tools now talk to each other and the manual reporting is gone. The team spends its time on customers instead of spreadsheets.",
    name: "Sam Example",
    role: "Operations Head, Demo Logistics",
  },
  {
    quote: "The monthly advisory keeps us honest. Every vendor and hiring decision gets checked against the roadmap before we commit.",
    name: "Taylor Test",
    role: "CEO, Sample Health",
  },
];

const FAQ = [
  {
    q: "Who is this for?",
    a: "Owners and leadership teams of small and midsize businesses who know digital matters but are not sure where to spend the next rupee.",
  },
  {
    q: "Do you sell software or agency services?",
    a: "No. We do not resell tools or take commissions, so our recommendations are not tied to what we sell.",
  },
  {
    q: "What do you need from us?",
    a: "An hour of your time for the discovery call and view access to your analytics, ad accounts and key systems for the audit.",
  },
  {
    q: "Can you also carry out the plan?",
    a: "The roadmap is written so your team or any provider can deliver it. If you want us involved, ongoing advisory keeps us alongside you.",
  },
  {
    q: "How long does it take?",
    a: "The discovery call takes thirty minutes. The strategy audit, including the strategy session and your written roadmap, takes two to three weeks.",
  },
  {
    q: "What does it cost?",
    a: "The consultation is free. The strategy audit starts from ₹1,50,000, and ongoing advisory starts from ₹75,000 a month with a three month minimum.",
  },
];


const NAV = [
  { label: "Scope", href: "#scope" },
  { label: "Process", href: "#process" },
  { label: "Engagements", href: "#engagements" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const BUTTON =
  "inline-block rounded-md border border-ink bg-ink px-8 py-4 text-xs font-normal tracking-[0.22em] text-ivory uppercase transition-opacity duration-300 hover:opacity-75";
const BUTTON_GHOST =
  "inline-block rounded-md border border-ink px-8 py-4 text-xs font-normal tracking-[0.22em] uppercase transition-opacity duration-300 hover:opacity-75";

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl leading-tight font-light sm:text-5xl">{title}</h2>
    </div>
  );
}

// Profile links are placeholders until the real accounts are provided.
const SOCIALS = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: <path d="M4 4l11.7 16H20L8.3 4H4zM4 20l6.8-6.8M20 4l-6.8 6.8" />,
  },
  {
    name: "Facebook",
    href: "#",
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
];

const FOOTER_LINK = "text-hairline/80 transition-colors hover:text-ivory";

function FooterColumn({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <p className="text-[0.7rem] tracking-[0.28em] text-ivory uppercase">{title}</p>
      <ul className="mt-6 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-hairline bg-ivory/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between gap-6 px-6 sm:px-8 lg:px-12">
          <a href="#top" className="font-display text-base whitespace-nowrap sm:text-lg">
            Digital Strategy <span className="italic text-stone">Consultation</span>
          </a>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-8 text-[0.7rem] tracking-[0.2em] text-stone uppercase">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-ink">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={BOOKING_HREF}
              className="hidden rounded-md bg-ink px-5 py-2 text-[0.7rem] tracking-[0.2em] text-ivory uppercase transition-opacity hover:opacity-75 sm:inline-block"
            >
              Book a call
            </a>

            <MobileNav nav={NAV} bookingHref={BOOKING_HREF} email={CONTACT_EMAIL} phone={CONTACT_PHONE} />
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero: centred, editorial */}
        <section className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
          <div className="rise relative flex flex-col items-center pt-12 pb-12 text-center sm:pt-16 sm:pb-14">
            {/* Framed, tilted photos either side of the headline; wide screens only so they never cover text. */}
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-0 hidden w-44 -translate-y-1/2 -rotate-6 rounded-md bg-white p-2 shadow-[0_20px_40px_-20px_rgba(29,28,26,0.35)] xl:block"
            >
              <Image src="/hero-left.jpg" alt="" width={560} height={720} priority className="h-auto w-full rounded" />
            </div>
            <div
              aria-hidden="true"
              className="absolute top-1/2 right-0 hidden w-44 -translate-y-[40%] rotate-5 rounded-md bg-white p-2 shadow-[0_20px_40px_-20px_rgba(29,28,26,0.35)] xl:block"
            >
              <Image src="/hero-right.jpg" alt="" width={560} height={720} priority className="h-auto w-full rounded" />
            </div>

            <h1 className="max-w-4xl font-display text-[2.75rem] leading-[1.05] font-light tracking-tight sm:text-7xl lg:text-8xl">
              Clarity for your
              <br />
              <span className="italic text-bronze">digital future.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed sm:mt-10 sm:text-lg text-stone">
              Know where your business stands today, and leave with a considered plan for where it goes next.
            </p>
            {/* Side by side at every width; tighter padding and tracking on phones so both fit */}
            <div className="mt-8 flex w-full max-w-sm gap-3 sm:mt-12 sm:w-auto sm:max-w-none sm:gap-4">
              <a
                href={BOOKING_HREF}
                className="flex-1 rounded-md border border-ink bg-ink px-3 py-3.5 text-center text-[0.68rem] tracking-[0.14em] whitespace-nowrap text-ivory uppercase transition-opacity duration-300 hover:opacity-75 sm:w-52 sm:flex-none sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.22em]"
              >
                Book a call
              </a>
              <a
                href="#process"
                className="flex-1 rounded-md border border-ink px-3 py-3.5 text-center text-[0.68rem] tracking-[0.14em] whitespace-nowrap uppercase transition-opacity duration-300 hover:opacity-75 sm:w-52 sm:flex-none sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.22em]"
              >
                How it works
              </a>
            </div>
          </div>

        </section>

        {/* What it covers */}
        <section id="scope" className="bg-linen">
          <div className="mx-auto max-w-[1600px] px-6 py-10 sm:px-8 lg:px-12 sm:py-16">
            <SectionHead eyebrow="The scope" title="What we look at" />
            <dl className="reveal mt-8 grid gap-4 sm:mt-12 sm:gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {COVERS.map((c) => (
                <div
                  key={c.title}
                  className="grid grid-cols-[auto_1fr] items-center gap-x-4 rounded-lg border border-hairline bg-ivory p-5 transition duration-300 sm:block sm:p-8 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(29,28,26,0.35)]"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-bronze/40 text-bronze sm:h-11 sm:w-11"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {c.icon}
                    </svg>
                  </span>
                  <dt className="font-display text-xl sm:mt-6 sm:text-2xl">{c.title}</dt>
                  <dd className="col-span-2 mt-3 text-sm leading-relaxed text-stone sm:text-base">{c.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* How it works */}
        <section id="process" className="bg-ink text-ivory">
          <div className="mx-auto max-w-[1600px] px-6 py-10 sm:px-8 lg:px-12 sm:py-16">
            <SectionHead eyebrow="The process" title="How it works" />
            {/* Four steps side by side on dark, split by faint dividers */}
            <ol className="reveal mt-4 grid divide-y divide-ivory/15 sm:mt-8 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {STEPS.map((s) => (
                <li key={s.title} className="py-6 first:pt-4 last:pb-0 sm:py-8 sm:first:pt-8 sm:last:pb-8 lg:px-10 lg:first:pl-0 lg:last:pr-0">
                  <p className="text-[0.7rem] tracking-[0.2em] text-bronze uppercase">{s.label}</p>
                  <h3 className="mt-3 font-display text-2xl font-light sm:text-3xl">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-hairline/70">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Engagements */}
        <section id="engagements" className="border-t border-hairline">
          <div className="mx-auto max-w-[1600px] px-6 py-10 sm:px-8 lg:px-12 sm:py-16">
            <SectionHead eyebrow="Engagements" title="Ways to work together" />
            <div className="reveal no-scrollbar -mx-6 mt-8 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 sm:-mx-8 sm:mt-12 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0">
              {ENGAGEMENTS.map((e) => (
                <div
                  key={e.name}
                  className={`flex w-[90%] shrink-0 snap-start flex-col rounded-lg border p-5 sm:w-[60%] sm:p-8 lg:w-auto lg:p-10 ${
                    e.featured ? "border-ink bg-ink text-ivory" : "border-hairline bg-white/40"
                  }`}
                >
                  <p className={`text-xs tracking-[0.22em] uppercase ${e.featured ? "text-bronze" : "text-stone"}`}>
                    {e.name}
                  </p>
                  <p className="mt-4 font-display text-3xl font-light sm:mt-6 sm:text-4xl">{e.price}</p>
                  <p className={`mt-1 text-sm ${e.featured ? "text-hairline" : "text-stone"}`}>{e.detail}</p>
                  <ul className={`mt-6 flex-1 space-y-3 border-t pt-6 sm:mt-8 sm:space-y-4 sm:pt-8 ${e.featured ? "border-stone" : "border-hairline"}`}>
                    {e.items.map((item) => (
                      <li key={item} className="flex gap-4 leading-relaxed">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          className="mt-1.5 h-4 w-4 shrink-0 text-bronze"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 8.5l3 3 7-7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={BOOKING_HREF}
                    className={`mt-8 text-center sm:mt-10 ${
                      e.featured
                        ? "inline-block rounded-md bg-ivory px-8 py-4 text-xs tracking-[0.22em] text-ink uppercase transition-opacity duration-300 hover:opacity-75"
                        : BUTTON_GHOST
                    }`}
                  >
                    {e.price === "Free" ? "Book a call" : "Enquire now"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="border-t border-hairline">
          <div className="mx-auto max-w-[1600px] px-6 py-10 sm:px-8 lg:px-12 sm:py-16">
            <Testimonials heading={<SectionHead eyebrow="Testimonials" title="What clients say" />} items={TESTIMONIALS} />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-linen">
          <div className="mx-auto max-w-[1600px] px-6 py-10 sm:px-8 lg:px-12 sm:py-16">
            <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
            <div className="reveal mt-8 grid gap-4">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-lg border border-hairline bg-ivory px-5 py-3.5 sm:px-7"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl sm:gap-6">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-bronze/40 text-base font-light text-bronze transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed sm:mt-4 sm:text-base text-stone">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section id="contact" className="mx-auto max-w-[1600px] sm:px-8 sm:py-16 lg:px-12">
          <div className="reveal grid overflow-hidden border-hairline bg-white/40 sm:rounded-lg sm:border lg:grid-cols-2">
            <div className="p-6 sm:p-12 lg:p-16">
              <p className="eyebrow">Next step</p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight font-light sm:mt-6 sm:text-5xl">
                Thirty minutes to find out <span className="italic text-bronze">where you stand.</span>
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed sm:mt-6 sm:text-lg text-stone">
                Send us a line about your business and we will reply within one working day with times for a call.
              </p>
            </div>

            <div className="flex flex-col justify-center border-t border-hairline p-6 sm:p-12 lg:border-t-0 lg:border-l lg:p-16">
              <ContactForm to={CONTACT_EMAIL} buttonClass={BUTTON} />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-ivory">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-x-6 gap-y-8 px-6 pt-10 pb-10 sm:px-8 lg:px-12 sm:pt-16 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-10">
          <div className="col-span-2 lg:col-span-1">
            <a href="#top" className="font-display text-2xl">
              Digital Strategy <span className="italic text-hairline/70">Consultation</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-hairline/70">
              Independent digital strategy for growing businesses. No software resale, no commissions.
            </p>
            <ul className="mt-8 flex gap-3">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    aria-label={s.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/25 text-hairline/80 transition-opacity duration-300 hover:opacity-75"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {s.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn title="Navigate">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className={FOOTER_LINK}>
                  {n.label}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Engagements">
            {ENGAGEMENTS.map((e) => (
              <li key={e.name}>
                <a href="#engagements" className={FOOTER_LINK}>
                  {e.name}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact" className="col-span-2 lg:col-span-1">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className={`${FOOTER_LINK} break-all`}>
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className={FOOTER_LINK}>
                {CONTACT_PHONE}
              </a>
            </li>
            <li className="text-hairline/70">{OFFICE_ADDRESS}</li>
          </FooterColumn>
        </div>

        <div className="border-t border-ivory/10">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-3 px-6 py-6 text-center text-xs text-hairline/60 sm:flex-row sm:justify-between sm:gap-2 sm:py-4 sm:text-left sm:px-8 lg:px-12">
            <span>
              © {new Date().getFullYear()} {BRAND}
            </span>
            {/* PLACEHOLDER links: point these at the real policy pages once they exist. */}
            <div className="flex items-center gap-2">
              <a href="#" className="transition-colors hover:text-ivory">
                Privacy policy
              </a>
              <span aria-hidden="true">·</span>
              <a href="#" className="transition-colors hover:text-ivory">
                Terms and conditions
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp chat (icon: Simple Icons, official WhatsApp mark) */}
      <a
        href={`https://wa.me/${CONTACT_PHONE.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed right-3 bottom-3 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105 sm:right-4 sm:bottom-4"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
}
