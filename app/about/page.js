import { SectionHeading } from "../components/Sections";
import { values } from "../lib/siteData";

const timeline = [
  "Founded to support Afghan families in San Diego County",
  "Early community classes and family support programs",
  "Youth mentorship, sports, and cultural programs expanded",
  "Partnerships strengthened access to local resources",
  "Today SDAC continues building connection and belonging",
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">About SDAC</p>
          <h1>Our story is rooted in service, culture, and community.</h1>
          <p>
            SDAC was created to help Afghan families navigate life in San Diego
            while preserving culture, building confidence, and connecting people
            with trusted support.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner split-layout">
          <div>
            <p className="eyebrow">Our Mission</p>
            <h2>Empower Afghan individuals and families.</h2>
            <p>
              To empower Afghan individuals and families through education,
              mentorship, community resources, cultural connection, and
              opportunities that help them thrive.
            </p>
          </div>
          <div>
            <p className="eyebrow">Our Vision</p>
            <h2>A strong, connected, and thriving Afghan community.</h2>
            <p>
              We envision a community where every individual has access to the
              resources, relationships, and opportunities they need to succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block alt origin-band">
        <div className="section-inner origin-note">
          <div className="established-mark">
            <span>Established</span>
            <strong>April 22, 2022</strong>
          </div>
          <div>
            <p className="eyebrow">Our Beginning</p>
            <h2>Built from a simple promise to be present for families.</h2>
            <p>
              Since April 22, 2022, SDAC has focused on practical help,
              cultural connection, and trusted support for Afghan families
              building life in San Diego.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Our Values"
            title="The principles behind every SDAC program."
          />
          <div className="card-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <article className="icon-card" key={title}>
                <span className="icon-badge">
                  <Icon size={30} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
            {["Empowerment", "Inclusion", "Service"].map((value) => (
              <article className="icon-card" key={value}>
                <span className="icon-badge">{value.slice(0, 1)}</span>
                <h3>{value}</h3>
                <p>
                  Practical support delivered with respect, dignity, and care
                  for every family.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Our History"
            title="A growing timeline of community support."
            text="SDAC began on April 22, 2022 and continues to grow through classes, mentorship, partnerships, and family support."
          />
          <div className="timeline">
            {timeline.map((item, index) => (
              <div className="timeline-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Leadership / Team"
            title="Add team photos, names, and roles here."
            text="This section is ready for SDAC leadership and staff profiles when official details are available."
          />
          <div className="team-placeholders">
            {["Executive Director", "Program Lead", "Youth Mentor"].map((role) => (
              <article key={role}>
                <div />
                <h3>{role}</h3>
                <p>Name and photo coming soon.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
