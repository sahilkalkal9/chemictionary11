import "./doubts.scss"

import React, { useRef, useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import GoToTop from "../../top";
import { doc, onSnapshot } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { deleteDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";




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
function Doubts() {
    // const { uid } = auth.currentUser;
    const [user] = useAuthState(auth);

    const dummy = useRef();


    const parentDocRef = firebase.firestore().collection('sahil').doc(auth.currentUser.uid);

    const subcollectionRef = parentDocRef.collection('doubts');
    const query = subcollectionRef.orderBy('createdAt');


    const [subRef] = useCollectionData(query)
    const [formValue, setFormValue] = useState('');
    var msgDiv = document.getElementById("msg-div");
    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        subcollectionRef.add({
            message: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid
        })

        setFormValue('');
        // dummy.current.scrollIntoView({ behavior: 'smooth' });
        msgDiv.scrollTop = msgDiv.scrollHeight;
    }




    return (
        <div className="Doubts">
            <div className="doubt-msgs" id="msg-div" >
                {
                    subRef && subRef.map((ms) => (
                        ms.uid == auth.currentUser.uid
                            ? <p className="right" >{ms.message}</p>
                            : console.log()

                    ))

                }
                {
                    subRef && subRef.map((ts) => (
                        ts.rid == auth.currentUser.uid
                            ? <p className="left" >{ts.message}</p>
                            : console.log()

                    ))
                }
            </div>
            <div className="msg-form">
                <textarea value={formValue} onChange={(e) => setFormValue(e.target.value)} type="text" required />
                <input type="submit" onClick={sendMessage} disabled={!formValue} />
            </div>
        </div>
    )
}

export default Doubts;