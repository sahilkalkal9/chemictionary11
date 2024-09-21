import "./trends.scss"
import {Link} from 'react-router-dom'
import s from "../../../photos/s.png"
import p from "../../../photos/p.png"
import d from "../../../photos/d.png"
import f from "../../../photos/f.png"

import {Helmet} from "react-helmet"
import GoToTop from '../../../top';



const Categorie = [
{
	"name" : "s-block",
	"link" : "/categories/trends",
	"sr" : s
	
},
{
	"name" : "p-block",
	"link" : "/categories/trends",
	"sr" : p
	
},
{
	"name" : "d-block",
	"link" : "/categories/trends",
	"sr" : d
	
},
{
	"name" : "f-block",
	"link" : "/categories/trends",
	"sr" : f
	
}
]

function Trends(){
	return(
		<div className="Categories"><br/>
			<Helmet>
                <meta charSet="utf-8" />
                <title>Trends | Chemictionary</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
			<p className="categories-head" >Trends</p>
			<br/>
			<div className="categories-container">
				{
					Categorie.map((c)=>(
						<Link className="category-link" to={c.link} >
							<div className="category chc">
								<div className="category-content">
									<img className="cat-img trend-img" src={c.sr} />
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

export default Trends;