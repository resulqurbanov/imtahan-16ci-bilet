import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import "./style.scss";

const Addpage = () => {
  return (
    <Formik
      initialValues={{ description: '', title: '',imageUrl: '' }}
      validationSchema={Yup.object({
        description: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        title: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
          imageUrl: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
       
      })}
      onSubmit={(values) => {
        axios.post(`http://localhost:8282/categorie`,values)
           
       
      }}
    >
      <Form>
      <label htmlFor="imageUrl">Last Name</label>
        <Field name="imageUrl" type="text" />
        <ErrorMessage name="imageUrl" />

        <label htmlFor="description">First Name</label>
        <Field name="description" type="text" />
        <ErrorMessage name="description" />

        <label htmlFor="title">Last Name</label>
        <Field name="title" type="text" />
        <ErrorMessage name="title" />

        
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default Addpage