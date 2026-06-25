import data from "@/data/data.json";

export default function Header() {
  const { nav } = data;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12">
      <nav className="hidden gap-8 text-sm text-muted md:flex">
        {nav.links.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-foreground transition-colors">
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-black md:ml-auto"
      >
        {nav.start_project_label}
      </a>
    </header>
  );
}
