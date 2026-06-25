import data from "@/data/data.json";

export default function Collab() {
  const { collab } = data;

  return (
    <section id="process" className="flex flex-col items-center px-6 py-32 text-center md:px-12">
      <h2 className="max-w-3xl text-3xl font-semibold md:text-5xl">{collab.heading}</h2>
      <p className="mt-6 text-muted">{collab.cta_hint}</p>
      <a
        href="#contact"
        className="mt-10 rounded-full bg-accent px-10 py-4 text-lg font-medium text-black transition-transform hover:scale-105"
      >
        {collab.cta_button_label}
      </a>
    </section>
  );
}
