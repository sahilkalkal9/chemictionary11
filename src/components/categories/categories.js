import "./categories.scss"
import { Link } from 'react-router-dom'
import cre from "../../photos/cre.png"
import key from "../../photos/key.png"
import concepts from "../../photos/concepts.png"
import convert from "../../photos/convert.png"
import trend from "../../photos/trend.png"
import pt from "../../photos/pt.png"
import summ from "../../photos/summary.png"
import prac from "../../photos/prac.png"
import ncsol from "../../photos/ncsol.png"
import compe from "../../photos/cmpe.png"
import insp from "../../photos/insp.png"
import ico from "../../photos/ico.png"
import formula from "../../photos/formula.png"


import { Helmet } from "react-helmet"
import GoToTop from '../../top';



const Categorie = [
	{
		"name": "Reactions",
		"link": "/categories/reactions",
		"sr": cre,
		"al": "category-image"

	},
	{
		"name": "Keyterms",
		"link": "/categories/keyterms",
		"sr": key,
		"al": "category-image"

	},
	{
		"name": "Concepts",
		"link": "/categories/concepts",
		"sr": concepts,
		"al": "category-image"

	},
	{
		"name": "Conversions",
		"link": "/categories/conversions",
		"sr": convert,
		"al": "category-image"

	},
	{
		"name": "Compounds",
		"link": "/categories/periodic-table/",
		"sr": ico,
		"al": "category-image"
	},
	{
		"name": "Trends(I.C.)",
		"link": "/categories/trends/",
		"sr": trend,
		"al": "category-image"
	},
	{
		"name": "Periodic Table",
		"link": "/categories/periodic-table/",
		"sr": pt,
		"al": "category-image"
	},
	{
		"name": "Keypoints",
		"link": "/categories/periodic-table/",
		"sr": summ,
		"al": "category-image"
	},
	{
		"name": "Practicals",
		"link": "/categories/periodic-table/",
		"sr": prac,
		"al": "category-image"
	},
	
	{
		"name": "Competitive",
		"link": "/categories/periodic-table/",
		"sr": compe,
		"al": "category-image"
	},
	{
		"name": "Formulaes",
		"link": "/categories/periodic-table/",
		"sr": formula,
		"al": "category-image"
	},
	{
		"name": "NCERT Solutions",
		"link": "/categories/periodic-table/",
		"sr": ncsol,
		"al": "category-image"
	},
	{
		"name": "Inspirations",
		"link": "/categories/inspirations/",
		"sr": insp,
		"al": "category-image"
	},

	
]

function Categories() {
	return (
		<div className="Categories">
		<br />

			<p className="categories-head" >Categories</p>
			<br />
			<div className="categories-container">
				{
					Categorie.map((c) => (
						<Link className="category-link" to={c.link} >
							<div className="category isnpi">
								<div className="category-content">
									<img className="cat-img" alt={c.al} src={c.sr} />
									<h1>{c.name}</h1>
								</div>
							</div>
						</Link>
					))
				}

			</div>

			<GoToTop />
		</div>
	)
}

export default Categories;