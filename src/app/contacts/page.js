import React from "react";
import ContactCard from "@/components/contact-card";
import styles from "./contact.module.css";
import ContactForm from "@/components/contact-form";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
          </h2>

          <ContactForm />
        </section>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.6005815397343!2d73.09590867558302!3d33.589718373334755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfecaf9b4fb293%3A0x4572e3182ca5ff24!2sRaza%20Plaza!5e0!3m2!1sen!2s!4v1687090042979!5m2!1sen!2s"
        width={100}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
