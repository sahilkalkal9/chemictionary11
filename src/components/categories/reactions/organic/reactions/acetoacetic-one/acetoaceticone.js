import "./acetoaceticone.scss"
import { FirestoreError, deleteDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import deleteC from "./deleteC.png"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { doc, onSnapshot, updateDoc, getDoc, collection } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useRef, useState } from 'react';
import Subscription from "../../../../../subscription/subscription";
import SignUp from "../../../../../signup/signup";
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



function AcetoaceticOne({ saveIt, addComment }) {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  const cmntRef = firestore.collection("comments");
  const [comments] = useCollectionData(cmntRef);
  const numberRef = firestore.collection('n').doc('number');



  if (user) {

    var saved;
    var unsaved;
    const { uid, displayName, photoURL } = auth.currentUser;

    // const saveRef = firestore.collection(uid).doc("AceEstCond");
    var docRef = firestore.collection(uid).doc("AceEstCond");
    var savedRef = firestore.collection(uid);


    docRef.get().then((doc) => {
      if (doc.exists) {
        if (doc.data().stat == "saved") {
          saved = true;
          unsaved = false;
          document.getElementById("saveInColl").innerHTML = "Unsave from collection"
        }


      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        saved = false;
        unsaved = true;
        document.getElementById("saveInColl").innerHTML = "Save in collection"
      }

    }).catch((error) => {
      console.log("Error getting document:", error);
    });

    saveIt = async (e) => {
      e.preventDefault();

      if (unsaved) {
        await setDoc(doc(firestore, uid, "AceEstCond"), {
          link: window.location.href,
          uid,
          nameR: "Acetoacetic Ester Condensation",
          id: "AceEstCond",
          displayName,
          stat: "saved",
          typeR: "reaction"
        });



        saved = true;
        unsaved = false;
        document.getElementById("saveInColl").innerHTML = "Unsave from collection"
      }
      else if (saved) {
        await deleteDoc(doc(firestore, uid, "AceEstCond"));

        saved = false;
        unsaved = true;
        document.getElementById("saveInColl").innerHTML = "Save in collection"
        savedRef.length -= 1;
      }
    }







  }
  var d = new Date();
  var h = new Date().getHours();
  var min = new Date().getMinutes();
  var day = new Date().getDate();
  // let mon = months[d.getMonth()];
  var month = new Date().getMonth();
  var year = new Date().getFullYear();
  const payRef = firestore.collection("payments");
  const [paidRef] = useCollectionData(payRef);
  const signInWithGoogle = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }


  return (
    <div className="AcetoaceticOne">
      <br />
      <div className="content-rxn" id="aceto-synt" >
        <div className="head-det">
          <h1 className="rx-head">Acetoacetic Ester Condensation</h1>

        </div><br /><br />


        {

          user
            ? (
              paidRef && paidRef.map((pt) => (
                pt.did == auth.currentUser.uid
                  ? (
                    pt.gold == "paid" && pt.platinum == "unpaid" && pt.trial == "finished"
                      ? <RxnContnt />
                      : (
                        pt.gold == "unpaid" && pt.platinum == "paid" && pt.trial == "finished"
                          ? <RxnContnt />
                          : (
                            pt.gold == "unpaid" && pt.platinum == "unpaid" && pt.trial == "running"
                              ? <RxnContnt />
                              : <center><Subscription /><br /></center>
                          )
                      )
                  )
                  : console.log()
              ))
            )
            : <center><SignIn /> <br /></center>

        }

        {/* <RxnContnt /> */}




      </div>
      <br /><br /><br /><br />
    </div>
  )


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
              Please log in to read!<br />Happy learning!
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

  function RxnContnt() {
    const [formValue, setFormValue] = useState('');

    if (user) {
      const { uid, displayName, photoURL } = auth.currentUser



      addComment = async (e) => {
        e.preventDefault();
        const nRef = doc(firestore, "n", "number");
        const nSnap = await getDoc(nRef);
        var x = nSnap.data().val;

        await setDoc(doc(firestore, "comments", uid + x), {
          comment: formValue,
          uid,
          nameR: "Acetoacetic Ester Condensation",
          id: "AceEstCondCmntd",
          displayName,
          did: uid + x,
          photoURL
        });
        document.getElementById("cmnt-formmmm").value = ''
        const res = await numberRef.update({
          val: firebase.firestore.FieldValue.increment(1)
        });

      }
    }


    return (
      <div className="rxn-contnt">
        <a target="blank" href="https://docs.google.com/document/d/1R8-8GzrvrlKvHPBRyhgFgQyNoammBIq5Pn1iGUaboac/edit?usp=sharing" className="seeCon" > Click to see the content</a>
        <br /><br /><br /><br />
        <div className="dbut">

          <div className="comment-save">
            {
              user ? (<center><button className="lhm shm" id="saveInColl" onClick={saveIt} >Save in collection</button></center>)
                : (
                  <center><Link >

                    <button id='signin-g' className="lhm shm" onClick={signInWithGoogle} >Log in to save it in your collection</button>
                  </Link></center>
                )
            }
            <br /><br />
            <form className="cmnt-form" onSubmit={addComment}>

              <input className="contact-inputs comment-box" id="cmnt-formmmm" required value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Write a comment.." /><br />

              {
                user
                  ? <center>
                    <button className="lhm pcm" type="submit" disabled={!formValue}>Comment</button>
                  </center>
                  : (
                    <center><Link >
                      <button className="lhm lcm" onClick={signInWithGoogle}>
                        Log in to comment
                      </button>
                    </Link></center>
                  )
              }

            </form>
          </div>
        </div>

        <br /><br />
        <p className="welcome-user">Comments</p>
        <div className="comments-container" >

          {comments && comments.map((msg) => (

            msg.id == "AceEstCondCmntd"
              ? (

                <Comments key={msg.id} message={msg} />
              )
              : (
                console.log()
              )
          ))}
        </div>

      </div>
    )
  }

  function Comments({ key, message }) {

    // const numberRef = firestore.collection('todos').doc('number');


    const deleteCmnt = async (e) => {
      e.preventDefault();


      await deleteDoc(doc(firestore, "comments", message.did));
      document.getElementById("cmnt-formmmm").value = ''
      const res = await numberRef.update({
        val: firebase.firestore.FieldValue.increment(-1)
      });

    }
    var d = new Date();
    return (
      <>
        <div className="comment-section">

          <div className="cmnt-header" >
            <div className="comment-name-section">
              <img className="cmnt-photo" src={message.photoURL} />
              <div className="name-cmnt" >
                <p className="comment-name" >{message.displayName}</p>
                <p className="comment-date"> {day}/{month + 1}/{year} </p>
              </div>
            </div>
            {
              user
                ? (
                  auth.currentUser.uid == message.uid
                    ? <img onClick={deleteCmnt} className="dcomment" src={deleteC} />
                    : console.log()
                )
                : console.log()
            }
          </div>
          <p className="comment" >{message.comment}</p>
        </div>
        <br />
      </>
    )
  }
}

export default AcetoaceticOne;














