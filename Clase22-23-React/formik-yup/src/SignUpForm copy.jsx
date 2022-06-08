import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"

//Un validaror a medida hecho con JS (un tanto básico, pero mejor que no aplicar validaciones)
//Las claves de esta función de validación son simétricas a nuestos values/initialValues
// const validate = (values) => {
//     const errors = {};
//     if (!values.firstName) {
//         errors.firstName = "Required"
//     } else if (values.firstName.length > 15) {
//         errors.firstName = "Must be 15 characters or less"
//     }
//     if (!values.lastName) {
//         errors.lastName = "Required"
//     } else if (values.lastName.length > 20) {
//         errors.lastName = "Must be 20 characters or less"
//     }

//     if (!values.email) {
//         errors.email = "Required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = "Invalid email address"
//     }
//     return errors
// }



const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().min(2, "Min char count 2").max(15, "Max char count 15").required("Required"),
            lastName: Yup.string().min(3, "Min char count 3").max(20, "Max char count 20").required("Required"),
            email: Yup.string().email("Invalid email adress").required("Required")
        }),
        onSubmit: (values) => {
            console.log("Estoy procesando el evento submit del form")
            alert(JSON.stringify(values, null, 2));
        },
    })
    // getFieldProps()
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                autoFocus
                type="text"
                name="firstName"
                id="firstName"

                //Previo a formik.getFieldProps()
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.firstName}

                //Con formik.getFieldProps()
                {...formik.getFieldProps("firstName")}
            />

            {/* Esta es una forma más declarativa */}
            {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}


            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                name="lastName"
                id="lastName"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.lastName}
                {...formik.getFieldProps("lastName")}

            />

            {/* Esta es una forma más expeditiva */}

            {formik.touched.lastName && formik.errors.lastName && <div>{formik.errors.lastName}</div>}


            <br />
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                id="email"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
                {...formik.getFieldProps("email")}
            />
            <div>
                {formik.touched.email && formik.errors.email && formik.errors.email}

            </div>
            <br />
            <input type="submit"></input>
        </form>
    )
}

export default SignUpForm