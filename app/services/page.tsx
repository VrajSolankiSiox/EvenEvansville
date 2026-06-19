import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer, Header, PageIntro } from "@/components/site-shell";
import { services } from "@/lib/hotel-data";

export const metadata: Metadata = {
  title: "Comforts & Services",
  description:
    "Explore the comforts and services at Evansville Inn & Suites. Discover our 24-hour front desk, fitness facility, and free on-site self-parking.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Services"
          title="Comfort, arranged beautifully."
          text="Every service is designed for your comfort and convenience: comfortable guest rooms, complete in-room amenities, a 24-hour front desk, on-site fitness facility, and free on-site self-parking."
        />
        <section className="bg-[#ebe9df] px-5 py-20 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <article key={service.title} className="luxury-card overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9f563f]">0{index + 1}</p>
                  <h2 className="mt-3 font-serif text-4xl tracking-[-0.05em] text-[#1d2523]">{service.title}</h2>
                  <p className="mt-4 text-base leading-8 text-[#68706b]">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-[#063f49] px-5 py-16 text-white sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="eyebrow text-[#e8d8b8]">Guest Services</p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.05em]">Have questions or special requests?</h2>
              <p className="mt-3 max-w-2xl text-white/62">Our 24-hour front desk team is ready to assist with reservations, group parking configurations, or questions about pet-friendly rooms.</p>
            </div>
            <Link href="/contact" className="soft-button">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
