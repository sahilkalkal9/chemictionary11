import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import "./newsletter.scss"

function Newsletter() {

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
      from_name: "Chem-newsletter",
      subject: "For newsletter Chemictionary",
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
      document.getElementById("news-one").style.display = "none";
    }, 5000)
  }
  const clearMsgTwo = () => {
    setTimeout(() => {
      document.getElementById("news-two").style.display = "none";
    }, 5000)
  }
  return (
    <div className="news-container-prime">
      <center>
        <div className="new-container pr">
          <h2 className="welcome-user" > Newsletter</h2><br />
          <p className="prob-desc inn tjoin"> Want to get all latest news about Chemictionary?</p>
          <p className="sub-search"> Enter your email below to subscribe our newsletter.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="contact-form inc">
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
            <button
              type="submit"
              className="cat-home tfill"
            >
              Subscribe

            </button>
          </form>
          <p className="sub-search" id="ist" ></p>
          {isSubmitSuccessful && isSuccess && (
            <>
              <p className="sub-search" id="news-one" >
                Subscribed successfully.
              </p>
              {
                clearMsg()
              }
            </>

          )}
          {isSubmitSuccessful && !isSuccess && (
            <>
              <p className="sub-search" id="news-two">
                Something went wrong. Please try again
              </p>
              {
                clearMsgTwo()
              }
            </>
          )}
        </div>
      </center>
    </div>


  )
}

export default Newsletter;