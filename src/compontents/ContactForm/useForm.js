import React, { useState } from 'react';
// import axios from "axios";
import emailjs from 'emailjs-com';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({ name: '', email: '', msg: '' });
  const [errors, setErrors] = useState({ name: '', email: '', msg: '' });

  const onChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const sendMailHandler = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    // let template_params = {
    //   reply_to: email,
    //   userName: name,
    //   userEmail: email,
    //   contactMsg: msg,
    // };

    // let service_id = "default_service";
    // let template_id = "template_dvdbWf8K";
    // let user_id = "user_GNxQo2AWDni3wPZmmDvHA";
    // emailjs
    //   .send(service_id, template_id, template_params, user_id)
    //   .then((resposne) => {
    //     console.log(resposne, "resposne");
    //     console.log("poslato");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // clearForm();
    callback();
  };

  return {
    onChange,
    sendMailHandler,
    values,
    errors,
  };
};

export default useForm;
