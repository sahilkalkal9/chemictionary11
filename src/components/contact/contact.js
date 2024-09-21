// This example uses `@web3forms/react` plugin and tailwindcss for css styling
import "./contact.scss"
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import discord from "../../photos/discord.png"
import instagram from "../../photos/instagram.png"
import { Helmet } from "react-helmet"
import GoToTop from '../../top';

export default function Contact({ sentC }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  // Please update the Access Key in the .env
  const apiKey = process.env.PUBLIC_ACCESS_KEY || "e9ee9eda-6355-4e87-baca-56d2f7d900f9";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Chem",
      subject: "New Message Chemictionary",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  const clearMsg = () => {
    setTimeout(() => {
      document.getElementById("sent-message-one").style.display = "none";
    }, 5000)
  }
  const clearMsgTwo = () => {
    setTimeout(() => {
      document.getElementById("sent-message-two").style.display = "none";
    }, 5000)
  }

  return (
    <div className="contact-top" >
      <br />
      <div className="contact-container">


        <div className="Contact">

          <p className="categories-head" >Contact Us	</p>
          <p className="sub-search" id="cf" >We are open to suggestions and feedbacks.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">


            <input
              type="text"
              placeholder="Full Name"
              autoComplete="false"
              required
              className="contact-inputs"
              {...register("name")}
            />



            <input
              id="email_address"
              type="email"
              placeholder="Email Address"
              name="email"
              autoComplete="false"
              required
              className="contact-inputs"
              {...register("email")}
            />



            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="contact-inputs"
              {...register("message")}
            />


            <button
              type="submit"
              className="cat-home tfill submit-contact"
            >
              Submit

            </button>
          </form>
          {isSubmitSuccessful && isSuccess && (
            <>
              <p className="sub-search" id="sent-message-one">
                Message sent successfully
              </p>
              {
                clearMsg()

              }

            </>

          )}
          {isSubmitSuccessful && !isSuccess && (
            <>
              <p className="sub-search" id="sent-message-two">
                Something went wrong. Please try again.
              </p>
              {
                clearMsgTwo()

              }
            </>
          )}
          <br />
          <p className="sub-search" >OR</p><br />
          <div className="address" >
            {/* <p className="add-det" >Contact mobile :- +91 9650566054</p> */}
            <p className="add-det">E-mail at <a href="mailto:contact@chemictionary.com" className="add-det coe">contact@chemictionary.com</a></p>
            <p className="add-det">Call us at <a href="tel:+917982294822" className="add-det coe">+91 7982294822</a></p>
            <p className="add-det">Our Address :- G-79, Kunwar Singh Nagar, Nangloi, New Delhi - 110041</p>
            {/* <p className="add-det" >Operational Address :- G-79, Kunwar Singh Nagar, Nangloi, New Delhi - 110041</p> */}
          </div><br />
          <div className="social-icons">

            <img className="icon" src={discord} />
            <a href="https://instagram.com/chemictionary" target="blank" ><img className="icon" src={instagram} /></a>



          </div>

          <GoToTop />


        </div>
      </div>

    </div>


  );
}
