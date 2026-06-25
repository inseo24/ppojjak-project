import data from "@/data/data.json";

export default function Header() {
  const { nav } = data;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
      <nav className="hidden items-center gap-7 text-[15px] text-foreground/80 md:flex">
        {nav.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="ml-auto rounded-full bg-foreground px-5 py-2.5 text-[15px] font-medium text-background transition-opacity hover:opacity-85"
      >
        {nav.start_project_label}
      </a>
    </header>
  );
}
