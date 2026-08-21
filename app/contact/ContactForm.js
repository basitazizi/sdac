"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_3erq70r";
const EMAILJS_TEMPLATE_ID = "template_kezeqos";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const initialStatus = {
  type: "idle",
  message: "",
};

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(initialStatus);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!EMAILJS_PUBLIC_KEY) {
      setStatus({
        type: "error",
        message:
          "EmailJS is missing a public key. Add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to your local or deployment environment variables, then rebuild the site.",
      });
      return;
    }

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const service = formData.get("service")?.toString() || "";
    const language = formData.get("language")?.toString() || "";
    const message = formData.get("message")?.toString().trim() || "";

    setIsSending(true);
    setStatus(initialStatus);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          phone,
          service,
          language,
          message,
          from_name: name,
          from_email: email,
          reply_to: email,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      formRef.current?.reset();
      setStatus({
        type: "success",
        message:
          "Thank you. Your request was sent, and our team will follow up soon.",
      });
    } catch (error) {
      console.error("EmailJS contact form failed:", error);
      setStatus({
        type: "error",
        message:
          "We could not send your request right now. Please try again or contact us directly by phone or email.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      ref={formRef}
      id="support-form"
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <h2>What can we help you with?</h2>
      <label>
        Name
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" />
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
      {status.message ? (
        <p className={`form-status ${status.type}`} role="status" aria-live="polite">
          {status.message}
        </p>
      ) : null}
      <button className="btn-primary" type="submit" disabled={isSending}>
        {isSending ? "Sending..." : "Submit Request"}
      </button>
    </form>
  );
}
