import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconCard, SectionHeading } from "../components/Sections";
import { involvementOptions } from "../lib/siteData";

export default function GetInvolvedPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">Get Involved</p>
          <h1>Support programs that strengthen Afghan families.</h1>
          <p>
            Volunteer, partner, share a story, or help connect families with the
            resources and opportunities they need.
          </p>
          <div className="action-row">
            <Link className="btn-primary" href="/contact">
              Volunteer
            </Link>
            <Link className="btn-accent" href="/contact">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Ways To Help"
            title="Choose the way you want to support SDAC."
          />
          <div className="card-grid">
            {involvementOptions.map((option) => (
              <IconCard
                key={option.title}
                {...option}
                href="/contact"
                action="Get Started"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="section-inner split-layout">
          <div>
            <p className="eyebrow">Partnerships</p>
            <h2>Collaborate with SDAC to serve families better.</h2>
            <p>
              SDAC welcomes collaboration with schools, nonprofits, healthcare
              providers, government agencies, community groups, and local
              leaders.
            </p>
          </div>
          <div className="partner-panel">
            {["Resource referrals", "Youth programs", "Education support", "Community events"].map(
              (item) => (
                <span key={item}>{item}</span>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Ready To Help?"
            title="Tell us how you want to get involved."
            text="Use the contact form and select Volunteer, Partnership, or Other."
          />
          <div className="section-actions">
            <Link className="btn-primary" href="/contact">
              Contact SDAC <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
