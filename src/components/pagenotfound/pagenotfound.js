import "./pagenotfound.scss"
import er from "../../photos/error.png"

function Pagenotfound() {
    return (
        <div className="Organic Pagenotfound"><br /><br />
            <div className="nf-contain">
                <img src={er} className="rxn-no-img" /><br /><br />
                <h3 className="rxn-no-text" >Sorry, no page found.</h3>
            </div>
        </div>
    )
}

export default Pagenotfound;