import "./invest.scss"
// import invest from "./invest.svg"
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { Helmet } from "react-helmet";
import GoToTop from '../../top';


function Invest() {
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
	const apiKey = process.env.PUBLIC_ACCESS_KEY || "963720d9-f917-4837-8811-dbf08cce789a";

	const { submit: onSubmit } = useWeb3Forms({
		access_key: apiKey,
		settings: {
			from_name: "Chem-in",
			subject: "Investor",
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
			document.getElementById("invest-sent-one").style.display = "none";
		}, 5000)
	}
	const clearMsgTwo = () => {
		setTimeout(() => {
			document.getElementById("invest-sent-two").style.display = "none";
		}, 5000)
	}


	return (
		<div className="Invest Categories">
			<br />
			<div className="invest-container">
				<p className="prob-desc tjoin" >Welcome,</p>
				<p className="prob-desc inn tjoin"> Do you find our idea interesting?</p>
				<p className="prob-desc inn tjoin"> If you want to invest in our company ChemistryWorld, connect with us.</p>
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
						Submit

					</button>
				</form>
				<p className="sub-search" id="ist" ></p>
				{/*<a href="mailto:ChemistryWorld11@gmail.com" className="cat-home">Mail Us </a>*/}
				{isSubmitSuccessful && isSuccess && (
					<>
						<p className="sub-search inst" id="invest-sent-one">
							Email sent successfully, we will contact you soon.
						</p>
						{
							clearMsg()

						}
					</>



				)}
				{isSubmitSuccessful && !isSuccess && (
					<>
						<p className="sub-search" id="invest-sent-two">
							Something went wrong. Please try later
						</p>
						{
							clearMsgTwo()

						}
					</>
				)}
			</div>
			<GoToTop />
		</div>
	)
}

export default Invest;