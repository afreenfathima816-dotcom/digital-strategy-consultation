"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

type NavItem = { label: string; href: string };

// Hamburger + right-side drawer for small screens. Rendered through a portal because the
// header's backdrop blur would otherwise trap a fixed-position drawer inside the header.
export default function MobileNav({
  nav,
  bookingHref,
  email,
  phone,
}: {
  nav: NavItem[];
  bookingHref: string;
  email: string;
  phone: string;
}) {
  const [open, setOpen] = useState(false);
  // true on the client, false during server render (portal needs document.body).
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // Lock page scroll and allow Escape to close while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 cursor-pointer items-center justify-center md:hidden"
      >
        <span aria-hidden="true" className="flex w-6 flex-col gap-1.5">
          <span className="h-px w-full bg-ink" />
          <span className="h-px w-full bg-ink" />
          <span className="ml-auto h-px w-2/3 bg-ink" />
        </span>
      </button>

      {mounted &&
        createPortal(
          <div className={`fixed inset-0 z-[60] md:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
            {/* Backdrop */}
            <div
              onClick={close}
              className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-500 ${
                open ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Drawer */}
            <aside
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className={`absolute top-0 right-0 flex h-full w-[82%] max-w-sm flex-col bg-ivory shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex h-16 items-center justify-between border-b border-hairline px-6">
                <span className="text-[0.7rem] tracking-[0.2em] text-stone uppercase">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={close}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-hairline transition-colors hover:border-ink"
                >
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.25">
                    <path d="M3 3l10 10M13 3L3 13" />
                  </svg>
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-8">
                <ul className="space-y-1">
                  {nav.map((n) => (
                    <li key={n.href}>
                      <a
                        href={n.href}
                        onClick={close}
                        className="block py-3 font-display text-3xl font-light transition-colors hover:text-bronze"
                      >
                        {n.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="border-t border-hairline px-6 py-8">
                <a
                  href={bookingHref}
                  onClick={close}
                  className="block rounded-md border border-ink bg-ink px-8 py-4 text-center text-xs tracking-[0.22em] text-ivory uppercase transition-opacity hover:opacity-75"
                >
                  Book a call
                </a>
                <div className="mt-6 space-y-1 text-sm text-stone">
                  <a href={`mailto:${email}`} className="block break-all hover:text-ink">
                    {email}
                  </a>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="block hover:text-ink">
                    {phone}
                  </a>
                </div>
              </div>
            </aside>
          </div>,
          document.body,
        )}
    </>
  );
}
