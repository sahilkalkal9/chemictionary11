import "./subscription.scss"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import nothing from "./empty.svg"
import GooglePayButton from "@google-pay/button-react"
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import React, { useEffect } from 'react';
import gp from "../../photos/google.png"
import gv from "../../photos/verifygold.png"
import pla from "../../photos/verify.png"
import trp from "../../photos/tv.png"
import 'firebase/compat/functions';
import { useState } from "react";
import cors from 'cors';
import { Timestamp } from 'firebase/firestore';


import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyAsZGzJ4H2IHGbs1o4B3PsvLdBZ6zsOS18",
    authDomain: "chemictionary-60829.firebaseapp.com",
    projectId: "chemictionary-60829",
    storageBucket: "chemictionary-60829.appspot.com",
    messagingSenderId: "182434808541",
    appId: "1:182434808541:web:4f584eeccf87cfa5269134",
    measurementId: "G-FE96Z49WV1"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
// const app = firebase.initializeApp(config);
// const functions = firebase.functions(app);


export default function Subscription({ endTrial }) {

    const [user] = useAuthState(auth);
    const [data, setData] = useState(null);





 
    // const {uid } = auth.currentUser;

    useEffect(() => {
        const rzpPaymentForm = document.getElementById("rzp_payment_form");
        const rzpPaymentFormTwo = document.getElementById("rzp_payment_form_two");

        if (user) {
            if (!rzpPaymentForm.hasChildNodes()) {

                const script = document.createElement("script");
                script.src = "https://checkout.razorpay.com/v1/payment-button.js";
                script.async = true;
                script.dataset.payment_button_id = "pl_LjLr9ufwHhEkAI";
                rzpPaymentForm.appendChild(script);

            }


            if (!rzpPaymentFormTwo.hasChildNodes()) {

                const script = document.createElement("script");
                script.src = "https://checkout.razorpay.com/v1/payment-button.js";
                script.async = true;
                script.dataset.payment_button_id = "pl_LjMYIBglMMxREa";
                rzpPaymentFormTwo.appendChild(script);

            }

        }

    })
    const payRef = firestore.collection("payments");
    const [paidRef] = useCollectionData(payRef);
    const signInWithGoogle = () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    //   const
    let tstart, d, end;

    const timestamp = firebase.firestore.Timestamp.now();
    const tsdate = timestamp.toDate();
    tsdate.setDate(tsdate.getDate() + 3)
    const tsend = firebase.firestore.Timestamp.fromDate(tsdate);



    const enableFreeTrial = () => {


        const triaRef = firestore.collection('payments').doc(auth.currentUser.uid);
        // create two timestamps




        triaRef.update({
            trial: 'running',
            gold: 'unpaid',
            platinum: 'unpaid',
            tstart: timestamp,
            tend: tsend,
        })








    }






















    return (
        <div className="subscription-container" >
            <div className="Subscription">
                <center><p className=" cst">Choose your subscription plan</p></center><br />
                <div className="categories-container">
                    {
                        user
                            ? (
                                paidRef && paidRef.map((pt) => (
                                    pt.did == auth.currentUser.uid
                                        ? (
                                            pt.gold == "paid" && pt.platinum == "unpaid" && pt.trial == "finished"
                                                ? (
                                                    <>
                                                        {/* <br />
                                                        <center><p className="sub-search" >Your free trial has ended.</p></center> */}
                                                    </>
                                                )
                                                : (
                                                    pt.gold == "unpaid" && pt.platinum == "paid" && pt.trial == "finished"
                                                        ? (
                                                            <>
                                                                {/* <br />
                                                                <center><p className="sub-search" >Your free trial has ended.</p></center> */}
                                                            </>
                                                        )
                                                        : (
                                                            pt.gold == "unpaid" && pt.platinum == "unpaid" && pt.trial == "running"
                                                                ? (
                                                                    <>
                                                                        {/* <br />
                                                                        <center><p className="sub-search" >Your free trial has ended.</p></center> */}
                                                                    </>
                                                                )
                                                                : (
                                                                    pt.gold == "unpaid" && pt.platinum == "unpaid" && pt.trial == "finished"
                                                                        ? (
                                                                            <>
                                                                                {/* <br />
                                                                                <center><p className="sub-search" >Your free trial has ended.</p></center> */}
                                                                            </>
                                                                        )
                                                                        : (
                                                                            <>


                                                                                <div className="sub-box">
                                                                                    <div className="category-content">
                                                                                        {/* <img className="cat-img" alt={c.al} src={c.sr} /> */}
                                                                                        <div className="sub-name"><h1>Trial</h1><img className="mode" src={trp} /> </div>
                                                                                        <div className="amt-section" ><h3 className="amt" >Free</h3><p className="sub-list-con">for 3 days</p></div><br />
                                                                                        <div className="sub-list" >
                                                                                            <p className="sub-list-con" >Access of each and everything</p>
                                                                                            <p className="sub-list-con" >Save content in your collection</p>
                                                                                            <p className="sub-list-con" >Doubt solving session (chat)</p>
                                                                                        </div>

                                                                                        <br /><br />

                                                                                        <center><p className="sign-g" onClick={enableFreeTrial} id="stft" >Start a free trial of 3 days</p></center>
                                                                                        <br />




                                                                                    </div>

                                                                                </div>




                                                                            </>
                                                                        )
                                                                )
                                                        )
                                                )
                                        )
                                        : console.log()
                                ))
                            )
                            : (
                                <>


                                    <div className="sub-box ">
                                        <div className="category-content">
                                            {/* <img className="cat-img" alt={c.al} src={c.sr} /> */}
                                            <div className="sub-name"><h1>Trial</h1><img className="mode" src={trp} /> </div>
                                            <div className="amt-section" ><h3 className="amt" >3-days</h3><p className="sub-list-con"></p></div><br />
                                            <div className="sub-list" >
                                                <p className="sub-list-con" >Access of each and everything</p>
                                                <p className="sub-list-con" >Save content in your collection</p>
                                                <p className="sub-list-con" >Doubt solving session (chat)</p>
                                            </div>

                                            <br /><br />



                                            <center><button id='signin-g' className="login-with-google-btn" onClick={signInWithGoogle} >Log in to proceed</button></center>
                                            
                                            <br />



                                        </div>

                                    </div>



                                </>
                            )
                    }



                    <div className="sub-box ">
                        <div className="category-content">
                            {/* <img className="cat-img" alt={c.al} src={c.sr} /> */}
                            <div className="sub-name"><h1>Gold</h1><img className="mode" src={gv} /> </div>
                            <div className="amt-section" ><h3 className="amt" >₹300</h3><p className="sub-list-con">/month</p></div><br />
                            <div className="sub-list" >
                                <p className="sub-list-con" >Access of each and everything</p>
                                <p className="sub-list-con" >Save content in your collection</p>
                                <p className="sub-list-con no-dbt" >Doubt solving session (chat)</p>
                            </div>
                            <br /><br />


                            {
                                user
                                    ? <center><form id="rzp_payment_form"></form></center>
                                    : <center><button id='signin-g' className="login-with-google-btn" onClick={signInWithGoogle} >Log in to proceed</button></center>
                            }<br />



                        </div>
                    </div>
                    <div className="sub-box">
                        <div className="category-content">
                            {/* <img className="cat-img" alt={c.al} src={c.sr} /> */}
                            <div className="sub-name"><h1>Platinum</h1><img className="mode" src={pla} /> </div>
                            <div className="amt-section" ><h3 className="amt" >₹500</h3><p className="sub-list-con">/month</p></div><br />
                            <div className="sub-list" >
                                <p className="sub-list-con" >Access of each and everything</p>
                                <p className="sub-list-con" >Save content in your collection</p>
                                <p className="sub-list-con" >Doubt solving session (chat)</p>
                            </div>

                            <br /><br />


                            {
                                user
                                    ? <center><form id="rzp_payment_form_two"></form></center>
                                    : <center><button id='signin-g' className="login-with-google-btn" onClick={signInWithGoogle} >Log in to proceed</button></center>
                            }<br />




                        </div>

                    </div>
                </div><br />




            </div>

        </div>
    )
}


