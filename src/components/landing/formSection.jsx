"use client";

import React from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "motion/react";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string().required("Required"),
});

const FormSection = () => {
  return (
    <section className="section bg-offwhite">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Form */}
          <div className="lg:col-span-2 bg-cherry rounded-[30px] p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-nhd mb-4">
                Tell us your <br />
                Narrative vision *
              </h2>
              <p className="text-lg md:text-xl mb-12 opacity-90 font-sans">
                Every meaningful brand journey starts <br />
                with a conversation - we are listening!
              </p>

              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  phoneNumber: "",
                  email: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Field
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          className="w-full bg-white/10 border border-white/20 rounded-lg p-4 placeholder-white/60 focus:outline-none focus:border-white transition font-sans"
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-red-300 text-sm mt-1 font-sans"
                        />
                      </div>
                      <div>
                        <Field
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          className="w-full bg-white/10 border border-white/20 rounded-lg p-4 placeholder-white/60 focus:outline-none focus:border-white transition font-sans"
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="text-red-300 text-sm mt-1 font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Field
                          type="text"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          className="w-full bg-white/10 border border-white/20 rounded-lg p-4 placeholder-white/60 focus:outline-none focus:border-white transition font-sans"
                        />
                        <ErrorMessage
                          name="phoneNumber"
                          component="div"
                          className="text-red-300 text-sm mt-1 font-sans"
                        />
                      </div>
                      <div>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email Id"
                          className="w-full bg-white/10 border border-white/20 rounded-lg p-4 placeholder-white/60 focus:outline-none focus:border-white transition font-sans"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-300 text-sm mt-1 font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <Field
                        as="textarea"
                        name="message"
                        placeholder="Message..."
                        rows="4"
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-4 placeholder-white/60 focus:outline-none focus:border-white transition resize-none font-sans"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-300 text-sm mt-1 font-sans"
                      />
                    </div>

                    {/* Submit Button - Not explicitly shown but needed for form */}
                    {/* <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-white text-cherry px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition disabled:opacity-50 font-sans"
                    >
                      Submit
                    </button> */}
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex flex-col gap-4">
            {/* Address */}
            <div className="bg-beige rounded-[20px] p-6 flex items-start gap-4">
              <div className="bg-cherry rounded-full p-3 shrink-0 w-12 h-12 flex items-center justify-center">
                 <Image src="/images/formSection/address.svg" alt="Address" width={24} height={24} />
              </div>
              <div>
                <h3 className="text-xl font-nhd mb-1 text-charcoal">Address</h3>
                <p className="text-sm opacity-80 leading-relaxed text-charcoal font-sans">
                  LGF, MGF Metropolis Mall, MG Road, Gurgaon-122002, Haryana
                </p>
              </div>
            </div>

            {/* Call Us */}
            <div className="bg-beige rounded-[20px] p-6 flex items-center gap-4">
              <div className="bg-cherry rounded-full p-3 shrink-0 w-12 h-12 flex items-center justify-center">
                <Image src="/images/formSection/call.svg" alt="Call" width={24} height={24} />
              </div>
              <div>
                <h3 className="text-xl font-nhd mb-1 text-charcoal">Call Us</h3>
                <p className="text-sm opacity-80 text-charcoal font-sans">+91 99101 76157</p>
              </div>
            </div>

            {/* Email Us */}
            <div className="bg-beige rounded-[20px] p-6 flex items-center gap-4">
              <div className="bg-cherry rounded-full p-3 shrink-0 w-12 h-12 flex items-center justify-center">
                <Image src="/images/formSection/email.svg" alt="Email" width={24} height={24} />
              </div>
              <div>
                <h3 className="text-xl font-nhd mb-1 text-charcoal">Email Us</h3>
                <p className="text-sm opacity-80 text-charcoal font-sans">collab@theakaaiproject.com</p>
              </div>
            </div>

            {/* Download Deck */}
            <div className="bg-beige rounded-[20px] p-6 flex items-center gap-4">
              <div className="bg-cherry rounded-full p-3 shrink-0 w-12 h-12 flex items-center justify-center">
                <Image src="/images/formSection/deck.svg" alt="Deck" width={24} height={24} />
              </div>
              <div>
                <h3 className="text-xl font-nhd mb-1 text-charcoal">Download our Deck</h3>
                <a href="#" className="text-sm text-cherry underline underline-offset-4 font-medium font-sans">Download Now</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-charcoal text-white rounded-[20px] p-6 mt-auto">
              <h3 className="text-xl font-nhd mb-4">Follow Us on Social Media</h3>
              <div className="flex gap-4">
                 <a href="#" className="hover:opacity-80 transition">
                    <Image src="/images/formSection/linkedIn.svg" alt="LinkedIn" width={40} height={40} />
                 </a>
                 <a href="#" className="hover:opacity-80 transition">
                    <Image src="/images/formSection/insta.svg" alt="Instagram" width={40} height={40} />
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
