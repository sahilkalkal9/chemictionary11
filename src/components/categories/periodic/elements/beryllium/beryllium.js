
// import mech from "./mech.png"

// import mech from "./mech1
import m from '../../../../dark.png';
import lmode from '../../../../light.png'
import dmode  from '../../../../dark.png'



function Beryllium ({switchM,switchd}){
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
                        <h1 className="rx-head">Beryllium</h1>
                        <div className="modeImgs">
                        <img className='mode' id="modeh" onClick={switchM} src={m} />
                        </div>
                    </div>
                <br/>
                
                <p className="rx-desc" >
                Beryllium is a chemical element with the symbol Be and atomic number 4. It is classified as an alkaline earth metal, and it has two electrons in its outermost shell.
                <br/><br/>
                Beryllium is a relatively rare element, and it is not found in its pure form in nature. Instead, it is usually found in minerals such as beryl and bertrandite.
                <br/><br/>
                Beryllium has a melting point of 1,287°C (2,349°F) and a boiling point of 2,471°C (4,480°F). It is a relatively lightweight metal, with a density of 1.85 g/cm3.
                <br/><br/>
                Beryllium has a high melting point and excellent thermal conductivity, making it useful in high-temperature applications. It is also non-magnetic and has good electrical conductivity.
                <br/><br/>
                Beryllium is highly toxic and can cause lung cancer if its dust or fumes are inhaled. As a result, it is strictly regulated in most countries.
                <br/><br/>
               <h3> Beryllium is used in various applications, including:</h3>
                <br/>
                <h3>Aerospace and defense:</h3> Beryllium is used in lightweight structural components, such as aircraft parts and missiles.
                <br/><br/>
                <h3>Nuclear industry:</h3> Beryllium is used as a neutron reflector in nuclear reactors.
                <br/><br/>
                <h3>X-ray equipment:</h3> Beryllium is used in X-ray windows because it is transparent to X-rays.
                <br/><br/>
                <h3>Electronics:</h3> Beryllium is used in electronic components, such as semiconductors and connectors.
                <br/><br/>
                Beryllium has a number of isotopes, including the stable isotopes beryllium-9 and beryllium-10, and the radioactive isotope beryllium-8. Beryllium-10 is used in radiocarbon dating and studies of soil erosion.
                <br/><br/>
                <h3>Some more details :</h3>

                Beryllium is a relatively expensive metal due to its scarcity and the difficulty in extracting it from its ores.
                <br/><br/>
                Beryllium is a strong and lightweight metal, with a higher stiffness-to-weight ratio than steel. This makes it useful in applications where strength and lightness are important, such as in satellites and other aerospace components.
                <br/><br/>
                Beryllium has a low coefficient of thermal expansion, which means it does not expand or contract significantly with changes in temperature. This property makes it useful in applications where dimensional stability is important, such as in precision instruments.
                <br/><br/>
                Beryllium is also used in the production of alloys, such as beryllium copper and beryllium nickel, which have high strength and corrosion resistance. These alloys are used in a variety of applications, including springs, electrical contacts, and bearings.
                <br/><br/>
                Beryllium has a high affinity for oxygen, which means it forms a protective oxide layer on its surface that resists corrosion. However, this oxide layer can be disrupted by acids or alkalis, which can cause beryllium to corrode rapidly.
                <br/><br/>
                Beryllium is a rare element, with a concentration in the Earth's crust of about 2-6 parts per million. The largest producers of beryllium are the United States, China, and Kazakhstan.
                <br/><br/>
                Beryllium has been identified as a possible candidate for use in fusion reactors, which aim to produce energy by replicating the nuclear fusion reactions that occur in the sun. Beryllium is being studied as a potential material for the reactor walls and other components because of its high melting point and low neutron activation properties.
                <br/><br/>
                Beryllium has a unique property called "magnetostriction", which means it changes shape when placed in a magnetic field. This property is being studied for use in applications such as actuators and sensors.

                </p>
                <br/><br/>
                <p className="rx-desc" >It was the minimal and efficient explaination can be given about Helium, our main focus is on concept building not on roting down.. I appreciate your dedication. Keep it up! Thanks for reading this.
                
                
            </p><br/>
            </div>
           <div className="dbut">
            {/* <button className="rxn-name dr" id="noprint" onClick={createPDF}>Print</button> */}
           </div>
            
            <br/><br/><br/><br/>
        </div>
        
    )
}

export default Beryllium;