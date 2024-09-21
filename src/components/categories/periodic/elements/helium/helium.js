
// import mech from "./mech.png"

// import mech from "./mech1
import m from '../../../../dark.png';
import lmode from '../../../../light.png'
import dmode  from '../../../../dark.png'



function Helium ({switchM,switchd}){
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
                        <h1 className="rx-head">Helium</h1>
                        <div className="modeImgs">
                        <img className='mode' id="modeh" onClick={switchM} src={m} />
                        </div>
                    </div>
                <br/>
                
                <p className="rx-desc" >Helium is a chemical element with the symbol He and atomic number 2. It is a noble gas and the second lightest element in the periodic table, after hydrogen.
                <br/><br/>
                Helium has two isotopes: helium-3 and helium-4. Helium-4 is the most common isotope and makes up about 99.99986% of all natural helium. Helium-3 is much rarer and is formed by the radioactive decay of other elements.
                <br/><br/>
                One of the most well-known properties of helium is its low boiling point and density, which makes it useful for a variety of applications. It is commonly used as a cooling agent for superconducting magnets in MRI machines, as well as in cryogenics for scientific research.
                <br/><br/>
                Helium is also used in gas chromatography, as a filler gas for balloons and airships, and in welding and metal fabrication. Additionally, liquid helium is used to cool nuclear reactors, space telescopes, and other scientific instruments to very low temperatures.
                <br/><br/>
                Helium is also used as a carrier gas for gas chromatography and as a detector gas for ionization detectors. It has a low solubility in water and other liquids, which makes it useful for detecting leaks in piping and other systems.
                <br/><br/>
                In addition to its practical applications, helium has a number of interesting properties that make it unique among the elements. For example, it is the only element that cannot be solidified by cooling at normal atmospheric pressure. It also has the lowest boiling and melting points of all the elements.
                <br/><br/>
                Despite its many applications and interesting properties, helium is a relatively rare element on Earth. It is usually obtained by extracting it from natural gas wells, where it is produced by the radioactive decay of other elements. However, the world's supply of helium is limited, and there are concerns about how to sustainably and efficiently produce and conserve this valuable resource.</p>
                <br/><br/>
                <p className="rx-desc" >It was the minimal and efficient explaination can be given about Helium, our main focus is on concept building not on roting down.. I appreciate your dedication. Keep it up! Thanks for reading this.</p><br/>
            </div>
           <div className="dbut">
            {/* <button className="rxn-name dr" id="noprint" onClick={createPDF}>Print</button> */}
           </div>
            
            <br/><br/><br/><br/>
        </div>
        
    )
}

export default Helium;