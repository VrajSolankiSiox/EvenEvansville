import Link from "next/link";
import { Footer, Header, PageIntro } from "@/components/site-shell";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="404 Error"
          title="Page not found."
          text="The page you are looking for doesn't exist or has been moved."
        />
        <section className="bg-[#ebe9df] px-5 py-20 sm:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
            <p className="font-serif text-3xl tracking-[-0.05em] text-[#1d2523]">
              Let's get you back on track.
            </p>
            <Link 
              href="/" 
              className="mt-8 rounded-full bg-[#063f49] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#17211f] shadow-[0_8px_28px_rgba(6,63,73,0.22)]"
            >
              Return to Home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
