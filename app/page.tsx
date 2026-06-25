import Image from "next/image";
import Link from "next/link";
import { RoomCarousel } from "@/components/room-carousel";
import { Footer, Header } from "@/components/site-shell";
import { hotelName, images, services, stats, locationHighlights } from "@/lib/hotel-data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative mx-2 mt-[116px] min-h-[82vh] overflow-hidden bg-[#102523] text-white sm:mx-3 lg:mt-[112px]">
          <Image
            src={images.parking}
            alt="Comfortable guest room with warm welcoming interiors"
            fill
            priority
            quality={85}
            className="object-cover"
            sizes="100vw"
          />

          {/* Main dark gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,18,17,0.82)_0%,rgba(10,18,17,0.50)_38%,rgba(10,18,17,0.15)_72%,transparent_100%)]" />

          {/* Subtle depth */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.24)_100%)]" />

          {/* Warm hotel tint */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,24,16,0.32)_0%,rgba(35,24,16,0.08)_45%,transparent_100%)] mix-blend-multiply" />

          <div className="relative mx-auto flex min-h-[82vh] w-full max-w-7xl flex-col justify-center px-6 sm:px-10">
            <div className="max-w-2xl">
              {/* <p className="animate-rise mb-5 text-xs font-medium uppercase tracking-[0.32em] text-white/75">
                Welcome to One Life Studios
              </p> */}

              <h1 className="animate-rise font-serif text-[clamp(2.8rem,6.8vw,6.2rem)] leading-[0.92] tracking-[-0.05em] text-white">
                Comfortable
                <br />
                Hotels in
                <br />
                Evansville WI
              </h1>

              <Link
                href="/about"
                className="
          animate-rise
          mt-8
          inline-flex
          h-12
          items-center
          justify-center
          rounded-full
          bg-white/95
          px-8
          text-sm
          font-medium
          text-[#102523]
          backdrop-blur
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-white
          [animation-delay:140ms]
        "
              >
                Explore More
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#ebe9df] px-5 py-10 sm:px-8">
          <div className="editorial-panel mx-auto max-w-7xl px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(280px,360px)_1fr] lg:items-center">
              <div className="animate-float-slow relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_24px_80px_rgba(31,38,34,0.16)]">
                <Image
                  src={images.parlor}
                  alt="Guest suite sitting area"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 360px, 100vw"
                />
              </div>
              <div className="max-w-4xl animate-rise">
                {/* <p className="text-center font-serif text-4xl text-[#063f49]">
                  E
                </p> */}
                <h2 className="mt-6 max-w-3xl font-serif text-[clamp(2.2rem,5vw,3rem)] leading-[1.02] tracking-[-0.06em] text-[#1d2523]">
                  As one of the premier places to stay in Evansville WI, {hotelName} combines comfortable lodging with a 24-hour front desk. Whether searching for top Evansville WI hotels or motels in Evansville WI, we offer a welcoming stay.
                </h2>
              </div>
            </div>
            <div className="mt-14 grid grid-cols-2 gap-4 border-t border-[#063f49]/10 pt-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-4xl tracking-[-0.04em] text-[#063f49]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#68706b]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ebe9df] px-5 pb-20 pt-8 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Room gallery</p>
                <h2 className="mt-4 font-serif text-[clamp(2.6rem,6vw,6rem)] leading-[0.95] tracking-[-0.07em] text-[#1d2523]">
                  See What Awaits You
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-[#68706b]">
                Explore our rooms and suites, from well-equipped kitchenettes to
                our relaxing jetted tub suite.
              </p>
            </div>
            <RoomCarousel />
          </div>
        </section>

        <section className="bg-[#ebe9df] px-5 pb-20 pt-8 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="eyebrow">Comforts & Services</p>
              <h2 className="mt-4 font-serif text-[clamp(2.4rem,5vw,5.2rem)] leading-[0.98] tracking-[-0.07em] text-[#1d2523]">
                Conveniences designed for your stay.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group animate-rise overflow-hidden rounded-[22px] bg-[#f9f4ea] shadow-[0_20px_60px_rgba(31,38,34,0.08)]"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9f563f]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl tracking-[-0.05em]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#68706b]">
                      {service.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#063f49] px-5 py-20 text-white sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="animate-rise">
              <p className="eyebrow text-[#e8d8b8]">
                Welcoming & Accommodating
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2.6rem,6vw,6rem)] leading-[0.95] tracking-[-0.07em]">
                A relaxing stay with exceptional guest services.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                With a 24-hour front desk, daily housekeeping, free self-parking
                (including RV, bus, and truck spaces), and pet-friendly room
                options, we accommodate all your travel needs.
              </p>
              <Link href="/services" className="soft-button mt-8">
                Explore services
              </Link>
            </div>
            <div className="animate-float-slow relative min-h-[520px] overflow-hidden rounded-t-full">
              <Image
                src={images.lounge}
                alt="Welcoming hotel front desk and lobby"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#ebe9df] px-5 py-20 text-[#1d2523] sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="eyebrow">Location & Attractions</p>
              <h2 className="mt-4 font-serif text-[clamp(2.4rem,5vw,5.2rem)] leading-[0.98] tracking-[-0.07em]">
                Perfectly situated for your Wisconsin travels.
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {locationHighlights.map((highlight, index) => (
                <div key={highlight.title} className="animate-rise border-t border-[#063f49]/10 pt-6" style={{ animationDelay: `${index * 90}ms` }}>
                  <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#063f49]">{highlight.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#68706b]">{highlight.description}</p>
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
