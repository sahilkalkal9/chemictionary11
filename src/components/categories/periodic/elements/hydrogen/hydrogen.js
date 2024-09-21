
// import mech from "./mech.png"

// import mech from "./mech1
import m from '../../../../dark.png';
import lmode from '../../../../light.png'
import dmode  from '../../../../dark.png'
import "./hydrogen.scss"


function Hydrogen ({switchM,switchd}){
    var dark = false;
    var light = true;
    switchM =()=>{

        var mode = document.getElementById("modeh");
        var crect = document.getElementById("crect");
          
          if(light)
          {
             
             
              crect.style.background = "#28282b";
              crect.style.color = "white"
      
              mode.src = lmode;
      
            
              light = false;
              dark = true;
          }
          else if(dark){
            

                crect.style.background = "white";
                crect.style.color = "black"

              mode.src = dmode;
             
              
              dark = false;
              light = true;
          }
        }
    const createPDF = () => {  
        window.print()
      };


    return(
        <div className="AcetoaceticOne">
            
            <div className="content-rxn" id='crect' >
                    <div className="head-det">
                        <h1 className="rx-head">Hydrogen</h1>
                        <div className="modeImgs">
                        <img className='mode' id="modeh" onClick={switchM} src={m} />
                        </div>
                    </div>
                <br/>
                
                <p className="rx-desc" >Hydrogen is a chemical element with the symbol H and atomic number 1. It is the most abundant element in the universe, making up about 75% of its elemental mass. Hydrogen is also the lightest element in the periodic table, with one proton and one electron.
                <br/><br/>
                Hydrogen has three isotopes: protium, deuterium, and tritium. Protium is the most common isotope and has one proton and one electron. Deuterium, also known as heavy hydrogen, has one proton, one neutron, and one electron. Tritium has one proton, two neutrons, and one electron.
                <br/><br/>
                Hydrogen is a highly flammable gas that is colorless, odorless, and tasteless. It is a non-metal and exists as a diatomic molecule in its natural state, meaning it consists of two atoms that share electrons.
                <br/><br/>
                Hydrogen has many important industrial applications. It is used in the production of ammonia, which is a key component of fertilizers. It is also used in the production of methanol, which is used as a feedstock for a variety of chemical products. Hydrogen is also used in the refining of petroleum, in the manufacture of electronics, and as a fuel for rockets and other vehicles.
                <br/><br/>
                Hydrogen is also considered a promising clean energy source. When burned, it produces only water vapor, making it a potentially cleaner alternative to fossil fuels. Hydrogen fuel cells are already being used in some vehicles and power plants, and research is ongoing to improve the efficiency and reduce the cost of this technology.
                <br/><br/>
                In summary, hydrogen is a highly versatile element with a wide range of industrial and potential clean energy applications.</p>
                <br/><br/>
                <p className="rx-desc" >It was the minimal and efficient explaination can be given about Hydrogen, our main focus is on concept building not on roting down.. I appreciate your dedication. Keep it up! Thanks for reading this.</p><br/>
            </div>
           <div className="dbut">
            {/* <button className="rxn-name dr" id="noprint" onClick={createPDF}>Print</button> */}
           </div>
            
            <br/><br/><br/><br/>
        </div>
        
    )
}

export default Hydrogen;