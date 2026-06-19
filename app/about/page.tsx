import { Metadata } from "next";
import Image from "next/image";
import { Footer, Header, PageIntro } from "@/components/site-shell";
import { images, stats } from "@/lib/hotel-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Evansville Inn & Suites. We offer convenient amenities, in-room kitchenettes, daily housekeeping, and pet-friendly rooms.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="About us"
          title="Comfortable lodging in Evansville."
          text="Evansville Inn & Suites offers a welcoming and accommodating stay: featuring 31 guest rooms and suites, kitchenettes, a premier suite with a jetted tub, and a friendly 24-hour front desk."
        />
        <section className="grid bg-[#ebe9df] lg:grid-cols-2">
          <div className="flex items-center px-5 py-16 sm:px-8 lg:px-16">
            <div className="max-w-xl">
              <p className="eyebrow">Our story</p>
              <h2 className="mt-4 font-serif text-5xl leading-tight tracking-[-0.06em]">Convenient comfort, friendly service.</h2>
              <p className="mt-6 text-lg leading-8 text-[#68706b]">
                We combine convenient amenities like in-room kitchenettes and refrigerators with essential services like a 24-hour front desk, daily housekeeping, and free self-parking (including RV, bus, and truck parking). We also offer pet-friendly rooms to ensure your entire family enjoys their stay.
              </p>
              <div className="gold-line mt-8 w-40" />
            </div>
          </div>
          <div className="relative min-h-[520px]">
            <Image src={images.parking} alt="Hotel exterior" fill quality={100} className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </section>
        <section className="bg-[#063f49] px-5 py-20 text-white sm:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow text-[#e8d8b8]">Our Core Values</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Comfortable Spaces.",
                  text: "With 31 air-conditioned rooms and suites (featuring kitchenettes and a jetted tub option), we provide a cozy retreat for every traveler."
                },
                {
                  title: "Attentive Service.",
                  text: "Our friendly front desk team is available 24 hours daily, accompanied by daily housekeeping to ensure your stay is comfortable and smooth."
                },
                {
                  title: "Hassle-Free Stays.",
                  text: "Enjoy free property-wide wireless internet, complimentary on-site self-parking for cars, RVs, and buses, and pet-friendly options."
                }
              ].map((belief) => (
                <div key={belief.title} className="rounded-[22px] border border-white/10 bg-white/[0.04] p-8">
                  <h2 className="font-serif text-3xl tracking-[-0.05em]">{belief.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/62">
                    {belief.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t border-[#e8d8b8]/35 pt-4">
                  <p className="font-serif text-4xl text-[#e8d8b8]">{stat.value}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.14em] text-white/62">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
