import "./team.scss"
import sk from "../../photos/sk.png"
import tw from "../../photos/twitter.png"
import instagram from "../../photos/instagram.png"
import github from "../../photos/github.png"
import lk from "../../photos/linkedin.png"
import pweb from '../../photos/pweb.png'
import GoToTop from '../../top';



function Team() {

	return (
		<div className='Team Categories'>
			<br />

			<p className="categories-head" >Our Team</p><br /><br />

			<div className="categories-container">

				<div className="team-cat-container">
					<div className="category team-cat inspi">
						<div className="category-content">
							<img className="cat-img t-img" src={sk} />
							<h1 className="team-name">Sahil Kalkal</h1>
							<p className="team-post" >Founder & Developer</p>

						</div>
					</div>
					<div className="social-team">
						<div className="socials" >
							<a href="https://www.linkedin.com/in/sahil810/" target="blank" ><img className="icon" src={lk} /></a>
							<a href="https://instagram.com/sahil.kalkal_" target="blank" ><img className="icon" src={instagram} /></a>
							<a href="https://github.com/sahilkalkal" target="blank" ><img className="icon" src={github} /></a>
							<a href="https://sahilkalkal.com" target="blank" ><img className="icon" src={pweb} /></a>
						</div>
					</div>
				</div>










			</div>

			<center>
				<div className="team-container">

					<p className="prob-desc inn "> Want to join us?</p>
					<p className="prob-desc inn "> Just fill the form below, we will contact you soon.</p><br />
					<a href="https://forms.gle/jwC1QMLR3FqvtGbb9" target="blank" ><button className="cat-home tfill">Fill Form</button></a>

				</div>
			</center>


			<GoToTop />

		</div>
	)


}


export default Team;


