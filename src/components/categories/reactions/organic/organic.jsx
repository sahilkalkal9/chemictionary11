import React, { useState, useEffect } from 'react';
import './organic.scss';
import nf from "../../../../photos/notf.png"
import { Link, useHistory, useNavigate } from 'react-router-dom'
import wait from "../../../../photos/wait.png"
import oreactions from "./organic.json";
import GoToTop from '../../../../top';
import firebase from "firebase/compat/app"
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

const Organic = () => {
  const [searchfield, setSearchfield] = useState('');
  const navigate = useNavigate();

  const payRef = firestore.collection("payments");
  const [paidRef] = useCollectionData(payRef);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  const openRxn = (rxn) => {
    if (auth.currentUser) {
      const found = paidRef.find(pt => pt.did === auth.currentUser.uid);
      if (found) {
        if (found.gold === "paid" && found.platinum === "unpaid" && found.trial === "finished") {
          document.getElementById("openRx").href = rxn.link;
        } else if (found.gold === "unpaid" && found.platinum === "paid" && found.trial === "finished") {
          document.getElementById("openRx").href = rxn.link;
        } else if (found.gold === "unpaid" && found.platinum === "unpaid" && found.trial === "running") {
          document.getElementById("openRx").href = rxn.link;
        } else {
          navigate("/premium");
        }
      } else {
        console.log("User not found in paidRef");
      }
    } else {
      navigate("/me");
    }
  }

  const filteredRxns = oreactions.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  useEffect(() => {
    if (searchfield === "") {
      for (let i = 0; i < oreactions.length; i++) {
        filteredRxns.pop();
      }
    }
  }, [searchfield]);

  return (
    <div className='Organic Categories'>
      <p className="categories-head">Organic</p>
      <p className="sub-search">Search using name of the reaction</p>
      <br />

      <input type="text" placeholder="Search here.." className="searchbox"
        value={searchfield} onChange={onSearchChange} />
      <br />

      <div className="reactions">
        {(searchfield === "")
          ? (
            <div className="rxn-not-found">
              <img className="rxn-no-img" src={wait} alt="waiting" />
              <h3 className="rxn-no-text">Waiting for task.</h3>
            </div>
          )
          : (
            (!filteredRxns.length && searchfield !== "")
              ? (
                <div className="rxn-not-found">
                  <img className="rxn-no-img" src={nf} alt="not found" />
                  <h3 className="rxn-no-text">Sorry, we can't find any organic reaction.<br /> Please try to search any other keyword</h3>
                </div>
              )

        
              : (
                filteredRxns.map((rxn, index) => (
                  <a target='blank' key={index} id='openRx' href="#" onClick={() => openRxn(rxn)}>
                    <div className="filteredRxns">
                      <h1 className="rxn-name">{rxn.name}</h1>
                    </div>
                  </a>
                ))
              )
          )
        }


        
      </div>


      



      <GoToTop />
    </div>
  );
}

export default Organic;
