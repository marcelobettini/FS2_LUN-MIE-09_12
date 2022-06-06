import React from 'react'
import { useFormik } from 'formik'

//Un validaror a medida hecho con JS (un tanto básico, pero mejor que no aplicar validaciones)
//Las claves de esta función de validación son simétricas a nuestos values/initialValues
const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = "Required"
    } else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less"
    }
    if (!values.lastName) {
        errors.lastName = "Required"
    } else if (values.lastName.length > 20) {
        errors.lastName = "Must be 20 characters or less"
    }

    if (!values.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address"
    }
    return errors
}



const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        validate,
        onSubmit: (values) => {
            console.log("Estoy procesando el evento submit del form")
            alert(JSON.stringify(values, null, 2));
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName} />
            <div>
                {formik.errors.firstName && formik.errors.firstName}

            </div>
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName} />

            <div>
                {formik.errors.lastName && formik.errors.lastName}

            </div>
            <br />
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email} />
            <div>
                {formik.errors.email && formik.errors.email}

            </div>
            <br />
            <input type="submit"></input>
        </form>
    )
}

export default SignUpForm