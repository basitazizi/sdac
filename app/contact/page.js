import { contactMethods, site } from "../lib/siteData";

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">Contact SDAC</p>
          <h1>We're here to help.</h1>
          <p>
            Contact SDAC for educational support, youth mentorship, English
            classes, family assistance, partnerships, volunteering, or community
            programs.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner contact-layout">
          <div>
            <p className="eyebrow">Contact Information</p>
            <h2>Reach our community center.</h2>
            <div className="contact-list">
              {contactMethods.map(({ icon: Icon, label, value, href }) => (
                <a href={href} key={label}>
                  <span className="icon-badge">
                    <Icon size={24} />
                  </span>
                  <div>
                    <strong>{label}</strong>
                    <p>{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-action-column">
            <form
              id="support-form"
              className="contact-form"
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
            >
              <h2>What can we help you with?</h2>
              <label>
                Name
                <input name="name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" required />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" />
              </label>
              <label>
                Service Needed
                <select name="service">
                  <option>Youth Mentorship</option>
                  <option>English Classes</option>
                  <option>Family Assistance</option>
                  <option>Education</option>
                  <option>Immigration Resources</option>
                  <option>Sports</option>
                  <option>Partnership</option>
                  <option>Volunteer</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Preferred Language
                <select name="language">
                  <option>English</option>
                  <option>Dari/Farsi</option>
                  <option>Pashto</option>
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows={5} required />
              </label>
              <button className="btn-primary" type="submit">
                Submit Request
              </button>
            </form>

            <aside className="visit-card" aria-labelledby="visit-card-title">
              <div>
                <p className="eyebrow">Visit SDAC</p>
                <h2 id="visit-card-title">Book a time to visit us and get help.</h2>
                <p>
                  Choose a simple visit window and send us a note so we can
                  prepare the right support.
                </p>
              </div>
              <div className="mini-calendar" aria-label="Simple visit calendar">
                <div className="calendar-head">
                  <strong>August</strong>
                  <span>Mon-Fri</span>
                </div>
                <div className="calendar-weekdays">
                  {["M", "T", "W", "T", "F"].map((day, index) => (
                    <span key={`${day}-${index}`}>{day}</span>
                  ))}
                </div>
                <div className="calendar-days">
                  {[10, 11, 12, 13, 14].map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
              </div>
              <div className="visit-times">
                <span>10:00 AM</span>
                <span>1:00 PM</span>
                <span>4:00 PM</span>
              </div>
              <a
                className="btn-primary compact"
                href={`mailto:${site.email}?subject=Visit%20Appointment%20Request`}
              >
                Request A Visit
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="section-inner">
          <iframe
            className="map-frame"
            title="SDAC office map"
            src="https://www.google.com/maps?q=140%20W%20Park%20Ave%20Unit%20219%2C%20El%20Cajon%2C%20CA%2092020&output=embed"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
