import './App.scss';
import Nav from './components/nav/nav.js'
import Home from './components/home/home.js'
import Categories from "./components/categories/categories.js"
import Reactions from "./components/categories/reactions/reactions.js"
import Organic from "./components/categories/reactions/organic/organic.jsx"
import Inorganic from "./components/categories/reactions/inorganic/inorganic.js"
import Invest from "./components/invest/invest.js"
import Contact from "./components/contact/contact.js"
import Footer from './components/footer/footer';
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top"
import Periodic from './components/categories/periodic/periodic';
import Keyterms from './components/categories/keyterms/keyterms';
import AcetoaceticOne from './components/categories/reactions/organic/reactions/acetoacetic-one/acetoaceticone';
import Concepts from './components/categories/concepts/concepts';
import Conversions from './components/categories/conversions/conversions';
import Trends from './components/categories/trends/trends';
import SignUp from './components/signup/signup';
import Privacy from "./components/privacy/privacy"
import Team from './components/team/team';
import Community from './components/community/community';
import SearchP from './components/categories/periodic/search/search';
import ChartP from './components/categories/periodic/chartP/chart';
import Newsletter from './components/newsletter/newsletter';
import Pro from './components/pro/pro';
import Pagenotfound from './components/pagenotfound/pagenotfound';
import Terms from './components/terms/terms';
import Refund from './components/refund/refund';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Message from './components/message/message';
import Doubts from './components/doubts/doubts';
import Inspirations from './components/categories/inspirations/inspirations';
import Kalam from './components/categories/inspirations/kalam/kalam';
import Raman from './components/categories/inspirations/raman/raman';
import Bose from './components/categories/inspirations/bose/bose';
import Salim from './components/categories/inspirations/salim/salim';
import Homi from './components/categories/inspirations/homi/homi';
import Newton from './components/categories/inspirations/newton/newton';
import Curie from './components/categories/inspirations/curie/curie';
import Galilei from './components/categories/inspirations/galilei/galilei';
import Einstein from './components/categories/inspirations/einstein/einstein';
import Faraday from './components/categories/inspirations/faraday/faraday';
import Chadwick from './components/categories/inspirations/chadwick/chadwick';
import Ramanujan from './components/categories/inspirations/ramanujan/ramanujan';
import Lavoisier from './components/categories/inspirations/lavoisier/lavoisier';
import Proust from './components/categories/inspirations/proust/proust';
import Lussac from './components/categories/inspirations/lussac/lussac';
import Avogardo from './components/categories/inspirations/avogardo/avogardo';
import Dalton from './components/categories/inspirations/dalton/dalton';
import Millikan from './components/categories/inspirations/millikan/millikan';




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

function App({ reveal, endTrial }) {
  const [user] = useAuthState(auth);



  reveal = () => {

    var reveals = document.querySelectorAll(".pr");


    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 120;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }


  }
  setInterval(reveal, 10);




  var trialstamp;


  endTrial = async () => {
    if (user) {
      const triaRef = firestore.collection('payments').doc(auth.currentUser.uid);

      const timestamp = firebase.firestore.Timestamp.now();
      var timestamp1 = new Date(timestamp.toDate())


 


      await triaRef.get().then((doc) => {

        const data = doc.data();

        const timestampp2 = data.tend; // This is the timestamp value
        trialstamp = timestampp2.toDate(); // Convert the timestamp to a JavaScript date object


      });


      // calculate the difference in milliseconds
      var difference = new Date(trialstamp) - new Date(timestamp1);


      var dayss = difference / 86400000;
      var daysleft = Math.floor(dayss)
      if (daysleft == 0 || daysleft < 0) {
        triaRef.update({
          trial: 'finished',
        })
      }
      console.log(daysleft)






    }
  }
  endTrial();



  return (
    <div className="App">

      <Nav />

      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/categories/reactions" element={<Reactions />} />
        <Route exact path="/categories/periodic-table" element={<Periodic />} />
        <Route exact path="/categories/keyterms" element={<Keyterms />} />
        <Route exact path="/categories/concepts" element={<Concepts />} />
        <Route exact path="/categories/conversions" element={<Conversions />} />
        <Route exact path="/categories/trends" element={<Trends />} />

        <Route exact path="/categories/periodic-table/elements" element={<SearchP />} />
        <Route exact path="/categories/periodic-table/chart" element={<ChartP />} />

        <Route exact path="/categories/reactions/organic" element={<Organic />} />
        <Route exact path="/categories/reactions/inorganic" element={<Inorganic />} />
        <Route exact path="/categories/reactions/organic/acetoacetic-ester-condensation" element={<AcetoaceticOne />} />

        {/* <Route exact path="/invest" element={<Invest />} /> */}
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/me" element={<SignUp />} />
        <Route exact path="/privacy-policy" element={<Privacy />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/refund-policy" element={<Refund />} />
        {/* <Route exact path="/newsletter" element={<Newsletter />} /> */}
        <Route exact path="/premium" element={<Pro />} />
        <Route exact path="/our-message" element={<Message />} />
        <Route exact path="/categories/inspirations/" element={<Inspirations />} />
        {/* <Route exact path="/doubts" element={<Doubts />} /> */}

        <Route path="*" element={<Pagenotfound />} />


        {/* Inspirations */}
        <Route exact path="/categories/inspirations/abdul-kalam" element={<Kalam />} />
        <Route exact path="/categories/inspirations/cv-raman" element={<Raman />} />
        <Route exact path="/categories/inspirations/satyendra-nath-bose" element={<Bose />} />
        <Route exact path="/categories/inspirations/salim-ali" element={<Salim />} />
        <Route exact path="/categories/inspirations/homi-jehangir-bhabha" element={<Homi />} />
        <Route exact path="/categories/inspirations/issac-newton" element={<Newton />} />
        <Route exact path="/categories/inspirations/marie-curie" element={<Curie />} />
        <Route exact path="/categories/inspirations/galileo-galilei" element={<Galilei />} />
        <Route exact path="/categories/inspirations/albert-einstein" element={<Einstein />} />
        <Route exact path="/categories/inspirations/michael-faraday" element={<Faraday />} />


        <Route exact path="/categories/inspirations/james-chadwick" element={<Chadwick />} />

        <Route exact path="/categories/inspirations/srinivasa-ramanujan" element={<Ramanujan />} />
        <Route exact path="/categories/inspirations/antoine-lavoisier" element={<Lavoisier />} />
        <Route exact path="/categories/inspirations/joseph-proust" element={<Proust />} />
        <Route exact path="/categories/inspirations/joseph-louis-gay-lussac" element={<Lussac />} />
        <Route exact path="/categories/inspirations/amedeo-avogardo" element={<Avogardo />} />
        <Route exact path="/categories/inspirations/john-dalton" element={<Dalton />} />
        <Route exact path="/categories/inspirations/robert-andrews-millikan" element={<Millikan />} />
        <Route exact path="/categories/inspirations/robert-andrews-millikan" element={<Millikan />} />




   






        




      </Routes>

      <Footer />


      <ScrollToTop id='noprint' smooth />
    </div>

  );
}

export default App;
