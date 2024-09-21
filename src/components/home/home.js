import "./home.scss"
import scrollD from "../../photos/scroll-down.png"
import {Link} from 'react-router-dom'
// import Iframe from 'react-iframe';
// import {Helmet} from "react-helmet"
import Reviews from "../reviews/reviews"
// import 'react-lazyload-youtube/dist/index.css'
import Sc from "../../photos/science.png"
import GoToTop from '../../top';
import Newsletter from "../newsletter/newsletter"

import Subscription from "../subscription/subscription"

function Home(){

	return(
		<div className="Home">
			
			<div className="hf first-homepage">
				<div className="content-first">
					<div className="left-first">
						
						<p className="tagline-home" >
							<span className="dictionary-home" id="dh" >DICTIONARY</span> OF CHEMISTRY
						</p>
						<p className="sub-tagline-home" >
							<span className="ChemistryWorld-home"> ChemistryWorld </span>
							is a <span className="simple-home">simple</span>, 
							<span className="fast-home"> fast </span> 
							and <span className="easy-home"> easy </span> platform to build the concepts of <span className="chem-home">chemistry.</span>	  
						</p>

						<br/>
						
						<center>
							{/* <Link to="/categories"> */}
								<a href="#prob" ><button className="cat-home tfill">Start Now</button></a>
							{/* </Link> */}
						</center>
						
					</div>
					
					<div className="right-first-h">
						
						<img src={Sc} alt="chemistry-image" className="home-img" />
	
					</div>
				</div>
				 
				<center><img className="down" alt="scroll-down" src={scrollD} /></center>
			</div> 
			<div className="lower-homepage" id="prob">  
				<div className="h second-homepage pr" >
						<h1 className="problem">PROBLEM</h1>
						{/* <br/><br/><br/>
						<span className="down-hand"><img src={ad} /></span>
						<br/><br/><br/> */}
						<br/><br/><br/><br/>
						<p className="prob-desc">You think chemistry is hard, you are not able to understand the concepts and you are doing</p>
						 <span className="rote" >ROTE LEARNING</span><br/>
						 <span className="feeling-sad" >😥</span>
				</div>
				<div className="h third-homepage  pr">
					
						<p className="problem solution">SOLUTION</p>
						{/* <br/><br/><br/> */}
						{/* <span className="down-hand"><img src={ad} /></span> */}
						<br/><br/><br/><br/>
						
						<p className="prob-desc">We are providing you very efficient content in very easy language.
							Our main focus is about</p>
						 <span className=" rote concept-building" >CONCEPT BUILDING</span><br/>
						 <span className="feeling-sad" >😊</span>
					
				</div>
				<div className="h fourth-homepage pr">
				<p className="problem why">OUR AIM</p>
					<br/><br/><br/><br/>
					
					<p className="prob-desc">We believe that every student should understand the concept instead of roting down things. 
						
						Our aim is to make learning</p>
						 <span className=" rote easy" >EASY</span><br/>
						 <span className="feeling-sad" >😍</span>
				</div>
				<div className="h five-homepage pr">
				<p className="problem let-go">LET'S GO</p>
				<br/><br/><br/><br/>
					<p className="prob-desc">Go to the categories page and start learning 😊 <br/> 
						</p>
						 <span className=" rote free-home" >Start Now</span><br/><br/>
						 <span className="down-hand">👇</span><br/><br/>
						 <Link to="/categories">
						 	<p className="cat-home">Categories</p>
						 </Link>

						 {/* <Subscription/> */}
				</div>
				
				
				<Newsletter/>
			
			<Reviews />
				

				{/* <h1 id="count" >Counts</h1> */}

				
			</div>
			
				
			
			
			<GoToTop/>
		</div>
		)
}


export default Home;






{/* <div className="Home">
			<div className="first-homepage pr">

				<div className="left-first">
					
					<p className="tagline-home" >
						<span className="dictionary-home">DICTIONARY</span> OF CHEMISTRY.
					</p>
					<p className="sub-tagline-home" >
						<span className="ChemistryWorld-home"> ChemistryWorld </span>
						  is a <span className="simple-home">simple</span>, 
						  <span className="fast-home"> fast </span> 
						  and <span className="easy-home"> easy </span> platform to build the concepts of <span className="chem-home">chemistry</span>
						  
					</p><br/>
					
				</div>
				<div className="right-first">
					<p className="sub-search" >*It's a demo video*</p>
					<Iframe className="yt"  url="https://www.youtube.com/embed/hAP2QF--2Dg"  allowfullscreen></Iframe>

				</div>
				
				

			</div>

			<div className="second-page">
			<div className="second-homepage" id="second-homepage">
				<div className=" second-h pr">
					<h1 className="problem">PROBLEM</h1>
					<br/><br/>
					<span className="down-hand">👇</span>
					<br/><br/><br/>
					<p className="prob-desc">You think chemistry is hard, you are not able to understand the concepts and you are doing</p>
						 <span className="rote" >ROTE LEARNING</span><br/>
						 <span className="feeling-sad" >Feeling sad 😥</span>
				</div>


			</div>
			<div className="second-homepage" >
				<br/><br/><br/><br/>
				<div className=" second-h pr">
					<p className="problem solution">SOLUTION</p>
					<br/><br/><br/>
					
					<p className="prob-desc">We are providing you very efficient content in very easy language.<br/> 
						Our main focus is about</p>
						 <span className=" rote concept-building" >CONCEPT BUILDING</span><br/>
						 <span className="feeling-sad" >Feeling happy 😊</span>

				</div>
			</div>
			<div className="second-homepage" >
				<br/><br/><br/><br/>
				<div className=" second-h pr">
					<p className="problem why">OUR AIM</p>
					<br/><br/><br/>
					
					<p className="prob-desc">We believe that every student should understand the concept instead of roting down things. 
						<br/>
						Our aim is to make learning</p>
						 <span className=" rote easy" >EASY</span><br/>
						 <span className="feeling-sad" >Have fun 😊</span>
				</div>

			</div>
			<div className="second-homepage forth" >
				<div className=" second-h pr">
					<p className="problem let-go">LET'S GO</p>
					<br/>
					<p className="prob-desc">Go to the categories page and start learning 😊 <br/> 
						</p>
						 <span className=" rote free-home" >It's free</span><br/><br/>
						 <span className="down-hand">👇</span><br/><br/>
						 <Link to="/categories">
						 	<a className="cat-home">Categories</a>
						 </Link>
				</div>
					 


			</div>
			</div>

		
			
		</div> */}


				// 	<div className="left-first">
				// 	<p className="welcome-home">Welcome to the,</p>
				// 	<p className="tagline-home" >
				// 		<span className="dictionary-home">DICTIONARY</span> OF CHEMISTRY.
				// 	</p>
				// 	<p className="sub-tagline-home" >
				// 		<span className="ChemistryWorld-home"> ChemistryWorld </span>
				// 		  is a <span className="simple-home">simple</span>, 
				// 		  <span className="fast-home"> fast </span> 
				// 		  and <span className="easy-home"> easy </span> platform to build the concepts of <span className="chem-home">chemistry</span>
				// 	</p><br/><br/><br/>
				// 	<span className="down-hand"><img  src={down} alt="down"/></span>

				// </div>