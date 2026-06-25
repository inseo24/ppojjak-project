import data from "@/data/data.json";

export default function Footer() {
  const { contact, footer } = data;

  return (
    <footer id="contact" className="flex flex-col items-center gap-6 px-6 py-20 text-center md:px-12">
      <h2 className="text-2xl font-semibold md:text-4xl">{contact.heading}</h2>
      <a href={`mailto:${contact.email}`} className="text-lg text-accent hover:underline">
        {contact.email}
      </a>
      <p className="mt-10 text-sm text-muted">{footer.copyright_text}</p>
    </footer>
  );
}
