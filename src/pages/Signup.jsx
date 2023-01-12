import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
    .min(4, 'First Name! Length should be minimum 4')
    .max(50, 'Too Long!')
    .required('First Name is required'),
    lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string()
    .email('Invalid email')
    .required('Required'),
    password: Yup.string()
    .required('Please Enter your password')
    .min(5, "Your password must be longer than 5 characters.")
    .max(25, 'Too Long!')
    .matches(/^(?=.{6,})/, "Must Contain 6 Characters") 
    .matches(  /^(?=.*[a-z])(?=.*[A-Z])/,"Must Contain One Uppercase, One Lowercase")
    .matches(/^(?=.*[!@#\$%\^&\*])/,"Must Contain One Special Case Character")
    .matches(/^(?=.{6,20}$)\D*\d/, "Must Contain One Number"),
    confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'), <br/>], 'Passwords must match')
    .required('Confirm Password is required')
});

export const Signup = () => (
    <div className='form mt-5'>
        <h1>Signup</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password:'',
                confirmpassword:''
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
       
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className="mb-3">
                        <Field name="firstName" placeholder='FirstName' />
                        {errors.firstName && touched.firstName ? (
                            <span className='text-danger'>{errors.firstName}</span>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <Field name="lastName" placeholder='LastName' />
                        {errors.lastName && touched.lastName ? (
                            <span className='text-danger'>{errors.lastName}</span>
                        ) : null}
                    </div>
                    <div className="mb-3"> <Field name="email"  placeholder='Email' />
                        {errors.email && touched.email ? <span className='text-danger'>{errors.email}</span> : null}</div>
                        <div className="mb-3">
                        <Field name="password" placeholder='Password' type='password'/>
                        {errors.password && touched.password ? (
                            <span className='text-danger'>{errors.password}</span>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <Field name="confirmpassword" placeholder='Confirm Password' type='password' />
                        {errors.confirmpassword && touched.confirmpassword ? (
                            <span className='text-danger'>{errors.confirmpassword}</span>
                        ) : null}
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);

// import { useFormik } from 'formik'
// import * as Yup from 'yup'
// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'


// const Signup = () => {

//     const [error,setError]=useState('')
//     const navigate = useNavigate()
//     const initialValues = {
//         fname: '',
//         lname: '',
//         username: '',
//         age: '',
//         email: '',
//         password: '',
//         cpassword: ''
//     };

//     const signUpSchema = Yup.object().shape({
//         fname: Yup.string()
//              .min(4, 'First Name! Length should be minimum 4')
//              .max(50, 'Too Long!')
//             .required('First Name is required'),
//         lname: Yup.string()
//           .min(4, 'Last Name! Length should be minimum 4')
//           .max(50, 'Too Long!')
//             .required('Last Name is required'),
//         username: Yup.string()
//             .min(4, 'username Length should be minimum 4')
//             .required('username is required'),
//         age: Yup.string()
//              .max(3, 'Should be less than 4!')
//             .required('Age is required'),
//         email: Yup.string()
//             .email('Email is invalid')
//             .required('Email is required'),
//         password: Yup.string()
//             .required('Please Enter your password')
//             .min(5, "Your password must be longer than 5 characters.")
//             .max(25)
//             .matches(/^(?=.{6,})/, "Must Contain 6 Characters")
//             .matches(
//                 /^(?=.*[a-z])(?=.*[A-Z])/,
//                 "Must Contain One Uppercase, One Lowercase"
//             )
//             .matches(
//                 /^(?=.*[!@#\$%\^&\*])/,
//                 "Must Contain One Special Case Character"
//             )
//             .matches(/^(?=.{6,20}$)\D*\d/, "Must Contain One Number"),
//         cpassword: Yup.string()
//             .oneOf([Yup.ref('password'), <br/>], 'Passwords must match')
//             .required('Confirm Password is required')
//     });

//     //Intialise and destructure useFormik hook
//     const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
//         initialValues: initialValues,
//         validationSchema: signUpSchema,
//         onSubmit: (values) => {
//             console.log(values,"Call api here");
          
//         }

//     });

//     return (
//         <Container className='p-5 w-25 signup mt-4'>
//             <div className='text-center '>
//                 <h1 classname='' >Sign Up</h1>
//             </div>
//             <Form onSubmit={handleSubmit} >
//                         <Form.Group controlId='fname' className='py-1'>
//                             <Form.Control
//                                 type='text'
//                                 name="fname"
//                                 placeholder='Enter First Name'
//                                 maxLength="15"
//                                 value={values.fname}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                             ></Form.Control>
//                             {errors.fname && touched.fname ? <span className='text-danger'>{errors.fname}</span> : <br/>}
//                         </Form.Group>
//                         <Form.Group controlId='lname' className='py-1'>
//                             <Form.Control
//                                 type='text'
//                                 name="lname"
//                                 maxLength="15"
//                                 placeholder='Enter  Last Name'
//                                 value={values.lname}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                             ></Form.Control>
//                             {errors.lname && touched.lname ? <span className='text-danger'>{errors.lname}</span> : <br/>}
//                         </Form.Group>
//                         <Form.Group controlId='username' className='py-1'>
//                             <Form.Control
//                                 type='text'
//                                 name="username"
//                                 maxLength="15"
//                                 placeholder='Enter username'
//                                 value={values.username}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                             ></Form.Control>
//                             {errors.username && touched.username ? <span className='text-danger'>{errors.username}</span> : <br/>}
//                         </Form.Group>
//                         <Form.Group controlId='age' className='py-1'>
//                             <Form.Control
//                                 type='number'
//                                 name="age"
//                                 maxLength="6"
//                                 placeholder='Enter age'
//                                 value={values.age}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                             ></Form.Control>
//                             {errors.age && touched.age ? <span className='text-danger'>{errors.age}</span> : <br/>}
//                         </Form.Group>
//                 <Form.Group controlId='email' className='py-1'>

//                     <Form.Control
//                         type='email'
//                         name="email"
//                         maxLength="30"
//                         placeholder='Enter email'
//                         value={values.email}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                     ></Form.Control>
//                     {errors.email && touched.email ? <span className='text-danger'>{errors.email}</span> : <br/>}
//                 </Form.Group>
//                 <Form.Group controlId='password' className='py-1'>
//                     <Form.Control
//                         type='password'
//                         name="password"
//                         maxLength="15"
//                         placeholder='Enter password'
//                         value={values.password}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                     ></Form.Control>
//                     {errors.password && touched.password ? <span className='text-danger'>{errors.password}</span> : <br/>}
//                 </Form.Group>

//                 <Form.Group controlId='confirmpassword' className='py-1'>
//                                <Form.Control
//                         type='password'
//                         name="cpassword"
//                         maxLength="15"
//                         placeholder='Re-enter password'
//                         value={values.cpassword}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                     ></Form.Control>
//                     {errors.cpassword && touched.cpassword ? <span className='text-danger'>{errors.cpassword}</span> : <br/>}
//                 </Form.Group>
//                 <div className='text-center'>
//                     <Button type='submit' variant='outline- dark' className='btn btn-primary'>
//                         Sign Up
//                     </Button> <br />

//                     {(error)?<span className='text-danger'>{error}</span>:""}

//                 </div>
//             </Form>
//         </Container>
//     )
// }

// export default Signup
