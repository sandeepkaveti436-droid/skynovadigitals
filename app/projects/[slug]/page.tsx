import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";

const caseStudies = {
  "digify-agency": {
    title: "Digify Agency",
    eyebrow: "Brand, Website & Product Design",
    description:
      "A high-performance digital agency experience that brings brand strategy, UI/UX design, and technical delivery into one confident story.",
    liveUrl: "https://digify-agency.vercel.app/",
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    ],
    services: ["Strategy", "Brand system", "UI/UX design", "Next.js build"],
    process: [
      [
        "01",
        "Discovery",
        "Clarified the agency offer, audience, and conversion story.",
      ],
      [
        "02",
        "Visual system",
        "Built a premium visual language for brand, website, and case studies.",
      ],
      [
        "03",
        "Experience design",
        "Structured services, selected work, methodology, insights, and enquiry flows.",
      ],
      [
        "04",
        "Final build",
        "Delivered a responsive, motion-led Next.js experience ready for launch.",
      ],
    ],
  },
  "orvixa-workspace": {
    title: "Orvixa Workspace",
    eyebrow: "AI-Powered Work Management Platform",
    description:
      "A unified workspace that helps freelancers and growing teams manage projects, communication, time, invoices, reporting, and AI assistance in one place.",
    liveUrl: "https://orvixas.vercel.app/",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    ],
    services: [
      "Product strategy",
      "UX architecture",
      "Dashboard design",
      "Conversion system",
    ],
    process: [
      [
        "01",
        "Product map",
        "Grouped projects, tasks, communication, time, billing, and analytics into a clear platform model.",
      ],
      [
        "02",
        "Role journeys",
        "Designed distinct flows for freelancers, organizations, admins, and invited teammates.",
      ],
      [
        "03",
        "Interaction system",
        "Created boards, dashboards, onboarding, pricing, and AI moments that feel connected.",
      ],
      [
        "04",
        "Launch experience",
        "Shaped a conversion-focused marketing site that leads naturally into the product.",
      ],
    ],
  },
} as const;

type Slug = keyof typeof caseStudies;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug as Slug];

  if (!study) return { title: "Case Study" };

  return {
    title: `${study.title} Case Study`,
    description: study.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${study.title} Case Study | SkyNova Digitals`,
      description: study.description,
      images: [{ url: study.heroImage, alt: study.title }],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies[slug as Slug];

  if (!study) {
    return (
      <main className="min-h-screen px-6 pt-40 pb-24 text-center">
        <h1 className="text-4xl font-bold">Case study not found.</h1>
        <Link href="/projects" className="mt-8 inline-flex underline">
          Back to selected work
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white text-black">
      <section className="relative min-h-[78vh] overflow-hidden bg-black text-white">
        <img
          src={study.heroImage}
          alt={`${study.title} project preview`}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-36 lg:px-12 lg:pb-24">
          <Link
            href="/projects"
            className="mb-16 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-[#F2B800]"
          >
            <ArrowLeft size={16} /> Back to work
          </Link>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-[#F2B800]">
            {study.eyebrow}
          </p>
          <h1 className="max-w-5xl text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] md:text-8xl">
            {study.title}
          </h1>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
              {study.description}
            </p>
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 bg-[#F2B800] px-6 py-4 text-sm font-black uppercase tracking-[0.15em] text-black transition-transform hover:-translate-y-1"
            >
              Live experience <ExternalLink size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:py-32 lg:px-12">
        <div className="md:col-span-4">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F2B800]">
            The brief
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Built to be experienced.
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="max-w-3xl text-2xl leading-snug text-black/75 md:text-4xl">
            We shaped a clear digital journey from first impression to
            meaningful action, balancing editorial confidence with useful
            product detail.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {study.services.map((service) => (
              <div
                key={service}
                className="border-t border-black/15 pt-4 text-sm font-bold uppercase tracking-widest"
              >
                <Check size={16} className="mb-5 text-[#F2B800]" />
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#F7F7F5] px-6 py-16 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F2B800]">
                Visual system
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
                A closer look.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-black/50">
              Explore the visual direction, interface thinking, and product
              atmosphere behind this build.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {study.gallery.map((image, index) => (
              <figure
                key={image}
                className={`overflow-hidden bg-black ${index === 1 ? "md:translate-y-12" : ""}`}
              >
                <img
                  src={image}
                  alt={`${study.title} visual ${index + 1}`}
                  className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-32 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F2B800]">
              Live product preview
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              See it in motion.
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-black/55">
              The live experience is available in the frame, with the full site
              one click away for deeper exploration.
            </p>
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest underline decoration-[#F2B800] decoration-2 underline-offset-8"
            >
              Open live site <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="overflow-hidden border border-black/10 bg-black shadow-2xl lg:col-span-8">
            <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-3 truncate text-[10px] uppercase tracking-widest text-white/40">
                {study.liveUrl}
              </span>
            </div>
            <iframe
              src={study.liveUrl}
              title={`${study.title} live website preview`}
              loading="lazy"
              className="h-[520px] w-full border-0 bg-white md:h-[680px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-white md:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F2B800]">
            How it came together
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            A methodical process with visible momentum.
          </h2>
          <div className="mt-16 grid gap-px bg-white/15 md:grid-cols-4">
            {study.process.map(([number, title, description]) => (
              <article key={number} className="bg-black p-7 md:p-8">
                <span className="text-sm font-black text-[#F2B800]">
                  {number}
                </span>
                <h3 className="mt-12 text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/55">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center md:py-32">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F2B800]">
          Ready for the next build?
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-7xl">
          Make your next digital experience impossible to ignore.
        </h2>
        <Link
          href="/services"
          className="mt-10 inline-flex items-center gap-3 bg-black px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition-transform hover:-translate-y-1"
        >
          Start a project <ArrowUpRight size={17} />
        </Link>
      </section>
    </main>
  );
}
