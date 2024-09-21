import "./nav.scss";
import { Outlet, Link } from 'react-router-dom'
import menu from "../../photos/menu.png"
import logo from "../../photos/logo.png"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import pro from "../../photos/premium.png"
import ver from "../../photos/verify.png"
import vg from "../../photos/verifygold.png"
import tv from "../../photos/tv.png"
import vip from "../../photos/vip.gif"
import login from "../../photos/login.png"
import news from "../../photos/newsletter.png"
import supp from "../../photos/support.png"
import invv from "../../photos/growth.png"
import comm from "../../photos/comm.png"
import cat from "../../photos/cat.png"
import msg from "../../photos/msg.png"
import team from "../../photos/team.png"
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


function Nav({ openNav, closeNav }) {

	const [user] = useAuthState(auth);
	const payRef = firestore.collection("payments");
	const [paidRef] = useCollectionData(payRef);


	openNav = () => {
		var width = window.innerWidth;
		if (width <= 900 && width > 800) {
			document.getElementById("myNav").style.width = "35%";
		}
		else if (width <= 800 && width > 700) {
			document.getElementById("myNav").style.width = "40%";
		}
		else if (width <= 700 && width > 600) {
			document.getElementById("myNav").style.width = "45%";
		}
		else if (width <= 600 && width > 500) {
			document.getElementById("myNav").style.width = "50%";
		}
		else if (width <= 500 && width > 400) {
			document.getElementById("myNav").style.width = "62%";
		}
		else if (width <= 400 && width > 200) {
			document.getElementById("myNav").style.width = "75%";
		}
		else if (width <= 200 && width > 0) {
			document.getElementById("myNav").style.width = "100%";
		}
	}
	closeNav = () => {
		document.getElementById("myNav").style.width = "0%";
	}


	


	return (
		<div className="Nav" >
			<div className="nav-container" id="noprint">
				<Link to="/" className='nav-link logoo'>
					<img src={logo} className="logo" alt="logo" /> 
					<h2 className="bname">Chemictionary</h2>
				</Link>
				<div className="nav-menu">



					<Link to="/categories" className='nav-link'>
						<p className="nav-menu-item cat-down" id="ca" >Categories</p>
						{/* <img src={cat} className="nav-menu-item mode" /> */}
					</Link>

					<Link to="/team" className='nav-link'>
						<p className="nav-menu-item" id="tea" >Team</p>
						{/* <img src={team} className="nav-menu-item mode" /> */}
					</Link>
					<Link to="/community" className='nav-link'>
						<p className="nav-menu-item" id="com" >Community</p>
						{/* <img src={comm} className="nav-menu-item mode" /> */}

					</Link>
					{/* <Link to="/invest" className='nav-link'>
						<p className="nav-menu-item" id="inv" >Invest</p>
						<img src={invv} className="nav-menu-item mode" />

					</Link> */}
					<Link to="/our-message" className='nav-link'>
						<p className="nav-menu-item" id="inv" >Our Message</p>
						{/* <img src={msg} className="nav-menu-item mode" /> */}

					</Link>
					<Link to="/contact" className='nav-link'>
						<p className="nav-menu-item" id="co" >Contact</p>
						{/* <img src={supp} className="nav-menu-item mode" /> */}

					</Link>
					{/* <Link to="/newsletter" className='nav-link'>
						<p className="nav-menu-item" id="co" >Newsletter</p>
						

					</Link> */}

					{
						user
							? (
								paidRef && paidRef.map((pt) => (
									pt.did == auth.currentUser.uid
										? (
											pt.gold == "paid" && pt.platinum == "unpaid" && pt.trial == "finished"
												? (
													<Link to="/premium" className='nav-link'>

														<img className="pro" src={vg} />
													</Link>
												)
												: (
													pt.gold == "unpaid" && pt.platinum == "paid" && pt.trial == "finished"
														? (
															<Link to="/premium" className='nav-link'>

																<img className="pro" src={ver} />
															</Link>
														)
														: (
															pt.gold == "unpaid" && pt.platinum == "unpaid" && pt.trial == "running"
																? (
																	<Link to="/premium" className='nav-link'>

																		<img className="pro" src={tv} />
																	</Link>
																)
																: (
																	<Link to="/premium" className='nav-link'>

																		<img className="mode" src={pro} />
																	</Link>
																)
														)
												)
										)
										: console.log()
								))
							)
							: (
								<Link to="/premium" className='nav-link'>

									<img className="mode" src={pro} />
								</Link>
							)

					}


					{
						user ? (

							<Link to="/me" className='nav-link'>
								<img alt="user" className="user" src={user.photoURL} />
							</Link>
						)
							: (
								<Link to="/me">
									{/* <button className="lhm lhk">Log In</button> */}
									<img src={login} className="mode" />
								</Link>
							)
					}

					<img onClick={openNav} alt="menu-bar" className="menu" src={menu} />


				</div>

			</div>


			<div id="myNav" class="overlay">
				<p class="closebtn" onClick={closeNav}>&times;</p>
				<div class="overlay-content">

					<p onClick={closeNav}><Link to="/categories">Categories</Link></p>
					{/* <p onClick={closeNav}><Link to="/invest">Invest</Link></p> */}
					<p onClick={closeNav}><Link to="/contact">Contact</Link></p>
					<p onClick={closeNav}><Link to="/team">Team</Link></p>
					<p onClick={closeNav}><Link to="/our-message">Our Message</Link></p>
					<p onClick={closeNav}><Link to="/community">Community</Link></p>
					{/* <p onClick={closeNav}><Link to="/newsletter">Newsletter</Link></p> */}



				</div>
			</div>

			
		</div>

	)
}
export default Nav;