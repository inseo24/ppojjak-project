import data from "@/data/data.json";
import Reveal from "@/components/Reveal";
import { fadeUpSmall } from "@/lib/motion";

export default function Footer() {
  const { contact, footer } = data;

  return (
    <footer
      id="contact"
      className="flex flex-col items-center gap-5 px-6 py-24 text-center md:px-10"
    >
      <Reveal>
        <p className="font-hand text-2xl text-accent">{contact.heading}</p>
      </Reveal>
      <Reveal variants={fadeUpSmall} delay={100}>
        <a
          href={`mailto:${contact.email}`}
          className="footer-link font-display text-4xl font-semibold md:text-6xl"
        >
          {contact.email}
        </a>
      </Reveal>
      <p className="mt-12 text-sm text-muted">{footer.copyright_text}</p>
    </footer>
  );
}
