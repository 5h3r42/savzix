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
    <nav
      aria-label="Breadcrumb"
      className={className}
    >
      <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/50">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.current || !item.href ? (
              <span className="text-foreground/70">{item.label}</span>
            ) : (
              <Link href={item.href} className="transition hover:text-foreground">
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
