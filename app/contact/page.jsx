import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const page = () => {
  return (
    <>
    <div className={styles.container}>
    <h1 style={{color:'white'}}>Contact Us</h1>
    <ContactCard />

        <section className={styles.contact_section}>
            <h2>We'd love to hear <span> from you </span></h2>

            <ContactForm />
        </section>
    </div>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7334.843806316269!2d77.46385220000003!3d23.1912902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1704474900040!5m2!1sen!2sin"
        width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"></iframe>

</>
  )
}

export default page