import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import './signup.scss';
import login from "../../photos/safe.png"
import GoogleButton from 'react-google-button'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import GoToTop from '../../top';

import Subscription from '../subscription/subscription';
import { doc, onSnapshot } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { deleteDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import Saved from '../saved/saved';


import checkM from "../../photos/check.png"
import Doubts from '../doubts/doubts';

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




function SignUp() {

  const [user] = useAuthState(auth);
  var statusP;





  return (
    <div className="Categories SignUp">
      <br />

      {user
        ? <UserPage />
        : <SignIn />


      }




      <GoToTop />
    </div>

  );
}

function SignIn() {


  const signInWithGoogle = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }


  // const checkMark = ()=>{
  //   var ck = document.getElementById("checkMark");
  //   if(ck && ck.checked){
  //     document.getElementById("signin-g").disabled=false;
  //   }
  //   else{
  //     document.getElementById("signin-g").disabled=true;
  //   }

  // }
  // setInterval(checkMark,100)

  return (
    <div className="Categories SignUp" >


      <div className="signup-container" >
        {/* <div className="why-signup">
                    <p className="create" >Need of account..</p>
                    <div className="benefits">
                        <div className="benefit">
                            <img src={checkM} className="check-mark" alt="check"/>
                            <p className="benefit-content">to save anything you want to read again..</p>
                        </div>
                        <div className="benefit">
                            <img src={checkM} className="check-mark" alt="check"/>
                            <p className="benefit-content">to add yours count in the likes</p>
                        </div>
                        <div className="benefit">
                            <img src={checkM} className="check-mark" alt="check"/>
                            <p className="benefit-content">to share your reviews about us</p>
                        </div>
                        <div className="benefit">
                            <img src={checkM} className="check-mark" alt="check"/>
                            <p className="benefit-content">to comment particularly to the content</p>
                        </div>
                    </div><br/>
                    <div className='checkbox-section'>
                      <input type='checkbox' id='checkMark'   /><p>I agree to the</p> <Link to="/privacy-policy" className='foot-link'>
                      <p className="linkF" id="com" >Privacy Policy</p>
                      </Link> 
                    </div>

                    <br/>
                    <center><button id='signin-g' className="cat-home sign-g" onClick={signInWithGoogle} >Log in with Google</button></center>
                    <center><p >*Safe and Secure*</p></center>
                </div> */}
        <div className='signin-box'>
          <p className='create' >
            Welcome to the Chemictionary, we are glad to see you!<br />Happy learning!
          </p><br />
          <p className='sub-search' >We are using only one method to log in using your google account only because it's very much safe and secure and it's easy for you too to login in one click.</p><br />
          {/* <center><button id='signin-g' className="cat-home sign-g" onClick={signInWithGoogle} >Log in with Google</button></center> */}
          <center><button type="button" className="login-with-google-btn" onClick={signInWithGoogle} >
            Log In with Google
          </button></center>
          <br />
        </div>
        {/* <div className="right-first-h">
						
						      <img src={login} alt="chemistry-image" className="rxn-no-img" />
	
					      </div> */}




      </div>


    </div>
  )

}

function SignOutOne({ signoo }) {
  signoo = () => {
    auth.signOut();
    window.location.reload()
  }
  return (
    <center><button className="sign-out-one st " onClick={signoo}>Sign Out</button></center>
  )
}


function UserPage() {
  const [user] = useAuthState(auth);
  const payRef = firestore.collection("payments");
  const [paidRef] = useCollectionData(payRef);
  const { uid, photoURL, displayName } = auth.currentUser;
  var paymentRef = firestore.collection("payments").doc(uid);
  paymentRef.get().then((doc) => {
    if (doc.exists) {
      console.log();
    } else {
      firestore.collection("payments").doc(uid).set({
        name: displayName,
        did: uid
      })

    }
  })
  //  functions.auth.user().onCreate((user) => {
  //     console.log("hii")
  //   });


  return (
    <div className='Categories User' >
      <br />
      <div className='profile-data' >
        <img className='user-profile-img' src={user.photoURL} />
        <div className='name-section'>
          <p className="welcome-user" >{user.displayName}</p>
          <SignOutOne />
          {
            paidRef && paidRef.map((pt) => (
              pt.did == uid
                ? (
                  pt.gold == "paid" && pt.platinum == "unpaid" && pt.trial == "finished"
                    ? <p className='subs' >Gold</p>
                    : (
                      pt.gold == "unpaid" && pt.platinum == "paid" && pt.trial == "finished"
                        ? <p className='subs' >Platinum</p>
                        : (
                          pt.gold == "unpaid" && pt.platinum == "unpaid" && pt.trial == "running"
                            ? <p className='subs' >Trial</p>
                            : <p className='subs' >No subscription</p>
                        )
                    )
                )
                : console.log()
            ))
          }


        </div>
      </div>
      <br /><br />




      {
        paidRef && paidRef.map((pt) => (
          pt.did == uid
            ? (
              pt.gold == "paid" && pt.platinum == "unpaid" && pt.trial == "finished"
                ? (
                  <>
                    <Saved />
                  </>
                )
                : (
                  pt.gold == "unpaid" && pt.platinum == "paid" && pt.trial == "finished"
                    ? (
                      <>
                        <Saved />
                      </>
                    )
                    : (
                      pt.gold == "unpaid" && pt.platinum == "unpaid" && pt.trial == "running"
                        ? (
                          <>
                            <Saved />
                          </>
                        )
                        : <Subscription />
                    )
                )
            )
            : console.log()
        ))

      }


      {/* <Saved/> */}





    </div>
  )
}




export default SignUp;












