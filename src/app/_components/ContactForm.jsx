"use client";

import { Formik } from 'formik';
import AppData from "@data/app.json";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  return (
    <>
        {/* contact form */}
        <Formik
        initialValues = {{ user_email: '', user_name: '', message: '' }}
        validate = { values => {
            const errors = {};
            if (!values.user_email) {
                errors.user_email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)
            ) {
                errors.user_email = 'Invalid email address';
            }
            return errors;
        }}
        onSubmit = {( values, { setSubmitting } ) => {
            const form = document.getElementById("contactForm");
            const status = document.getElementById("contactFormStatus");

            emailjs
            .sendForm('service_9m17vsp', 'template_nvhyc87', form, {
                publicKey: 'C-LUfZPc11QRxVspI',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    status.innerHTML = "<h5>Thanks, your message is sent successfully.</h5>";
                    status.style.display = 'block';
                    form.reset();
                },
                (error) => {
                    console.log('FAILED...', error);
                    status.innerHTML = "<h5>Oops! There was a problem submitting your form</h5>";
                },
            );

            setSubmitting(false);
        }}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => (
        <form onSubmit={handleSubmit} id="contactForm" action={AppData.settings.formspreeURL} className="mil-form">
            <div className="row">
                <div className="col-6 mil-mb30">
                    <input 
                        type="text" 
                        placeholder="Name"
                        name="user_name" 
                        id="user_name"
                        className="mil-up"
                        required="required" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name} 
                    />
                </div>
                <div className="col-6 mil-mb30">
                    <input 
                        type="email" 
                        id="user_email"
                        className="mil-up"
                        placeholder="Email"
                        name="user_email"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email} 
                    />
                </div>
                <div className="col-12">
                    <textarea 
                        placeholder="Your message"
                        name="message" 
                        id="message"
                        className="mil-mb30 mil-up"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message} 
                    />
                    <div className="mil-up"><button className="mil-btn mil-c-gone" type="submit">Send Message</button></div>

                    <div className="form-status alert-success mil-p-30-0" id="contactFormStatus" style={{"display": "none"}} />
                </div>
            </div>
        </form>
        )}
        </Formik>
        {/* contact form end */}
    </>
  );
};
export default ContactForm;