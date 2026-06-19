"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { roomImages } from "@/lib/hotel-data";

export function RoomCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? roomImages.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === roomImages.length - 1 ? 0 : current + 1,
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === roomImages.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[28px] bg-[#102523] shadow-[0_30px_90px_rgba(31,38,34,0.18)]">
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {roomImages.map((room) => (
          <article key={room.title} className="relative min-w-full">
            <div className="relative min-h-[520px] sm:min-h-[640px]">
              <Image
                src={room.image}
                alt={room.title}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 1180px, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,37,35,0.05),rgba(16,37,35,0.74))]" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10">
              <h3 className="mt-3 font-serif text-[clamp(2.2rem,5vw,5rem)] leading-none tracking-[-0.07em]">
                {room.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/72">
                {room.detail}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="absolute right-5 top-5 flex gap-2 sm:right-8 sm:top-8">
        {/* <button
          type="button"
          onClick={goToPrevious}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-[#f8f3e9]/90 text-xl text-[#063f49] transition hover:bg-white"
          aria-label="Show previous room"
        >
          <span aria-hidden="true">&lt;</span>
        </button> */}

        {/* <button
          type="button"
          onClick={goToNext}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-[#f8f3e9]/90 text-xl text-[#063f49] transition hover:bg-white"
          aria-label="Show next room"
        >
          <span aria-hidden="true">&gt;</span>
        </button> */}
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2 sm:bottom-10 sm:right-10">
        {roomImages.map((room, index) => (
          <button
            key={room.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              activeIndex === index
                ? "w-10 bg-[#e8d8b8]"
                : "w-2.5 bg-white/45 hover:bg-white"
            }`}
            aria-label={`Show ${room.title}`}
          />
        ))}
      </div>
    </div>
  );
}
