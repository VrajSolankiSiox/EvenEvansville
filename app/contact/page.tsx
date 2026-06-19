import { Metadata } from "next";
import { Footer, Header, PageIntro } from "@/components/site-shell";
import { ContactForm } from "@/components/contact-form";
import { hotelName } from "@/lib/hotel-data";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description:
    "Contact Evansville Inn & Suites for reservations, special requests, or pet-friendly accommodations. Our 24-hour front desk team is ready to assist you.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Contact us"
          title="Plan your stay in Evansville."
          text="For reservations, special requests, or pet-friendly accommodations, send a note and our front desk team will prepare the details."
        />
        <section className="bg-[#ebe9df] px-5 py-20 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="luxury-card p-8">
              <p className="eyebrow">{hotelName}</p>
              <h2 className="mt-4 font-serif text-4xl tracking-[-0.05em]">
                Reservations and concierge
              </h2>
              <div className="mt-8 space-y-6 text-[#68706b]">
                <p>
                  <strong className="block text-[#1d2523]">Address</strong>
                  715 Brown School Rd, Evansville, WI 53536
                </p>
                <p>
                  <strong className="block text-[#1d2523]">Email</strong>
                  <a
                    href="mailto:evansville.suites@gmail.com"
                    className="hover:underline"
                  >
                    evansville.suites@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="block text-[#1d2523]">Phone</strong>
                  <a href="tel:+16088821295" className="hover:underline">
                    +1 608-882-1295
                  </a>
                </p>
                <p>
                  <strong className="block text-[#1d2523]">Hours</strong>
                  Concierge available 24 hours daily
                </p>
              </div>
            </aside>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
