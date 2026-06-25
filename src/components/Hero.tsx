import data from "@/data/data.json";

export default function Hero() {
  const { hero } = data;

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="max-w-2xl text-lg text-muted md:text-xl">
        {hero.greeting_line1}
        <br />
        {hero.greeting_line2}
      </p>
      <h1 className="mt-8 text-6xl font-semibold tracking-tight md:text-9xl">
        {hero.name_first} <span className="text-accent">{hero.name_last}</span>
      </h1>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-muted">
        {hero.role_tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-4 py-1">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
