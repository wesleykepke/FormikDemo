import React from "react";
import { withFormik } from "formik";

import {
  Title,
  RootWrapper,
  FormWrapper,
  InputWrapper,
  SubmitButtonWrapper,
  ErrorWrapper
} from "./LoginFormStyles.js";

import { EMAIL_REGEX } from "./Constants";

function FormikDemo(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;

  return (
    <RootWrapper>
      <Title>Welcome to Formik (for BeerJS: Reno)</Title>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <InputWrapper
            placeholder="email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />

          {errors.email && touched.email && (
            <ErrorWrapper>{errors.email}</ErrorWrapper>
          )}

          <InputWrapper
            placeholder="password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <SubmitButtonWrapper type="submit" disabled={isSubmitting}>
            Get Beer
          </SubmitButtonWrapper>
        </form>
      </FormWrapper>
    </RootWrapper>
  );
}

export default withFormik({
  mapPropsToValues: props => ({
    email: "",
    password: ""
  }),
  validate: values => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required.";
    } else if (!EMAIL_REGEX.exec(values.email)) {
      errors.email = "Invalid email format";
    }

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }
})(FormikDemo);
