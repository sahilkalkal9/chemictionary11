import "./reactions.scss"
import {Link} from 'react-router-dom'
import o from "../../../photos/organic.png"
import ino from "../../../photos/ino.png"
import GoToTop from '../../../top';



const ReactionCat = [
{
	"name" : "Organic Chemistry",
	"link" : "/categories/reactions/organic",
	"sr" : o
	
},
{
	"name" : "Inorganic Chemistry",
	"link" : "/categories/reactions/inorganic",
	"sr" : ino
}
]

function Reactions(){
	return(
		<div className="Categories">
		
		
		<p className="categories-head" >Reactions</p>
		<br/><br/>
			<div className="categories-container">

				{
					ReactionCat.map((c)=>(
						<Link className="category-link" to={c.link} >
							<div className="category">
								<div className="category-content rc ">
									<img className="cat-img" src={c.sr} />
									<h1>{c.name}</h1>
								</div>
							</div>
						</Link>
						))
				}
				
			</div>
			
			<GoToTop/>
		</div>
		)
}

export default Reactions;