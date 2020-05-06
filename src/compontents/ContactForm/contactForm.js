import React, { useState } from 'react';
import classes from './contactForm.module.css';
import emailjs from 'emailjs-com';
import { HalfCircleSpinner } from 'react-epic-spinners';
import Fade from 'react-reveal/Fade';
import useForm from './useForm';

import { validate } from './validateForm';

// custom Hook za formu

const ContactForm = () => {
  const [spinner, setSpinner] = useState(false);
  const [textFormSent, setTextFormSent] = useState(false);
  const { sendMailHandler, onChange, values, errors, formSent } = useForm(
    submit,
    validate
  );

  function submit() {
    setSpinner(true);
    let template_params = {
      reply_to: values.email,
      userName: values.name,
      userEmail: values.email,
      contactMsg: values.msg,
    };

    let service_id = 'default_service';
    let template_id = 'template_dvdbWf8K';
    let user_id = 'user_GNxQo2AWDni3wPZmmDvHA';

    emailjs
      .send(service_id, template_id, template_params, user_id)
      .then((resposne) => {
        setSpinner(false);
        setTextFormSent(true);
      })
      .catch((err) => {
        setTextFormSent(true);
        setSpinner(false);
      });
  }

  return (
    <div className={classes.contactForm}>
      <div className={classes.contactFormWrapper}>
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
              {errors ? <h6>{errors.name}</h6> : null}
            </div>
            <div className={classes.contactFormRight}>
              <h3>Your Email</h3>
              <input
                onChange={onChange}
                type="email"
                name="email"
                placeholder="What's your email?"
                value={values.email}
              />
              {errors ? <h6>{errors.email}</h6> : null}
            </div>
          </div>
          <div className={classes.contactFormMsg}>
            <h3>Message</h3>
            <textarea
              name="msg"
              onChange={onChange}
              className={classes.contactFormTextArea}
              placeholder="I bet it's something interesting . . ."
              value={values.msg}
            ></textarea>
          </div>
          {spinner ? <HalfCircleSpinner color="#ab44a5" size="45" /> : null}
          {!textFormSent ? (
            <input type="submit" value="Send message" />
          ) : (
            <h4 className={classes.sentFormText}>Alright! Message is sent.</h4>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
