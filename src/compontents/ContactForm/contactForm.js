import React, { useState } from 'react';
import classes from './contactForm.module.css';

import useForm from './useForm';

import { validate } from './validateForm';

// custom Hook za formu

const ContactForm = () => {
  const { sendMailHandler, onChange, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log('submit fuknicja samo imitacija');
  }
  const clearForm = () => {};

  return (
    <form noValidate onSubmit={sendMailHandler}>
      <div className={classes.contactFormInfo}>
        <div className={classes.contactFormLeft}>
          <h3>Your Name</h3>
          <input
            onChange={onChange}
            type="name"
            name="name"
            placeholder="What's your name?"
            value={values.name}
          />
        </div>
        <div className={classes.contactFormRight}>
          <h3>Label</h3>
          <input
            onChange={onChange}
            type="email"
            name="email"
            placeholder="What's your name?"
            value={values.email}
          />
        </div>
      </div>

      <div className={classes.contactFormMsg}>
        <h3>Message</h3>
        <textarea
          name="msg"
          onChange={onChange}
          className={classes.contactFormTextArea}
          placeholder="I bet its something interesting"
          value={values.msg}
        ></textarea>
      </div>
      <input type="submit" value="Send message" />
    </form>
  );
};

export default ContactForm;
