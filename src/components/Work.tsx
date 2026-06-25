import Image from "next/image";
import data from "@/data/data.json";
import Reveal from "@/components/Reveal";
import { cardEntrance } from "@/lib/motion";

export default function Work() {
  const { work } = data;

  return (
    <section id="work" className="section">
      <Reveal>
        <div className="mb-14 flex flex-col items-baseline justify-between gap-2 md:flex-row">
          <h2 className="font-display text-4xl font-semibold md:text-6xl">
            {work.section_title}
          </h2>
          <p className="font-hand text-2xl text-accent md:text-3xl">
            {work.section_subtitle}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {work.projects.map((project, i) => {
          const n = i + 1;
          const record = project as unknown as Record<string, string>;
          const name = record[`name_${n}`];
          const tags = record[`tags_${n}`];
          const note = record[`note_${n}`];
          const image = record[`image_${n}`];

          return (
            <Reveal key={name} variants={cardEntrance} delay={i * 80}>
              <article className="project-card rounded-3xl bg-card p-4">
                <div className="preview relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/5">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-medium">{name}</h3>
                  <span className="text-right text-sm text-muted">{tags}</span>
                </div>
                {note && <p className="mt-1 text-sm text-muted-soft">{note}</p>}
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <p className="font-hand mt-16 text-center text-2xl text-foreground/70">
          {work.footer_note}
        </p>
      </Reveal>
    </section>
  );
}
