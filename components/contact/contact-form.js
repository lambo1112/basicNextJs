import { useRef } from "react";
import classes from "./contact-form.module.css";

function ContactForm() {
  const refEmail = useRef();
  const refName = useRef();
  const refMessage = useRef();
  function sendMessageHandler(event) {
    event.preventDefault();
    const enteredEmail = refEmail.current.value;
    const enteredName = refName.current.value;
    const enteredMessage = refMessage.current.value;

    //optional: add client-side validation
    fetch("api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <section className={classes.contact}>
      <h1> How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={refEmail} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={refName} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" required ref={refMessage}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
