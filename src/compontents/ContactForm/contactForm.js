import React, { useState } from "react";
import classes from "./contactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <form>
      <div className={classes.contactFormInfo}>
        <div className={classes.contactFormLeft}>
          <h3>Label</h3>
          <input
            onChange={onNameChange}
            type="text"
            placeholder="What's your name?"
          />
        </div>
        <div className={classes.contactFormRight}>
          <h3>Label</h3>
          <input type="text" placeholder="What's your name?" />
        </div>
      </div>

      <div className={classes.contactFormMsg}>
        <h3>Message</h3>
        <textarea
          className={classes.contactFormTextArea}
          placeholder="I bet its something interesting"
        ></textarea>
      </div>
      <input type="submit" value="Send message" />
    </form>
  );
};

export default ContactForm;
