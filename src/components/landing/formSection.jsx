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
    <section className="bg-offwhite py-24" id="formSection">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Form */}
          <div className="lg:col-span-2 bg-cherry rounded-[30px] p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-normal mb-4">
                Tell us your <br />
                Narrative vision *
              </h2>
              <p className="text-lg md:text-xl mb-12 opacity-90">
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
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdS4dvxQiVCX-1gI9QcF9CVvx7n3RBDHkVSPzGMW_eQ4BHbUg/formResponse";
                  
                  const formData = new FormData();
                  formData.append("entry.1508006951", values.firstName);
                  formData.append("entry.2047362165", values.lastName);
                  formData.append("entry.481613425", values.phoneNumber);
                  formData.append("entry.1798456278", values.email);
                  formData.append("entry.182023449", values.message);
                  formData.append("fvv", "1");
                  formData.append("fbzx", "-6563299944563589162");
                  formData.append("pageHistory", "0");

                  try {
                    await fetch(GOOGLE_FORM_ACTION_URL, {
                      method: "POST",
                      mode: "no-cors",
                      body: formData,
                    });
                    alert("Thank you! Your message has been sent.");
                    resetForm();
                  } catch (error) {
                    console.error("Form submission error", error);
                    alert("Something went wrong. Please try again.");
                  } finally {
                    setSubmitting(false);
                  }
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
                          className="w-full bg-white/10 border border-white/20 rounded-lg p-4 placeholder-white/60 focus:outline-none focus:border-white transition"
                        />

                      </div>
                      <div>
                        <Field
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          className="w-full bg-white/10 border border-white/20 rounded-lg p-4 placeholder-white/60 focus:outline-none focus:border-white transition"
                        />

                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Field
                          type="text"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          className="w-full bg-white/10 border border-white/20 rounded-lg p-4 placeholder-white/60 focus:outline-none focus:border-white transition"
                        />

                      </div>
                      <div>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email Id"
                          className="w-full bg-white/10 border border-white/20 rounded-lg p-4 placeholder-white/60 focus:outline-none focus:border-white transition"
                        />

                      </div>
                    </div>

                    <div>
                      <Field
                        as="textarea"
                        name="message"
                        placeholder="Message..."
                        rows="4"
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-4 placeholder-white/60 focus:outline-none focus:border-white transition resize-none"
                      />

                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-white text-black px-8 py-4 rounded-full font-medium border-2 border-transparent hover:bg-[#8B1E1E] hover:text-white hover:border-white transition-all duration-300 disabled:opacity-50 cursor-pointer"
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex flex-col gap-4 h-full">
            {/* Address */}
            <div className="bg-beige rounded-[20px] p-6 flex-1 flex items-start gap-4">
              <div className="bg-cherry rounded-full p-3 shrink-0 w-12 h-12 flex items-center justify-center">
                 <Image src="/images/formSection/address.svg" alt="Address" width={24} height={24} unoptimized />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1 text-charcoal">Address</h3>
                <p className="text-sm opacity-80 leading-relaxed text-charcoal">
                  LGF, MGF Metropolis Mall, MG Road, Gurgaon-122002, Haryana
                </p>
              </div>
            </div>

            {/* Call Us */}
            <a href="tel:+919910176157" className="bg-beige rounded-[20px] p-6 flex-1 flex items-center gap-4 hover:brightness-95 transition-all duration-300">
              <div className="bg-cherry rounded-full p-3 shrink-0 w-12 h-12 flex items-center justify-center">
                <Image src="/images/formSection/call.svg" alt="Call" width={24} height={24} unoptimized />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1 text-charcoal">Call Us</h3>
                <p className="text-sm opacity-80 text-charcoal">+91 99101 76157</p>
              </div>
            </a>

            {/* Email Us */}
            <a href="mailto:collab@theakaaiproject.com" className="bg-beige rounded-[20px] p-6 flex-1 flex items-center gap-4 hover:brightness-95 transition-all duration-300">
              <div className="bg-cherry rounded-full p-3 shrink-0 w-12 h-12 flex items-center justify-center">
                <Image src="/images/formSection/email.svg" alt="Email" width={24} height={24} unoptimized />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1 text-charcoal">Email Us</h3>
                <p className="text-sm opacity-80 text-charcoal">collab@theakaaiproject.com</p>
              </div>
            </a>

            {/* Download Deck */}
            <div className="bg-beige rounded-[20px] p-6 flex-1 flex items-center gap-4">
              <div className="bg-cherry rounded-full p-3 shrink-0 w-12 h-12 flex items-center justify-center">
                <Image src="/images/formSection/deck.svg" alt="Deck" width={24} height={24} unoptimized />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1 text-charcoal">Download our Deck</h3>
                <a href="#" className="text-sm text-cherry underline underline-offset-4 font-medium">Download Now</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-charcoal text-white rounded-[20px] p-6 flex-1">
              <h3 className="text-xl font-medium mb-4">Follow Us on Social Media</h3>
              <div className="flex gap-4">
                 <a href="https://www.linkedin.com/company/the-akaai-project/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                    <Image src="/images/formSection/linkedIn.svg" alt="LinkedIn" width={40} height={40} unoptimized />
                 </a>
                 <a href="https://www.instagram.com/theakaaiproject/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                    <Image src="/images/formSection/insta.svg" alt="Instagram" width={40} height={40} unoptimized />
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
