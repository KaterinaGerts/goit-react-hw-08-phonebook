import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './RegisterView.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
  .min(2, 'Too short name!')
  .max(50, 'Too long name!')
  .required('required field'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const RegisterView = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        const { name, email, password } = values;
        // const checkedName = contacts.find(
        //   contact => contact.name.toLowerCase() === name.toLowerCase(),
        // );
        // if (checkedName) {
        //   alert(`${name} is already in contacts!`);
        //   return contacts;
        // } dispatch(addContact({ name, number }));
        console.log(name, email, password);
      }}
    >
      <Form className={s.form}>
      <label htmlFor="name" className={s.label}>
          Name{' '}
        </label>
        <Field className={s.input} type="text" name="name" placeholder="Name" />
        <ErrorMessage name="name" />
        <label htmlFor="email" className={s.label}>
          Email
        </label>
        <Field
          className={s.input}
          type="email"
          name="email"
          placeholder="Email"
        />
        <ErrorMessage name="email" />
        <label htmlFor="password" className={s.label}>
          Password
        </label>
        <Field
          className={s.input}
          type="password"
          name="password"
          placeholder="Password"
        />
        <ErrorMessage name="password" />
        <button type="submit">Register</button>
        {/* <Button /> */}
      </Form>
    </Formik>
  )
}
