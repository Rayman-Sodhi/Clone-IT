import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import RouterLink from "./../../components/link/RouterLink";
import { auth, createUserProfileDocument } from "../../firebase.utils";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <div className="register">
      <Alert
        show={show}
        variant="danger"
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>Oops! You got an error!</Alert.Heading>
        <p>{error}</p>
      </Alert>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(1, "Must have a character")
            .max(255, "Must be shorter than 255 characters")
            .required("Name is required"),
          email: Yup.string()
            .email("Must be a valid email address")
            .max(255, "Must be shorter than 255 characters")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "At least 6 characters")
            .max(255)
            .required("Password is required"),
          //   .matches(
          //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
          //     "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          // )
          passwordConfirmation: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password must match")
            .required("Password confirm is required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setLoading(true);
          setSubmitting(true);

          auth
            .createUserWithEmailAndPassword(values.email, values.password)
            .then((user) => {
              createUserProfileDocument(user, { name: values.name });
            })
            .then(() => {
              setLoading(false)
              navigate("/auth");
            })
            .catch((err) => {
              setError(err.message);
              setLoading(false);
              setShow(true);
            });

          resetForm();
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form className="register__form" onSubmit={handleSubmit}>
            <p className="register__form--title">Create account</p>
            <Form.Group>
              <Form.Label className="register__form--lable">
                Your name
              </Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (
                <Form.Text className="text-danger">{errors.name}</Form.Text>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label className="register__form--lable">Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label className="register__form--lable">
                Password
              </Form.Label>
              <Form.Control
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                placeholder="At least 6 characters"
                autoComplete="on"
              />
              {touched.password && errors.password && (
                <Form.Text className="text-danger">{errors.password}</Form.Text>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label className="register__form--lable">
                Re-enter password
              </Form.Label>
              <Form.Control
                type="password"
                id="passwordConfirmation"
                name="passwordConfirmation"
                onChange={handleChange}
                value={values.passwordConfirmation}
                onBlur={handleBlur}
                placeholder="password"
                autoComplete="on"
              />
              {touched.passwordConfirmation && errors.passwordConfirmation && (
                <Form.Text className="text-danger">
                  {errors.passwordConfirmation}
                </Form.Text>
              )}
            </Form.Group>
            <Button
              type="submit"
              className="register__form--button"
              block
              disabled={isSubmitting}
            >
              {loading ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                <span> Create your Amazon account</span>
              )}
            </Button>
            <div className="register__form--footer">
              <p>
                By creating an account, you agree to Amazon's Conditions of Use
                and Privacy Notice.
              </p>
              <RouterLink to="/auth">
                <p>
                  Already have an account ? <span>Sign-In</span>
                </p>
              </RouterLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
