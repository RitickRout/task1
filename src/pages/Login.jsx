import './login.css'
import { Formik } from "formik";
import { useEffect } from 'react';
import * as Yup from "yup";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
});

const clientId = '145133945942-5g99tk6veacfobuv2sncsostih41rsag.apps.googleusercontent.com';

function Login() {
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (<>
        <Formik
            validationSchema={schema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
                alert(JSON.stringify(values));
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
            }) => (
                <div className="login">
                    <div className="form">
                        <form noValidate onSubmit={handleSubmit}>
                            <span className='text-primary h4 m-3'>Login</span>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder="Enter email id / username"
                                className="form-control inp_text"
                                id="email"
                            />
                            <p className="error">
                                {errors.email && touched.email && errors.email}
                            </p>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="Enter password"
                                className="form-control"
                            />
                            <p className="error">
                                {errors.password && touched.password && errors.password}
                            </p>
                            <button type="submit">Login</button>
                            <div className='mt-2'>
                                <GoogleLogin
                                    clientId={clientId}
                                    buttonText="Login with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />,
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </Formik>
    </>);
}

export default Login;