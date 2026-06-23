"use client";

import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { hotelName, navItems } from "@/lib/hotel-data";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!menuOpen && pendingHref) {
      const timeoutId = window.setTimeout(() => {
        router.push(pendingHref);
        setPendingHref(null);
      }, 500);

      return () => window.clearTimeout(timeoutId);
    }

    return undefined;
  }, [menuOpen, pendingHref, router]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    if (menuOpen) {
      setPendingHref(href);
      closeMenu();
    } else {
      router.push(href);
    }
  };

  return (
    <header className="fixed py-2 inset-x-0 top-0 z-50 border-b border-[#0b4650]/10 bg-[#f8f3e9]/95 backdrop-blur-3xl text-[#1c2523]  ">
      {/* Desktop logo spans both navbar rows without changing header height */}
      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className="absolute left-8 top-1/2 z-10 hidden -translate-y-1/2 items-center lg:flex"
        aria-label={`${hotelName} home`}
      >
        <Image
          src="/HotelLogo6.png"
          alt={`${hotelName} logo`}
          width={200}
          height={200}
          priority
          className=" object-contain "
        />
      </Link>

      <Link
        href="/contact"
        className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-[#063f49] px-5 py-3 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#17211f] lg:flex"
      >
        Book your stay
      </Link>

      {/* Top row: hamburger | centered hotel name | mobile CTA */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
        {/* Hamburger — mobile only */}
        <div className="flex w-fit shrink-0 justify-start   lg:hidden">
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
          >
            <span
              className={`block h-[1.5px] w-6 bg-[#1d2523] transition-all duration-300 ${
                menuOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-[#1d2523] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-[#1d2523] transition-all duration-300 ${
                menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Hotel name */}
        <div className="flex flex-1 justify-center overflow-hidden  ">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="truncate text-center font-serif text-[14px] font-semibold leading-tight tracking-[-0.04em] sm:text-xl md:text-2xl xl:text-3xl"
          >
            {hotelName}
          </Link>
        </div>

        {/* CTA */}
        <div className="flex w-20 shrink-0 justify-end lg:hidden">
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full px-6 py-2 bg-[#063f49] text-[10px] font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#17211f]"
          >
            Book
          </Link>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden justify-center gap-8 whitespace-nowrap px-5 pb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#33413f] lg:flex xl:gap-10">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition hover:text-[#063f49]"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile slide-down drawer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-t border-[#063f49]/10 bg-[#f9f4ea]/98 px-6 pb-6 pt-5 shadow-[0_16px_48px_rgba(6,63,73,0.10)] backdrop-blur-xl">
          {/* Gold accent line */}
          <div className="mb-5 h-px w-10 bg-gradient-to-r from-[#063f49] via-[#d9b76f] to-[#9f563f]" />

          {/* Nav links */}
          <ul className="space-y-0">
            {navItems.map((item, i) => (
              <li
                key={item.href}
                style={{
                  transitionDelay: menuOpen ? `${60 + i * 55}ms` : "0ms",
                }}
                className={`border-b border-[#063f49]/8 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
              >
                <Link
                  href={item.href}
                  onClick={(event) => handleNavigation(event, item.href)}
                  className="group flex items-center gap-4 py-4"
                >
                  <span className="text-[0.58rem] font-bold tracking-[0.22em] text-[#9f563f]">
                    0{i + 1}
                  </span>
                  <span className="font-serif text-2xl tracking-[-0.04em] text-[#1d2523] transition-colors duration-200 group-hover:text-[#063f49]">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Book CTA */}
          <div
            style={{ transitionDelay: menuOpen ? "280ms" : "0ms" }}
            className={`mt-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <Link
              href="/contact"
              onClick={(event) => handleNavigation(event, "/contact")}
              className="flex items-center justify-center gap-2 rounded-full bg-[#063f49] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_8px_28px_rgba(6,63,73,0.22)] transition hover:bg-[#17211f]"
            >
              Book your stay
              <span className="text-[#d9b76f]">→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#063f49] px-5 py-14 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl font-semibold tracking-[-0.04em]">
            {hotelName}
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/62">
            A welcoming hotel in Evansville, Wisconsin offering 31 guest rooms
            and suites with kitchenettes, jetted tubs, and friendly 24-hour
            front desk service.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e8d8b8]">
            Visit
          </p>
          <a
            href="https://maps.google.com/?q=715+Brown+School+Rd,+Evansville,+WI+53536"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-sm leading-7 text-white/62 hover:text-white/90 transition-colors"
          >
            715 Brown School Rd
            <br />
            Evansville, WI 53536
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e8d8b8]">
            Contact
          </p>
          <div className="mt-4 text-sm leading-7 text-white/62">
            <a
              href="mailto:reservations@evansvilleinn.com"
              className="block hover:text-white/90 transition-colors"
            >
              reservations@evansvilleinn.com
            </a>
            <a
              href="tel:+16088821295"
              className="block hover:text-white/90 transition-colors"
            >
              +1 608-882-1295
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-intro">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        {eyebrow ? (
          <p className="animate-rise text-sm font-semibold uppercase tracking-[0.22em] text-[#e8d8b8]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="animate-rise mt-6">{title}</h1>
        <p className="animate-rise [animation-delay:120ms]">{text}</p>
      </div>
    </section>
  );
}
