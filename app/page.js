import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";
import { BandCta, IconCard, SectionHeading } from "./components/Sections";
import { services, site, values } from "./lib/siteData";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-ink">
      <section className="hero-pattern relative">
        <div className="hero-shell relative z-10 mx-auto grid min-h-[608px] max-w-[884px] grid-cols-[1fr_260px] items-start gap-8 px-5 pt-[106px] sm:px-8 lg:px-0">
          <div className="relative z-10 max-w-[585px]">
            <p className="eyebrow">Welcome To SDAC</p>
            <h1 className="mt-3 font-serif text-[42px] font-bold leading-[1.17] tracking-normal text-[#494744] sm:text-[48px] lg:text-[50px]">
              Empowering Afghan Families. Strengthening Our Community.
            </h1>
            <p className="mt-7 max-w-[560px] text-[15px] font-medium leading-[1.85] text-[#494744]">
              San Diego Afghan Connections and Cultural Center supports youth,
              women, children, and families through education, mentorship,
              community programs, cultural activities, and essential resources.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link className="btn-primary" href="/services">
                Explore Our Services
              </Link>
              <Link className="btn-accent" href="/contact">
                Get Support <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner split-layout">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2>Helping Afghan families thrive while honoring culture.</h2>
            <p>
              SDAC is a community organization dedicated to helping Afghan
              families build successful lives while preserving and celebrating
              Afghan culture.
            </p>
            <Link className="btn-accent compact" href="/about">
              Learn About SDAC <ArrowRight size={16} />
            </Link>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <IconCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Our Services"
            title="Practical programs for families, youth, and community life."
            text="SDAC connects families with learning, mentorship, navigation, sports, culture, and community support."
          />
          <div className="card-grid services-grid">
            {services.map((service) => (
              <IconCard
                key={service.title}
                {...service}
                href="/services"
                action="Request This Service"
              />
            ))}
          </div>
          <div className="section-actions">
            <Link className="btn-primary" href="/services">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner split-layout partners">
          <div>
            <p className="eyebrow">Partners & Collaboration</p>
            <h2>Working together for our community.</h2>
            <p>
              SDAC collaborates with local organizations, schools, nonprofits,
              healthcare providers, government agencies, and community leaders
              to connect families with resources and opportunities.
            </p>
            <Link className="btn-primary compact" href="/get-involved">
              Partner With Us <Handshake size={16} />
            </Link>
          </div>
          <div className="partner-panel">
            {["Schools", "Nonprofits", "Healthcare", "Community Leaders"].map(
              (partner) => (
                <span key={partner}>{partner}</span>
              ),
            )}
          </div>
        </div>
      </section>

      <BandCta
        eyebrow="Get Started Today"
        title="How Can We Help?"
        text="Whether you are looking for educational support, family resources, mentorship, community programs, or ways to get involved, SDAC is here to help."
        primary={<Link className="btn-primary" href="/contact">Request Support</Link>}
        secondary={<Link className="btn-accent" href={site.mapUrl}>Visit Our Office</Link>}
      />
    </main>
  );
}
