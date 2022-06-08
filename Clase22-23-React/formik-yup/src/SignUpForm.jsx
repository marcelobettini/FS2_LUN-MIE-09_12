import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"


const SignUpForm = () => {

    return (
        <Formik
            initialValues={{ firstName: "", lastName: "", email: "" }}
            validationSchema={Yup.object({
                firstName: Yup.string().min(2, "Min char count 2").max(15, "Max char count 15").required("Required"),
                lastName: Yup.string().min(3, "Min char count 3").max(20, "Max char count 20").required("Required"),
                email: Yup.string().email("Invalid email adress").required("Required")
            })}
            onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values))
                setSubmitting(false)
            }}
        >
            <Form>
                <label htmlFor="firstName">First name</label>
                <Field name="firstName" id="firstName" type="text" />
                <br />
                <ErrorMessage name='firstName' />
                <br />

                <label htmlFor="lastName">Last name</label>
                <Field name="lastName" id="lastName" type="text" />
                <br />
                <ErrorMessage name='lastName' />
                <br />

                <label htmlFor="email">First name</label>
                <Field name="email" id="email" type="text" />
                <br />
                <ErrorMessage name='email' />
                <br />
                <button type='submit'>Submit</button>
            </Form>
        </Formik>

    )

}
export default SignUpForm