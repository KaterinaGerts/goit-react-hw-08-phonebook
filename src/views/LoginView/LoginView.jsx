import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './LoginView.module.css';

const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const LoginView = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        const { email, password } = values;
        // const checkedName = contacts.find(
        //   contact => contact.name.toLowerCase() === name.toLowerCase(),
        // );
        // if (checkedName) {
        //   alert(`${name} is already in contacts!`);
        //   return contacts;
        // } dispatch(addContact({ name, number }));
        console.log(email, password);
      }}
    >
      <Form className={s.form}>
        <label htmlFor="name" className={s.label}>
          Email
        </label>
        <Field
          className={s.input}
          type="email"
          name="email"
          placeholder="Email"
        />
        <ErrorMessage name="email" />
        <label htmlFor="name" className={s.label}>
          Password
        </label>
        <Field
          className={s.input}
          type="password"
          name="password"
          placeholder="Password"
        />
        <ErrorMessage name="password" />
        <button type="submit">Log in</button>
        {/* <Button /> */}
      </Form>
    </Formik>
  );
};

export default LoginView;