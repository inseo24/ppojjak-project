import Image from "next/image";
import data from "@/data/data.json";

export default function Hero() {
  const { hero, decor } = data;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
      {/* decorative graffiti accents */}
      <Image
        src={decor.graffiti_1}
        alt=""
        width={120}
        height={120}
        className="pointer-events-none absolute left-[6%] top-[22%] hidden w-20 opacity-90 md:block lg:w-28"
      />
      <Image
        src={decor.graffiti_2}
        alt=""
        width={120}
        height={120}
        className="pointer-events-none absolute right-[7%] top-[30%] hidden w-20 opacity-90 md:block lg:w-28"
      />

      <p className="max-w-2xl text-lg text-foreground/70 md:text-2xl">
        {hero.greeting_line1}
        <br />
        {hero.greeting_line2}
      </p>

      <h1 className="font-display mt-6 text-7xl font-semibold leading-[0.95] md:text-[10rem]">
        {hero.name_first}
        <br />
        {hero.name_last}
      </h1>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 text-sm text-foreground/60">
        {hero.role_tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-black/10 bg-card px-4 py-1.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
