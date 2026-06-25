import Image from "next/image";
import data from "@/data/data.json";

export default function Story() {
  const { story } = data;

  return (
    <section id="story" className="px-6 py-32 md:px-12">
      <h2 className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
        {story.section_title}
      </h2>

      <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-muted">
        {story.logos.map((logo) => (
          <span key={logo} className="text-sm uppercase tracking-wide">
            {logo}
          </span>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white/5">
          <Image
            src={story.portrait_image}
            alt="Daniel Sun portrait"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-xl font-medium text-accent">{story.secrets_line}</p>
          <p className="text-muted">{story.bio_paragraph_1}</p>
          <p className="text-muted">{story.bio_paragraph_2}</p>
          <p className="text-muted">{story.bio_paragraph_3}</p>
          <p className="font-medium">{story.mission_statement}</p>
          <p className="text-muted">{story.partner_statement}</p>
        </div>
      </div>
    </section>
  );
}
