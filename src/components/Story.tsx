import Image from "next/image";
import data from "@/data/data.json";
import Reveal from "@/components/Reveal";
import { fadeUpSmall, fadeUpTilt } from "@/lib/motion";

export default function Story() {
  const { story, decor } = data;

  return (
    <section id="story" className="section">
      <Reveal>
        <h2 className="font-display max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
          {story.section_title}
        </h2>
      </Reveal>

      <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 text-muted">
        {story.logos.map((logo, i) => (
          <Reveal key={logo} variants={fadeUpSmall} delay={i * 70}>
            <span className="text-sm font-medium uppercase tracking-wide">{logo}</span>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
        <Reveal variants={fadeUpTilt} className="relative">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-black/5 bg-card">
            <Image
              src={story.portrait_image}
              alt="Studio portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* sunflowers peeking accent */}
          <Image
            src={decor.sunflowers}
            alt=""
            width={160}
            height={160}
            className="pointer-events-none absolute -right-6 -top-10 hidden w-28 rotate-6 md:block"
          />
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-6">
          <p className="font-hand text-3xl text-accent">{story.secrets_line}</p>
          <p className="text-foreground/75">{story.bio_paragraph_1}</p>
          <p className="text-foreground/75">{story.bio_paragraph_2}</p>
          <p className="text-foreground/75">{story.bio_paragraph_3}</p>
          <p className="font-display text-lg font-medium">{story.mission_statement}</p>
          <p className="text-foreground/75">{story.partner_statement}</p>
        </Reveal>
      </div>
    </section>
  );
}
