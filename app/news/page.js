import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/Sections";
import { newsPosts } from "../lib/siteData";

const categories = [
  "Community News",
  "Youth Stories",
  "Events",
  "Program Updates",
  "Sports",
  "Resources",
  "Partnerships",
];

export default function NewsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">Blog</p>
          <h1>Updates from SDAC programs, youth, families, and partners.</h1>
          <p>
            Share community news, event recaps, youth stories, sports updates,
            resources, and partnership announcements in one flexible section.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <div className="category-row">
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
          <div className="news-grid large">
            {newsPosts.concat(newsPosts).map((post, index) => (
              <article className="news-card" key={`${post.title}-${index}`}>
                <div
                  className="news-image"
                  style={{ "--news-image": `url(${post.image})` }}
                >
                  <span>{post.category}</span>
                </div>
                <span>{post.date} / SDAC</span>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <Link className="read-link" href="/contact">
                  Share A Story <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Have A Story To Share?"
            title="Send SDAC a program update, event photo, or community story."
            text="Use the contact page to submit a story idea or ask about publishing an update."
          />
          <div className="section-actions">
            <Link className="btn-primary" href="/contact">
              Contact SDAC
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
