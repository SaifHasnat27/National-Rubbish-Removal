import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { buildMetadata } from "@/lib/seo";
import { SEO_META } from "@/components/seo/lib/SeoMetas";

export const metadata = buildMetadata("sitemap");

const mainPages = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/location", label: "Service Areas" },
  { href: "/quote-estimator", label: "Quote Estimator" },
  { href: "/policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
] as const;

const serviceGroups = [
  {
    heading: "Residential",
    slugs: [
      "household-rubbish-removal",
      "green-waste-removal",
      "deceased-estate-clearance",
      "unwanted-furniture-removal",
      "garage-clean-out",
      "mattress-removal",
    ],
  },
  {
    heading: "Commercial",
    slugs: [
      "strata-rubbish-removal",
      "office-rubbish-removal",
      "office-cubicle-removal",
      "retail-strip-out-removal",
      "warehouse-rubbish-removal",
      "end-of-lease-rubbish-removal",
    ],
  },
  {
    heading: "Construction",
    slugs: [
      "building-materials-disposal",
      "construction-site-clean-up",
      "scrap-metal-removal",
      "brick-and-concrete-removal",
      "timber-removal",
      "skip-bin-alternatives",
    ],
  },
] as const;

const headingClass =
  "mb-4 font-[family-name:var(--font-display)] text-[clamp(2.25rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]";

const cardHeadingClass = "mb-4 text-xl font-bold text-[var(--text-primary)]";

const linkClass =
  "inline-flex min-h-11 items-center text-base leading-normal text-[var(--text-primary)] transition-colors duration-200 hover:text-[var(--text-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-accent)]";

function pageName(title: string) {
  return title.replace(/ Sydney$/, "");
}

export default function SitemapPage() {
  return (
    <div className="bg-base-secondary min-h-screen">
      <SectionWrapper className="py-16 md:py-24">
        <div className="mb-16 text-center">
          <h1 className={headingClass}>Sitemap</h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Easily navigate to every page on our website.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <nav aria-labelledby="sitemap-main" className="card text-center">
            <h2 id="sitemap-main" className={cardHeadingClass}>
              Main pages
            </h2>
            <ul>
              {mainPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className={linkClass}>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {serviceGroups.map((group) => (
            <nav
              key={group.heading}
              aria-labelledby={`sitemap-${group.heading}`}
              className="card text-center"
            >
              <h2 id={`sitemap-${group.heading}`} className={cardHeadingClass}>
                {group.heading}
              </h2>
              <ul>
                {group.slugs.map((slug) => (
                  <li key={slug}>
                    <Link href={SEO_META[slug].canonical} className={linkClass}>
                      {pageName(SEO_META[slug].title)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
