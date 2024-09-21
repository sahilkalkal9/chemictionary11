import "./inspirations.scss"
import apj from "./kalam/kalam.png"
import raman from "./raman/raman.png"
import bose from "./bose/bose.png"
import salim from "./salim/salim.png"
import homi from "./homi/homi.png"
import newton from "./newton/newton.png"
import curie from "./curie/curie.png"
import galilei from "./galilei/galilei.png"
import einstein from "./einstein/einstein.png"
import faraday from "./faraday/faraday.png"
import chadwick from "./chadwick/chadwick.png"
import ramanujan from "./ramanujan/ramanujan.png"
import lavoisier from "./lavoisier/lavoisier.png"
import proust from "./proust/proust.png"
import lussac from "./lussac/lussac.png"
import avogardo from "./avogardo/avogardo.png"
import dalton from "./dalton/dalton.png"
import millikan from "./millikan/millikan.png"

import { Link } from "react-router-dom"
import GoToTop from "../../../top"

function Inspirations() {

    const sci = [
        {
            "name": "A. P. J. Abdul Kalam",
            "time": "1931-2015",
            "link": "/categories/inspirations/abdul-kalam",
            "p": apj
        },
        {
            "name": "C. V. Raman",
            "time": "1888-1970",
            "link": "/categories/inspirations/cv-raman",
            "p": raman
        },
        {
            "name": "Satyendra Nath Bose",
            "time": "1894-1974",
            "link": "/categories/inspirations/satyendra-nath-bose",
            "p": bose
        },
        {
            "name": "Salim Ali",
            "time": "1896-1987",
            "link": "/categories/inspirations/salim-ali",
            "p": salim
        },
        {
            "name": "Homi J. Bhabha",
            "time": "1909-1966",
            "link": "/categories/inspirations/homi-jehangir-bhabha",
            "p": homi
        },
        {
            "name": "Isaac Newton",
            "time": "1642-1726/27",
            "link": "/categories/inspirations/issac-newton",
            "p": newton
        },
        {
            "name": "Marie Curie",
            "time": "1867-1934",
            "link": "/categories/inspirations/marie-curie",
            "p": curie
        },
        {
            "name": "Galileo Galilei",
            "time": "1564-1642",
            "link": "/categories/inspirations/galileo-galilei",
            "p": galilei
        },
        {
            "name": "Albert Einstein",
            "time": "1879-1955",
            "link": "/categories/inspirations/albert-einstein",
            "p": einstein
        },
        {
            "name": "Michael Faraday",
            "time": "1791-1867",
            "link": "/categories/inspirations/michael-faraday",
            "p": faraday
        },
        {
            "name": "James Chadwick",
            "time": "1891-1974",
            "link": "/categories/inspirations/james-chadwick",
            "p": chadwick
        },
        {
            "name": "Srinivasa Ramanujan",
            "time": "1887-1920",
            "link": "/categories/inspirations/srinivasa-ramanujan",
            "p": ramanujan
        },
        
        {
            "name": "Antoine Lavoisier",
            "time": "1743-1794",
            "link": "/categories/inspirations/antoine-lavoisier",
            "p": lavoisier
        },
        {
            "name": "Joseph Proust",
            "time": "1754-1826",
            "link": "/categories/inspirations/joseph-proust",
            "p": proust
        },
        {
            "name": "Amedeo Avogardo",
            "time": "1776-1856",
            "link": "/categories/inspirations/amedeo-avogardo",
            "p":  avogardo
        },
        {
            "name": "Joseph Louis Gay-Lussac",
            "time": "1778-1850",
            "link": "/categories/inspirations/joseph-louis-gay-lussac",
            "p": lussac
        },
        
        {
            "name": "John Dalton",
            "time": "1766-1844",
            "link": "/categories/inspirations/john-dalton",
            "p":  dalton
        },
        {
            "name": "Robert Andrews Millikan",
            "time": "1868-1953",
            "link": "/categories/inspirations/robert-andrews-millikan",
            "p":  millikan
        },
    ]
     


    return (
        <div className="Categories">
            <br />

            <p className="categories-head" >Inspirations</p><br />
            <div className="categories-container">
                {
                    sci.map((sc) => (
                        <Link className="category-link" to={sc.link} >
                            <div className="category inspi">
                                <div className="category-content">
                                    <img className="cat-img iimg" alt={sc.al} src={sc.p} />
                                    <h1>{sc.name}</h1>
                                    <p className="sctime" >{sc.time}</p>
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

export default Inspirations;