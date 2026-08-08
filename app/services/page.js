import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/Sections";
import { serviceCategories } from "../lib/siteData";

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">Our Services</p>
          <h1>Programs and resources designed to help families succeed.</h1>
          <p>
            SDAC provides programs and resources designed to help individuals and
            families succeed, connect, and become active members of their
            community.
          </p>
          <div className="action-row">
            <Link className="btn-primary" href="/contact">
              Request Support
            </Link>
            <Link className="btn-accent" href="/get-involved">
              Volunteer With SDAC
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Service Areas"
            title="Choose the support area that fits your need."
            text="Each service can connect to the contact form so families can ask for help quickly."
          />
          <div className="service-detail-grid">
            {serviceCategories.map(({ icon: Icon, image, title, items }) => (
              <article className="service-detail" key={title}>
                <img className="service-photo" src={image} alt="" />
                <span className="icon-badge">
                  <Icon size={30} />
                </span>
                <h2>{title}</h2>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="read-link" href="/contact">
                  Request This Service <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
          <p className="note-box">
            Immigration support is resource navigation only. SDAC does not
            provide legal advice unless supported by qualified legal partners.
          </p>
        </div>
      </section>
    </main>
  );
}
