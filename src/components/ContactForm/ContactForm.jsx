import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

export const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const contactScheme = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("This is a required field"),
    number: Yup.string()
      .matches(
        /^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{2,6}$/,
        "Invalid phone number"
      )
      .required("This is a required field"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={contactScheme}
      onSubmit={(values, actions) => {
        onAdd({ id: nanoid(), ...values });
        actions.resetForm();
      }}
    >
      <Form className={s.form}>
        <div className={s.formGroup}>
          <label htmlFor={nameFieldId}>Name:</label>
          <Field className={s.field} type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" className={s.error} component="span" />
        </div>

        <div className={s.formGroup}>
          <label htmlFor={numberFieldId}>Number:</label>
          <Field
            className={s.field}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage name="number" className={s.error} component="span" />
        </div>

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
