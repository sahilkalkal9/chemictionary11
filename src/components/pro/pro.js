import Subscription from "../subscription/subscription";
import "./pro.scss"

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




function Pro({ endTrial }) {
  const [user] = useAuthState(auth);
  const payRef = firestore.collection("payments");
  const [paidRef] = useCollectionData(payRef);
  //   const timestamp = firebase.firestore.Timestamp.now();
  //   var timestamp1 = new Date(timestamp.toDate())
  // var timestamp2;
  //   const triaRef = firestore.collection('payments').doc(auth.currentUser.uid);

  //   triaRef.get().then((doc) => {
  //     if (doc.exists) {
  //       const data = doc.data();

  //       const timestampp2 = data.tend; // This is the timestamp value
  //       timestamp2 = timestampp2.toDate(); // Convert the timestamp to a JavaScript date object

  //     } else {
  //       console.log('No such document!');
  //     }
  //   });


  //     endTrial=()=>{





  //         // calculate the difference in milliseconds
  //         var difference = new Date(timestamp2) - new Date(timestamp1) ;


  //         var dayss = difference / 86400000;
  //         if(dayss == 0 || dayss < 0){
  //             triaRef.update({
  //                   trial: 'finished',  
  //                 })
  //         }
  //         console.log(dayss)

  //       }





  // setInterval(endTrial,60000)



  return (
    <div className="Pro">

      {
        user
          ? (
            paidRef && paidRef.map((pt) => (
              pt.did == auth.currentUser.uid
                ? (
                  pt.gold == "paid" && pt.platinum == "unpaid" && pt.trial == "finished"
                    ? (
                      <div className="paid-sub">
                        <p className="create">Hello {auth.currentUser.displayName},</p><br />
                        <p className="sub-cont">
                          You have subscribed to <b>Chemictionary Gold</b><br />You have access of everything and save anything you want to read again in your collection.<br /><br />
                          <b className="timei" >Days left :- XY</b>
                        </p>



                      </div>
                    )
                    : (
                      pt.gold == "unpaid" && pt.platinum == "paid" && pt.trial == "finished"
                        ? (
                          <div className="paid-sub">
                            <p className="create">Hello {auth.currentUser.displayName},</p><br />
                            <p className="sub-cont">
                              You have subscribed to <b>Chemictionary Platinum</b><br />You have access of everything and save anything you want to read again in your collection.<br />You can ask your doubts too in your personal doubt section.<br /><br />
                              <p className="timei">Days left :- {pt.tend.toDate().toDateString()}</p>
                            </p>

                          </div>
                        )
                        : (
                          pt.gold == "unpaid" && pt.platinum == "unpaid" && pt.trial == "running"
                            ? (
                              <div className="paid-sub">
                                <p className="create">Hello {auth.currentUser.displayName},</p><br />
                                <p className="sub-cont">
                                  You have subscribed to <b>free trial</b><br />You have access of everything and save anything you want to read again in your collection.<br /><br />
                                  <p className="timei">Expiry :- {pt.tend.toDate().toDateString()}</p>
                                </p>



                              </div>
                            )
                            : <><br /><br /><Subscription /> </>
                        )
                    )
                )
                : console.log()
            ))
          )
          : <><br /><br /><Subscription /> </>

      }

      <GoToTop />
    </div>
  )






}

export default Pro;