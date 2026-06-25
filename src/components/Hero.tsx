import Image from "next/image";
import data from "@/data/data.json";
import Reveal from "@/components/Reveal";
import { fadeUp, fadeUpSmall, popIn } from "@/lib/motion";

export default function Hero() {
  const { hero, decor } = data;

  return (
    <section className="hero-gradient relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
      {/* decorative graffiti accents */}
      <Reveal
        variants={popIn}
        delay={80}
        className="pointer-events-none absolute left-[6%] top-[22%] hidden md:block"
      >
        <Image
          src={decor.graffiti_1}
          alt=""
          width={120}
          height={120}
          className="w-20 opacity-90 lg:w-28"
        />
      </Reveal>
      <Reveal
        variants={popIn}
        delay={160}
        className="pointer-events-none absolute right-[7%] top-[30%] hidden md:block"
      >
        <Image
          src={decor.graffiti_2}
          alt=""
          width={120}
          height={120}
          className="w-20 opacity-90 lg:w-28"
        />
      </Reveal>

      <Reveal variants={fadeUpSmall} delay={200}>
        <p className="max-w-2xl text-lg text-foreground/70 md:text-2xl">
          {hero.greeting_line1}
          <br />
          {hero.greeting_line2}
        </p>
      </Reveal>

      <Reveal variants={fadeUp} delay={350}>
        <h1 className="hero-title font-display mt-6 font-semibold">
          {hero.name_first}
          <br />
          {hero.name_last}
        </h1>
      </Reveal>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 text-sm text-foreground/60">
        {hero.role_tags.map((tag, i) => (
          <Reveal key={tag} variants={fadeUpSmall} delay={500 + i * 80}>
            <span className="rounded-full border border-black/10 bg-card px-4 py-1.5">
              {tag}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
