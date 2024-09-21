import "./saved.scss"

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import nothing from "../../photos/empty.png"
import { useAuthState } from 'react-firebase-hooks/auth';

import React, { useRef, useState } from 'react';




import { useCollectionData } from 'react-firebase-hooks/firestore';
import GoToTop from "../../top";

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


function Saved() {
    const [user] = useAuthState(auth);
    const { uid } = auth.currentUser;
    const userRef = firestore.collection(uid);
    const [savedRef] = useCollectionData(userRef);


    return (
        <div className="saved-container">
            <div className="Saved">
                <center><p className="welcome-user">Your collection</p></center>

                <div className="reactions" >
                    {

                        savedRef == 0
                            ? (

                                <>
                                    <div className="rxn-not-found">

                                        <img className="rxn-no-img" src={nothing} alt="not found" />
                                        <h3 className="rxn-no-text">Your collection is empty<br />Try saving things to your collection.</h3>

                                    </div>
                                </>

                            )
                            :
                            (
                                savedRef && savedRef.map((msg) => (

                                    msg
                                        ? (
                                            <>
                                                <a href={msg.link}>
                                                    <div className="filteredRxns">
                                                        <p className="rxn-name">{msg.nameR}</p>
                                                    </div>

                                                </a>

                                            </>


                                        )
                                        : (
                                            console.log()
                                        )
                                ))
                            )


                    }
                </div>
                <GoToTop />

            </div>
        </div>
    )
}

export default Saved;



