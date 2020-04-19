import React, { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({ name: '', email: '', msg: '' });
  const [errors, setErrors] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [formSent, setFormSent] = useState(false);

  //On change input handler
  const onChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  //Submit Form
  const sendMailHandler = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmiting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmiting) {
      callback();
      clearForm();
      setFormSent(true);
    }
  }, [errors]);

  //Clear form
  const clearForm = () => {
    setValues({ name: '', email: '', msg: '' });
  };

  return {
    onChange,
    sendMailHandler,
    values,
    errors,
    formSent,
  };
};

export default useForm;
