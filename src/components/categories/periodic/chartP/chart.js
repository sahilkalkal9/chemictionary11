import pt from "../../../../photos/pt.jpg"

import GoToTop from '../../../../top';

function ChartP({switchM}){



    

    return(
        <div className="chartP Categories">
            <p className="categories-head" >Chart</p><br/>
            <div className="content-rxn" id='crect' >
                    <div className="head-det">
                        <h1 className="rx-head">Periodic Table Chart</h1>
                        
                    </div>
                <br/>
                <img className="pt-img" src={pt}/><br/><br/>
                
                <p className="rx-desc" >
                    The periodic table is a chart that organizes all known chemical elements according to their atomic structure, properties, and chemical behavior. Here are the details of the periodic table chart:<br/><br/>

                    <h3>Layout:</h3> The periodic table is arranged in rows called periods and columns called groups or families. There are seven periods and 18 groups in the modern periodic table.
                    <br/><br/>
                    <h3>Atomic number:</h3> The atomic number of an element is the number of protons in its nucleus. Elements are arranged in the periodic table in order of increasing atomic number.
                    <br/><br/>
                    <h3>Chemical symbol:</h3> Each element has a unique chemical symbol that consists of one or two letters. For example, the symbol for carbon is C, and the symbol for hydrogen is H.
                    <br/><br/>
                    <h3>Atomic mass:</h3> The atomic mass of an element is the total mass of its protons, neutrons, and electrons. It is usually listed below the chemical symbol.
                    <br/><br/>
                    <h3>Group number:</h3> Elements in the same group have similar chemical and physical properties. The group number is located at the top of each column.
                    <br/><br/>
                    <h3>Period number:</h3> The period number is located at the left side of each row. Elements in the same period have the same number of electron shells.
                    <br/><br/>
                    <h3>Properties:</h3> The periodic table can be used to predict the properties of elements based on their position in the table. For example, elements in the same group tend to have similar reactivity and form similar compounds.
                    <br/><br/>
                    <h3>Types of elements:</h3> The periodic table contains three types of elements: metals, nonmetals, and metalloids. Metals are located on the left side and middle of the periodic table, nonmetals are located on the right side, and metalloids are located along the diagonal between the metals and nonmetals.
                    <br/><br/>
                    <h3>Periodic trends:</h3> There are several periodic trends that can be observed in the periodic table, such as atomic radius, electronegativity, ionization energy, and electron affinity.
                    <br/><br/>
                    <h3>History:</h3> The periodic table was first developed by Dmitri Mendeleev in 1869. Since then, it has been revised and updated many times to reflect new discoveries and understandings about the nature of elements.
                    <br/><br/>

                    <h3>Periodic table blocks:</h3> The periodic table can be divided into four blocks: s-block, p-block, d-block, and f-block. These blocks refer to the electron configuration of the elements in each block.
                    <br/>
                    
                        <ul>
                            <li><b>S-block elements:</b> located in the first two groups, these elements have their valence electrons in the s-orbital.</li>
                            <li><b>P-block elements:</b> located in groups 13-18, these elements have their valence electrons in the p-orbital.</li>
                            <li> <b>D-block elements:</b> located in groups 3-12, these elements have their valence electrons in the d-orbital.</li>
                            <li><b>F-block elements:</b> located below the main periodic table, these elements have their valence electrons in the f-orbital.</li>
                            <li><b>Noble gases:</b> Group 18 of the periodic table is known as the noble gases, which are chemically stable and do not readily form compounds with other elements.</li>
                        </ul>
                    
                    
                    
                    <br/>

                    <h3>Transition metals:</h3> The d-block elements are also known as transition metals because they often exhibit multiple oxidation states and can form complex ions.
                    <br/><br/>

                    <h3>Lanthanides and actinides:</h3> The f-block elements are known as the inner transition metals and are further divided into the lanthanides and actinides.
                    <br/>
                    <ul>
                        <li>
                            <b>Lanthanides:</b> Located in the top row of the f-block, these elements have similar properties and are often used in alloys and magnets.
                        </li>
                        <li>
                            <b>Actinides:</b> Located in the bottom row of the f-block, these elements are all radioactive and many are synthetic.
                        </li>
                    </ul>

                    <br/>
                    <h3>Group trends:</h3> Each group of elements has characteristic trends in their properties. For example, the alkali metals (Group 1) are highly reactive and have low melting and boiling points, while the halogens (Group 17) are highly reactive nonmetals that form salts with alkali metals.
                    <br/><br/>

                    <h3>Periodic trends:</h3> There are several periodic trends that can be observed as you move across a period or down a group in the periodic table.
                    <ul>
                        <li>
                            <b>Atomic radius:</b> decreases across a period and increases down a group.
                        </li>
                        <li>
                            <b>Electronegativity:</b> increases across a period and decreases down a group.
                        </li>
                        <li>
                           <b> Ionization energy:</b> increases across a period and decreases down a group.
                        </li>
                        <li>
                            <b>Electron affinity:</b> generally increases across a period and decreases down a group.
                        </li>
                        
                    </ul>
                    <br/>

                    
                    
                    
                   
                   <h3> Uses:</h3> The elements in the periodic table have a wide range of uses in industry, medicine, technology, and other areas. For example, iron is used in construction and manufacturing, carbon is used in the production of steel and as a component of fuels and diamonds, and gold is used in jewelry, electronics, and medicine.
                    <br/><br/>

                    Overall, the periodic table is a valuable tool for understanding the properties and behavior of chemical elements, and it is widely used in chemistry, physics, and other fields of science.


                </p>
                <br/><br/>
                <p className="rx-desc" >It was the minimal and efficient explaination can be given about Periodic Table, if you want to know about each element in deep then go to the elements section and search the element using it's name, our main focus is on concept building not on roting down.. I appreciate your dedication. Keep it up! Thanks for reading this.</p><br/>
            </div>
            <GoToTop/>
        </div>
    )
}
export default ChartP;