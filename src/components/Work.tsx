import Image from "next/image";
import data from "@/data/data.json";

export default function Work() {
  const { work } = data;

  return (
    <section id="work" className="px-6 py-32 md:px-12">
      <div className="mb-16 flex flex-col items-baseline justify-between gap-4 md:flex-row">
        <h2 className="text-4xl font-semibold md:text-6xl">{work.section_title}</h2>
        <p className="text-muted">{work.section_subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {work.projects.map((project, i) => {
          const n = i + 1;
          const record = project as unknown as Record<string, string>;
          const name = record[`name_${n}`];
          const tags = record[`tags_${n}`];
          const note = record[`note_${n}`];
          const image = record[`image_${n}`];

          return (
            <article key={name} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="text-xl font-medium">{name}</h3>
                <span className="text-sm text-muted">{tags}</span>
              </div>
              {note && <p className="mt-1 text-sm text-muted">{note}</p>}
            </article>
          );
        })}
      </div>

      <p className="mt-16 text-center text-muted">{work.footer_note}</p>
    </section>
  );
}
