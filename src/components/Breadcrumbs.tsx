import Link from "next/link";

export type Breadcrumb = {
  label: string;
  href?: string;
  current?: boolean;
};

type BreadcrumbsProps = {
  items: Breadcrumb[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (!items.length) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="text-foreground/50 flex flex-wrap items-center gap-2 text-xs tracking-[0.3em] uppercase">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.current || !item.href ? (
              <span className="text-foreground/70">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-foreground focus-visible:outline-foreground/35 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {item.label}
              </Link>
            )}
            {index < items.length - 1 && (
              <span aria-hidden className="text-foreground/30">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
