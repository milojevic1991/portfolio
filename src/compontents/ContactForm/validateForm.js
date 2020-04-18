export const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Well.. You forgot the name. ';
  }
  if (!/(.+)@(.+){2,}\.(.+){2,}/.test(values.email)) {
    errors.email = 'Hmm, that email looks strange. Can you double-check it? ';
  }

  return errors;
};

//name

//email
