import "./reviews.scss"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';

import React, { useRef, useState } from 'react';




import { useCollectionData } from 'react-firebase-hooks/firestore';

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
// const analytics = firebase.analytics();


function Reviews() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  return (
    <div className='Reviews'>
      <div className='Review'>
        <InputForm />
        {/* {user ? <InputForm /> : <p>sjkshajkd</p>} */}
      </div>
    </div>
  )


  function InputForm() {
    const dummy = useRef();
    const messagesRef = firestore.collection('reviews');
    const query = messagesRef.orderBy('createdAt');

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');


    const sendMessage = async (e) => {
      e.preventDefault();



      if (user) {
        const { displayName, photoURL } = auth.currentUser;
        await messagesRef.add({
          text: formValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL,
          displayName
        })
      }
      else {
        const div = document.createElement("div")
        const para = document.createElement("p");
        para.innerText = "Please sign in first.";
        para.classList.add("create-para")
        div.classList.add("create-account")
        const link = document.createElement("a");
        link.setAttribute("href", "https://chemictionary.com/me");
        const b = document.createElement("button")
        var t = document.createTextNode("Sign In");
        b.classList.add("cat-home")

        b.appendChild(t)

        div.appendChild(para)
        div.appendChild(link)
        link.appendChild(b)
        document.body.appendChild(div);
        // console.log()


      }

      setFormValue('');

    }
    const signInWithGoogle = () => {

      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }

    return (<div className="pr">
      <p className="welcome-user">Reviews</p><br />
      <div className="reviews-total ">

        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}



      </div>
      <br />
      <form className="rev-form" onSubmit={sendMessage}>

        <textarea className="contact-inputs" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Write a review.." />

        {/* <button className="submit-form rev-submit"  type="submit" disabled={!formValue}>Post</button> */}
        {
          user
            ? <center>
              <button className="lhm pcm" type="submit" disabled={!formValue}>Post your review</button>
            </center>
            : (
              <center><Link>
                <button className="lhm lcm" onClick={signInWithGoogle} >
                  Login to post your review
                </button>
              </Link></center>
            )
        }

      </form>
    </div>)
  }


  function ChatMessage(props) {
    const { displayName, text, photoURL } = props.message;



    return (<>
      <div className='review-box-container ' >

        <div className='review-box'>
          <div className='review-box-upper'>
            <img className='avatar-review' src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p className='review-name' >{displayName}</p>
          </div>
          <div className="review-box-lower">
            <p className="review-text" >{text}</p>
          </div>
        </div>

      </div>
    </>
    )
  }

  // function CreateAccount (){
  //   return(

  //   )
  // }
}

export default Reviews;