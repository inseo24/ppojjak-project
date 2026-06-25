import Image from "next/image";
import data from "@/data/data.json";
import Reveal from "@/components/Reveal";
import { fadeUpSmall, popIn } from "@/lib/motion";

export default function Collab() {
  const { collab, decor } = data;

  return (
    <section
      id="process"
      className="section relative flex flex-col items-center overflow-hidden text-center"
    >
      <Reveal variants={popIn} className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2">
        <Image
          src={decor.sunburst}
          alt=""
          width={400}
          height={400}
          className="w-72 opacity-20 md:w-96"
        />
      </Reveal>
      <Reveal>
        <h2 className="font-display relative max-w-3xl text-3xl font-semibold md:text-5xl">
          {collab.heading}
        </h2>
      </Reveal>
      <Reveal variants={fadeUpSmall} delay={100}>
        <p className="font-hand relative mt-5 text-2xl text-accent">{collab.cta_hint}</p>
      </Reveal>
      <Reveal variants={fadeUpSmall} delay={200}>
        <a
          href="#contact"
          className="relative mt-9 inline-block rounded-full bg-accent px-10 py-4 text-lg font-medium text-white shadow-md transition-all duration-200 ease-out hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
        >
          {collab.cta_button_label}
        </a>
      </Reveal>
    </section>
  );
}
