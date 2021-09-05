import React, {useState} from 'react';
import style from './Feedback.module.scss'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';
import {AnimationForButton} from "../animation/animationForButton/AnimationForButton";


export const Feedback: React.FC = () => {

    const formik = useFormik({

        initialValues: {
            from_name: '',
            to_name: 'theone116355@gmail.com',
            phone: '',
            reply_to: '',
            message: ''
        },
        validationSchema: Yup.object({
            from_name: Yup.string()
                .required('* Name field is required'),
            phone: Yup.number()
                .required('* Phone field is required'),
            reply_to: Yup.string().email('Invalid email address')
                .required('* Email field is required'),
            message: Yup.string().required('* Message field is required')
        }),
        onSubmit: (values) => {
            try {
                emailjs.send('my_gmail',
                    'template_4w72xpz',
                    values,
                    'user_thYeE0wo9OLmec6U9vdht')
                    .then(() => {
                        formik.setSubmitting(false);
                        formik.resetForm();
                    });
            } catch {
                formik.setSubmitting(false);
            }
        },
    });

    return (
        <form className={style.container} onSubmit={formik.handleSubmit}>
            <div className={style.colSm12}>
                <div className={style.formGroup}>
                    <label htmlFor="from_name"/>
                    <input
                        className={style.formControl}
                        id="from_name"
                        name="from_name"
                        type="text"
                        autoComplete="off"
                        placeholder="YOUR NAME"
                        onChange={formik.handleChange}
                        value={formik.values.from_name}
                    />
                    <span className={style.error}>
                        {formik.touched.from_name && formik.errors.from_name && formik.errors.from_name}
                    </span>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="phone"/>
                    <input
                        className={style.formControl}
                        id="phone"
                        name="phone"
                        type="text"
                        autoComplete="off"
                        placeholder="YOUR PHONE"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                    <span className={style.error}>
                        {formik.touched.phone && formik.errors.phone && formik.errors.phone}
                    </span>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="reply_to"/>
                    <input
                        className={style.formControl}
                        id="reply_to"
                        type="email"
                        name="reply_to"
                        placeholder="YOUR EMAIL"
                        autoComplete="off"
                        onChange={formik.handleChange}
                        value={formik.values.reply_to}
                    />
                    <span className={style.error}>
                        {formik.touched.reply_to && formik.errors.reply_to && formik.errors.reply_to}
                    </span>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="message"/>
                    <textarea
                        className={style.formControl}
                        id="message"
                        name="message"
                        placeholder="YOUR MESSAGE"
                        autoComplete="off"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                    />
                    <span className={style.error}>
                        {formik.touched.message && formik.errors.message && formik.errors.message}
                    </span>
                </div>
                <div className={`${style.formGroup} ${style.button}`}>
                    <AnimationForButton>
                        <button disabled={formik.isSubmitting} type="submit" className={style.link}>
                            Send Message
                        </button>
                    </AnimationForButton>
                </div>
                <div className="col-12 form-message">
                    <span id='output' className="output_message text-center text-uppercase"/>
                </div>
            </div>
        </form>
    );
};