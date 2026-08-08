import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageHero({ eyebrow, title, text, actions }) {
  return (
    <section className="page-hero">
      <div className="section-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        {actions ? <div className="action-row">{actions}</div> : null}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, align = "center" }) {
  return (
    <div className={`section-heading ${align === "left" ? "left" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export function IconCard({
  icon: Icon,
  image,
  imagePosition,
  title,
  text,
  href,
  action = "Learn More",
}) {
  return (
    <article className="icon-card">
      {image ? (
        <img
          className="card-photo"
          src={image}
          alt=""
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      ) : Icon ? (
        <span className="icon-badge">
          <Icon size={30} />
        </span>
      ) : null}
      <h3>{title}</h3>
      <p>{text}</p>
      {href ? (
        <Link className="read-link" href={href}>
          {action} <ArrowRight size={15} />
        </Link>
      ) : null}
    </article>
  );
}

export function BandCta({ eyebrow, title, text, primary, secondary }) {
  return (
    <section className="band-cta">
      <div>
        <p className="eyebrow light">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="action-row center">
        {primary}
        {secondary}
      </div>
    </section>
  );
}
