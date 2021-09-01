import React from "react";
import { Formik, Form, Field } from "formik";
import style from './Feedback.module.scss'
import {Animation3} from "../animation/ani3/Animation3";


export  const Feedback = () => {
    // Messages
    const required = "This field is required";
    const maxLength = "Your input exceed maximum length";

    // Error Component
    const errorMessage = (error: any) => {
        return <div className="invalid-feedback">{error}</div>;
    };

    const validateUserName = (value: any) => {
        let error;
        if (!value) {
            error = required;
        } else if (value.length > 12) {
            error = maxLength;
        }
        return error;
    };

    const validateEmail = (value: any) => {
        let error;
        if (!value) {
            error = required;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = "Invalid email address";
        }
        return error;
    };

    const validateMobileNumber = (value: any) => {
        let error;
        if (value.length > 12) {
            error = maxLength;
        }
        return error;
    };

    return (

            <Formik
                initialValues={{username: "", mobileNumber: "", email: "",}}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ errors, touched}) => (
                    <div className={style.container}>
                        <div className={style.colSm12}>
                            <Form>
                                <div className={style.formGroup}>
                                    <Field
                                        className={style.formControl}
                                        type="text"
                                        placeholder="Name"
                                        name="username"
                                        validate={validateUserName}
                                    />
                                    <span className={style.error}>
                                        {errors.username && touched.username && errorMessage(errors.username)}
                                    </span>
                                </div>
                                <div className={style.formGroup}>
                                    <Field
                                        type="email"
                                        name="email"
                                        className={style.formControl}
                                        placeholder="Email"
                                        validate={validateEmail}
                                    />
                                    <span>
                                        {errors.email && touched.email && errorMessage(errors.email)}
                                    </span>
                                </div>
                                <div className={style.formGroup}>
                                    <Field
                                        className={style.formControl}
                                        type="tel"
                                        placeholder="Phone"
                                        name="mobileNumber"
                                        validate={validateMobileNumber}
                                    />
                                    <span>
                                    {errors.mobileNumber && touched.mobileNumber && errorMessage(errors.mobileNumber)}
                                    </span>
                                </div>
                                <div className={style.formGroup}>
                                    <Field
                                        component="textarea"
                                        className={style.formControl}
                                        name="About"
                                        placeholder="Message"
                                    />
                                </div>
                                <div className={`${style.formGroup} ${style.button}`}>
                                    <Animation3 value={'Send Message'}/>
                                </div>
                            </Form>
                        </div>
                    </div>
                )}
            </Formik>

    );
}

