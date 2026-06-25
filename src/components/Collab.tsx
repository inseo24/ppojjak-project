import Image from "next/image";
import data from "@/data/data.json";
import Reveal from "@/components/Reveal";

export default function Collab() {
  const { collab, decor } = data;

  return (
    <section
      id="process"
      className="relative flex flex-col items-center overflow-hidden px-6 py-28 text-center md:px-10"
    >
      <Image
        src={decor.sunburst}
        alt=""
        width={400}
        height={400}
        className="pointer-events-none absolute -top-10 left-1/2 w-72 -translate-x-1/2 opacity-20 md:w-96"
      />
      <Reveal>
        <h2 className="font-display relative max-w-3xl text-3xl font-semibold md:text-5xl">
          {collab.heading}
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="font-hand relative mt-5 text-2xl text-accent">{collab.cta_hint}</p>
      </Reveal>
      <Reveal delay={200}>
        <a
          href="#contact"
          className="relative mt-9 inline-block rounded-full bg-accent px-10 py-4 text-lg font-medium text-white transition-transform duration-300 ease-out hover:scale-105"
        >
          {collab.cta_button_label}
        </a>
      </Reveal>
    </section>
  );
}
