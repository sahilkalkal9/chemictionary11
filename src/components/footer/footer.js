import { Link } from "react-router-dom";
import "./footer.scss"
import red from "./redirect.png"


function Footer(){
    return(
        <div className="Footer" >
            <div className="footer-container">
                <p>Found any glitch ? <Link to="/contact"><b className="inform" >Inform Us </b></Link></p>
                
				
				<p className="sitemap">
					<Link to="/privacy-policy" className='foot-link'>
							<p className="linkF" id="com" >Privacy Policy</p>
					</Link>	
                    <Link to="/terms" className='foot-link'>
							<p className="linkF" id="com" >Terms & Conditions</p>
					</Link>	
                    <Link to="/refund-policy" className='foot-link'>
							<p className="linkF" id="com" >Refund Policy</p>
					</Link>
				</p>
                <p className="copy" >Chemictionary &copy; 2023</p>
            </div>
        </div>
    )
}
export default Footer;









// ,
//     {
//         "name" : "Acyloin Condensation",
//         "link" : "/categories/reactions/organic/acyloin-condensation"
//     },
//     {
//         "name" : "Alder-Ene Reaction",
//         "link" : "/categories/reactions/organic/alder-ene-reaction"
//       }, 
//       {
//         "name" : "Aldol Addition",
//         "link" : "/categories/reactions/organic/aldol-addition" 
//       },
//       {
//         "name" : "Aldol Condensation",
//         "link" : "/categories/reactions/organic/aldol-condensation" 
//       },
//       {
//         "name" : "Appel Reaction",
//         "link" : "/categories/reactions/organic/appel-reaction" 
//       },
//       {
//         "name" : "Arbuzov Reaction",
//         "link" : "/categories/reactions/organic/arbuzov-reaction" 
//       },
//       {
//         "name" : "Arndt-Eistert Synthesis",
//         "link" : "/categories/reactions/organic/arndt-eistert-synthesis" 
//       },
//       {
//       "name" : "Azide-Alkyne 1,3-Dipolar Cycloaddition​",
//       "link" : "/categories/reactions/organic/azide-alkyne-dipolar-cycloaddition" 
//     },
//     {
//       "name" : "Azo Coupling",
//       "link" : "/categories/reactions/organic/azo-coupling"
//     },
//     {
//         "name" : "Baeyer-Villiger Oxidation",
//         "link" : "/categories/reactions/organic/baeyer-villiger-oxidation"
//       },
//       {
//         "name" : "Baker-Venkataraman Rearrangement",
//         "link" : "/categories/reactions/organic/baker-venkataraman-rearrangement"
//       },
//       {
//         "name" : "Balz-Schiemann Reaction",
//         "link" : "/categories/reactions/organic/balz-schiemann-reaction"
//       },
//       {
//         "name" : "Bamford-Stevens Reaction",
//         "link" : "/categories/reactions/organic/bamford-stevens-reaction"
//       },
//       {
//         "name" : "Barton Decarboxylation",
//         "link" : "/categories/reactions/organic/barton-decarboxylation"
//       },
//       {
//         "name" : "Barton-McCombie Reaction",
//         "link" : "/categories/reactions/organic/barton-mc-combie-reaction"
//       },
//       {
//         "name" : "Baylis-Hillman Reaction",
//         "link" : "/categories/reactions/organic/baylis-hillman-reaction"
//       },
//       {
//         "name" : "Beckmann Rearrangement",
//         "link" : "/categories/reactions/organic/beckmann-rearrangement"
//       },
//       {
//         "name" : "Benzilic Acid Rearrangement",
//         "link" : "/categories/reactions/organic/benzilic-acid-rearrangement"
//       },
//       {
//         "name" : "Benzoin Condensation",
//         "link" : "/categories/reactions/organic/benzoin-condensation"
//       },
//       {
//         "name" : "Bergman Cyclization",
//         "link" : "/categories/reactions/organic/bergman-cyclization"
//       },
//       {
//         "name" : "Bestmann-Ohira Reagent",
//         "link" : "/categories/reactions/organic/bestmann-ohira-reagent"
//       },
//       {
//         "name" : "Biginelli Reaction",
//         "link" : "/categories/reactions/organic/biginelli-reaction"
//       },
//       {
//         "name" : "Birch Reduction",
//         "link" : "/categories/reactions/organic/birch-reduction"
//       },
//       {
//         "name" : "Bischler-Napieralski Reaction",
//         "link" : "/categories/reactions/organic/bischler-napieralski-reaction"
//       },
//       {
//         "name" : "Blaise Reaction",
//         "link" : "/categories/reactions/organic/blaise-reaction"
//       },
//       {
//         "name" : "Blanc Reaction",
//         "link" : "/categories/reactions/organic/blanc-reaction"
//       },
//       {
//         "name" : "Bohlmann-Rahtz Pyridine Synthesis",
//         "link" : "/categories/reactions/organic/bohlmann-rahtz-pyridine-synthesis"
//       },
//       {
//         "name" : "Boronic Acid Mannich Reaction",
//         "link" : "/categories/reactions/organic/boronic-acid-mannich-reaction"
//       },
//       {
//         "name" : "Bouveault-Blanc Reduction",
//         "link" : "/categories/reactions/organic/bouveault-blanc-reduction"
//       },
//       {
//         "name" : "Brook Rearrangement",
//         "link" : "/categories/reactions/organic/brook-rearrangement"
//       },
//       {
//         "name" : "Brown Hydroboration",
//         "link" : "/categories/reactions/organic/brown-hydroboration"
//       },
//       {
//         "name" : "Bucherer-Bergs Reaction",
//         "link" : "/categories/reactions/organic/bucherer-bergs-reaction"
//       },
//       {
//         "name" : "Buchwald-Hartwig Cross Coupling Reaction",
//         "link" : "/categories/reactions/organic/buchwald-hartwig-cross-coupling-reaction"
//       },
//       {
//         "name" : "Cadiot-Chodkiewicz Coupling",
//         "link" : "/categories/reactions/organic/cadiot-chodkiewicz-coupling"
//       },
//       {
//         "name" : "Cannizzaro Oxidation Reduction",
//         "link" : "/categories/reactions/organic/cannizzaro-oxidation-reduction"
//       },
//       {
//         "name" : "CBS Reduction",
//         "link" : "/categories/reactions/cbs-reduction"
//       },
//       {
//         "name" : "Chan-Lam Coupling",
//         "link" : "/categories/reactions/organic/chan-lam-coupling"
//       },
//       {
//         "name" : "Claisen Condensation",
//         "link" : "/categories/reactions/organic/claisen-condensation"
//       },
//       {
//         "name" : "Claisen Rearrangement",
//         "link" : "/categories/reactions/organic/claisen-rearrangement"
//       },
//       {
//         "name" : "Clemmensen Reduction", 
//         "link" : "/categories/reactions/organic/clemmensen-reduction"
//       },
//       {
//         "name" : "Collins Reagent",
//         "link" : "/categories/reactions/organic/collins-reagent"
//       },
//       {
//         "name" : "Cope Elimination",
//         "link" : "/categories/reactions/organic/cope-elimination"
//       },
//       {
//         "name" : "Cope Rearrangement",
//         "link" : "/categories/reactions/organic/cope-rearrangement"
//       },
//       {
//         "name" : "Corey-Bakshi-Shibata Reduction",
//         "link" : "/categories/reactions/organic/corey-bakshi-shibata-reduction"
//       },
//       {
//         "name" : "Corey-Chaykovsky Reaction",
//         "link" : "/categories/reactions/organic/corey-chaykovsky-reaction"
//       },
//       {
//         "name" : "Corey-Fuchs Reaction",
//         "link" : "/categories/reactions/organic/corey-fuchs-reaction"
//       },
//       {
//         "name" : "Corey-Kim Oxidation",
//         "link" : "/categories/reactions/organic/corey-kim-oxidation"
//       },
//       {
//         "name" : "Corey-Seebach Reaction",
//         "link" : "/categories/reactions/organic/corey-seebach-reaction"
//       },
//       {
//         "name" : "Corey-Suggs Reagent",
//         "link" : "/categories/reactions/organic/correy-suggs-reagent"
//       },
//       {
//         "name" : "Corey-Winter Olefin Synthesis",
//         "link" : "/categories/reactions/organic/corey-winter-olefin-synthesis"
//       },
//       {
//         "name" : "Coumarin Synthesis",
//         "link" : "/categories/reactions/organic/coumarin-synthesis"
//       },
//       {
//         "name" : "Criegee Mechanism for Ozonolysis",
//         "link" : "/categories/reactions/organic/criegee-mechanism-for-ozonolysis"
//       },
//       {
//         "name" : "Cross Metathesis",
//         "link" : "/categories/reactions/organic/cross-metathesis"
//       },
//       {
//         "name" : "Curtius Rearrangement Reaction",
//         "link" : "/categories/reactions/organic/curtius-rearrangement-reaction"
//       },
//       {
//         "name" : "Dakin Reaction",
//         "link" : "/categories/reactions/organic/dakin-reaction"
//       },
//       {
//         "name" : "Darzens Reaction",
//         "link" : "/categories/reactions/organic/darzens-reaction"
//       },
//       {
//         "name" : "Davis Oxidation",
//         "link" : "/categories/reactions/organic/davis-oxidation"
//       },
//       {
//         "name" : "De Kimpe Aziridine Synthesis",
//         "link" : "/categories/reactions/organic/de-kimpe-aziridine-synthesis"
//       },
//       {
//         "name" : "Delépine Reaction",
//         "link" : "/categories/reactions/organic/delepine-reaction"
//       },
//       {
//         "name" : "Dess-Martin Oxidation",
//         "link" : "/categories/reactions/organic/dess-martin-oxidation"
//       },
//       {
//         "name" : "Diazotisation",
//         "link" : "/categories/reactions/organic/diazotisation"
//       },
//       {
//         "name" : "Dieckmann Condensation",
//         "link" : "/categories/reactions/organic/dieckmann-condensation"
//       },
//       {
//         "name" : "Diels-Alder Reaction",
//         "link" : "/categories/reactions/organic/diels-alder-reaction"
//       },
//       {
//         "name" : "1,3-Dipolar Cycloaddition",
//         "link" : "/categories/reactions/organic/one-three-dipolar-cycloaddition"
//       },
//       {
//         "name" : "Directed ortho Metalation",
//         "link" : "/categories/reactions/organic/directed-ortho-metalation"
//       },
//       {
//         "name" : "Doebner Modification",
//         "link" : "/categories/reactions/organic/doebner-modification"
//       },
//       {
//         "name" : "Eglinton Reaction",
//         "link" : "/categories/reactions/organic/eglinton-reaction"
//       },
//       {
//         "name" : "Ene Reaction",
//         "link" : "/categories/reactions/organic/ene-reaction"
//       }
      

// {
//     "name" : "Enyne Metathesis"
//   },
//   {
//     "name" : "Epoxidation"
//   },
//   {
//     "name" : "Eschweiler-Clarke Reaction"
//   },
//   {
//     "name" : "Ester Pyrolysis"
//   },
//   {
//     "name" : "Esterification"
//   },
//   {
//     "name" : "Favorskii Reaction"
//   },
//   {
//     "name" : "Finkelstein Reaction"
//   },
//   {
//     "name" : "Fischer Esterification"
//   },
//   {
//     "name" : "Fischer Indole Synthesis"
//   },
//   {
//     "name" : "Fleming-Tamao Oxidation"
//   },
//   {
//     "name" : "Friedel-Crafts Acylation"
//   },
//   {
//     "name" : "Friedel-Crafts Alkylation"
//   },
//   {
//     "name" : "Friedlaender Synthesis"
//   },
//   {
//     "name" : "Fries Rearrangement"
//   },
//   {
//     "name" : "Fukuyama Coupling"
//   },
//   {
//     "name" : "Fukuyama Reduction"
//   },
//   {
//     "name" : "Gabriel Synthesis"
//   },
//   {
//     "name" : "Gewald Reaction"
//   },
//   {
//     "name" : "Glaser Coupling"
//   },
//   {
//     "name" : "Griesbaum Coozonolysis"
//   },
//   {
//     "name" : "Grignard Reaction"
//   },
//   {
//     "name" : "Grubbs Reaction"
//   },
//   {
//     "name" : "Haloform Reaction"
//   },
//   {
//     "name" : "Hantzsch Dihydropyridine Synthesis (Pyridine Synthesis)"
//   },
//   {
//     "name" : "Hay Coupling"
//   },
//   {
//     "name" : "Heck Reaction"
//   },
//   {
//     "name" : "Hell-Volhard-Zelinsky Reaction"
//   },
//   {
//     "name" : "Henry Reaction"
//   },
//   {
//     "name" : "Hiyama Coupling"
//   },
//   {
//     "name" : "Hiyama-Denmark Coupling"
//   },
//   {
//     "name" : "Hofmann Elimination"
//   },
//   {
//     "name" : "Horner-Wadsworth-Emmons Reaction"
//   },
//   {
//     "name" : "Hosomi-Sakurai Reaction"
//   },
//   {
//     "name" : "Huisgen Cycloaddition"
//   },
//   {
//     "name" : "Hunsdiecker Reaction"
//   },
//   {
//     "name" : "Hydroboration"
//   },
//   {
//     "name" : "Ireland-Claisen Rearrangement"
//   },
//   {
//     "name" : "Itsuno-Corey Reduction"
//   },
//   {
//     "name" : "Iwanow Reaction"
//   },
//   {
//     "name" : "Jacobsen Epoxidation"
//   },
//   {
//     "name" : "Jacobsen-Katsuki Epoxidation"
//   },
//   {
//     "name" : "Jocic Reaction"
//   },
  
//   {
//     "name" : "Johnson-Corey-Chaykovsky Reaction"
//   },
//   {
//     "name" : "Jones Oxidation"
//   },
//   {
//     "name" : "Julia-Lythgoe Olefination"
//   },
//   {
//     "name" : "Julia-Kocienski Olefination"
//   },
//   {
//     "name" : "Kabachnik-Fields Reaction"
//   },
//   {
//     "name" : "Kindler Reaction"
//   },
//   {
//     "name" : "Knoevenagel Condensation"
//   },
//   {
//     "name" : "Kochi Reaction"
//   },
//   {
//     "name" : "Kolbe Electrolysis"
//   },
//   {
//     "name" : "Kolbe Nitrile Synthesis"
//   },
//   {
//     "name" : "Kolbe-Schmitt Reaction"
//   },
//   {
//     "name" : "Koser's Reagent"
//   },
//   {
//     "name" : "Kowalski Ester Homologation"
//   },
//   {
//     "name" : "Kulinkovich Reaction"
//   },{
//     "name" : "Kulinkovich-de Meijere Reaction"
//   },
//   {
//     "name" : "Kulinkovich-Szymoniak Reaction"
//   },
//   {
//     "name" : "Kumada Coupling"
//   },
//   {
//     "name" : "Lawesson's Reagent"
//   },
//   {
//     "name" : "Leuckart Thiophenol Reaction"
//   },
//   {
//     "name" : "Luche Reduction"
//   },
//   {
//     "name" : "Malonic Ester Synthesis"
//   },
//   {
//     "name" : "Mannich Reaction"
//   },
//   {
//     "name" : "Markovnikov's Rule"
//   },
//   {
//     "name" : "McMurry Reaction"
//   },
//   {
//     "name" : "Meerwein-Ponndorf-Verley Reduction"
//   },
//   {
//     "name" : "Myers' Modification of the Ramberg-Bäcklund Reaction"
//   },
//   {
//     "name" : "Myers-Saito Cyclization"
//   },
//   {
//     "name" : "Michael Addition"
//   },
//   {
//     "name" : "Michaelis-Arbuzov Reaction"
//   },
//   {
//     "name" : "Mitsunobu Reaction"
//   },
//   {
//     "name" : "Miyaura Borylation Reaction"
//   },
//   {
//     "name" : "Modified Julia Olefination"
//   },
//   {
//     "name" : "Mukaiyama Aldol Addition"
//   },
//   {
//     "name" : "Nazarov Cyclization"
//   },
//   {
//     "name" : "Nef Reaction"
//   },
//   {
//     "name" : "Negishi Coupling"
//   },
//   {
//     "name" : "Newman-Kwart Rearrangement"
//   },
//   {
//     "name" : "Nitroaldol Reaction"
//   },
//   {
//     "name" : "Nozaki-Hiyama Coupling"
//   },
//   {
//     "name" : "Nucleophilic Substitution SN1"
//   },
//   {
//     "name" : "Nucleophilic Substitution SN2"
//   },
//   {
//     "name" : "O'Donnell Amino Acid Synthesis"
//   },
//   {
//     "name" : "Ohira-Bestmann Reagent"
//   },
//   {
//     "name" : "Olefin Metathesis"
//   },
//   {
//     "name" : "Oppenauer Oxidation"
//   },
//   {
//     "name" : "Overman Rearrangement"
//   },
//   {
//     "name" : "Oxy-Cope Rearrangement"
//   },
//   {
//     "name" : "Ozonolysis"
//   },
//   {
//     "name" : "Paal-Knorr Furan Synthesis"
//   },
//   {
//     "name" : "Paal-Knorr Pyrrole Synthesis"
//   },
//   {
//     "name" : "Paal-Knorr Thiophene Synthesis"
//   },
//   {
//     "name" : "Passerini Reaction"
//   },
//   {
//     "name" : "Paterno-Büchi Reaction"
//   },
//   {
//     "name" : "Pauson-Khand Reaction"
//   },
//   {
//     "name" : "Pechmann Condensation"
//   },
//   {
//     "name" : "Petasis Reaction"
//   },
//   {
//     "name" : "Peterson Olefination"
//   },
//   {
//     "name" : "Pinacol Coupling Reaction"
//   },
//   {
//     "name" : "Pinacol Rearrangement"
//   },
//   {
//     "name" : "Pinner Reaction"
//   },
//   {
//     "name" : "Prévost Reaction"
//   },
//   {
//     "name" : "Prilezhaev Reaction"
//   },
//   {
//     "name" : "Prins Reaction"
//   },
//   {
//     "name" : "Pschorr Reaction"
//   },
//   {
//     "name" : "Ramberg-Backlund Reaction"
//   },
//   {
//     "name" : "Reformatsky Reaction"
//   },
//   {
//     "name" : "Ring Closing Metathesis"
//   },
//   {
//     "name" : "Ring Opening Metathesis (Polymerization)"
//   },
//   {
//     "name" : "Ritter Reaction"
//   },
//   {
//     "name" : "Robinson Annulation"
//   },
//   {
//     "name" : "Rosenmund Reduction"
//   },
//   {
//     "name" : "Rosenmund-von Braun Reaction"
//   },
//   {
//     "name" : "Rubottom Oxidation"
//   },
//   {
//     "name" : "Sakurai Reaction"
//   },
//   {
//     "name" : "Sandmeyer Reaction"
//   },
//   {
//     "name" : "Saytzeff's Rule"
//   },
//   {
//     "name" : "Schiemann Reaction"
//   },
//   {
//     "name" : "Schlosser Modification"
//   },
//   {
//     "name" : "Schmidt Reaction"
//   },
//   {
//     "name" : "Schotten-Baumann Reaction"
//   },
//   {
//     "name" : "Seebach Umpolung"
//   },
  
//   {
//     "name" : "Seyferth-Gilbert Homologation"
//   },
//   {
//     "name" : "Sarett Reagent"
//   },
//   {
//     "name" : "Shapiro Reaction"
//   },
//   {
//     "name" : "Sharpless Aminohydroxylation"
//   },
//   {
//     "name" : "Sharpless Dihydroxylation"
//   },
//   {
//     "name" : "Sharpless Epoxidation"
//   },
//   {
//     "name" : "Shi Epoxidation"
//   },
//   {
//     "name" : "Simmons-Smith Reaction"
//   },
//   {
//     "name" : "Sonogashira Coupling"
//   },
//   {
//     "name" : "Staudinger Cycloaddition"
//   },
//   {
//     "name" : "Staudinger Reaction"
//   },
//   {
//     "name" : "Staudinger Reduction"
//   },
//   {
//     "name" : "Staudinger Synthesis"
//   },
//   {
//     "name" : "Steglich Esterification"
//   },
//   {
//     "name" : "Stetter Reaction"
//   },
//   {
//     "name" : "Stille Coupling"
//   },
//   {
//     "name" : "Strecker Synthesis"
//   },
//   {
//     "name" : "Suzuki Coupling"
//   },
//   {
//     "name" : "Swern Oxidation"
//   },
//   {
//     "name" : "Tamao-Kumada Oxidation"
//   },
//   {
//     "name" : "Tebbe Olefination"
//   },
//   {
//     "name" : "Tishchenko Reaction"
//   },
//   {
//     "name" : "Tsuji-Trost Reaction"
//   },
//   {
//     "name" : "Trost Allylation"
//   },
//   {
//     "name" : "Ugi Reaction"
//   },
//   {
//     "name" : "Ullmann Reaction"
//   },
//   {
//     "name" : "Upjohn Dihydroxylation"
//   },
//   {
//     "name" : "Van Leusen Imidazole Synthesis"
//   },
//   {
//     "name" : "Van Leusen Oxazole Synthesis"
//   },
//   {
//     "name" : "Van Leusen Reaction"
//   },
//   {
//     "name" : "Vicarious Nucleophilic Substitution"
//   },
//   {
//     "name" : "Vilsmeier Reaction"
//   },
//   {
//     "name" : "Wacker-Tsuji Oxidation"
//   },
//   {
//     "name" : "Weinreb Ketone Synthesis"
//   },
//   {
//     "name" : "Wenker Synthesis"
//   },
//   {
//     "name" : "Willgerodt-Kindler Reaction"
//   },
//   {
//     "name" : "Williamson Synthesis"
//   },
//   {
//     "name" : "Wittig-Horner Reaction"
//   },
//   {
//     "name" : "Wittig Reaction"
//   },
//   {
//     "name" : "[1,2]-Wittig Rearrangement"
//   },
//   {
//     "name" : "[2,3]-Wittig Rearrangement"
//   },
//   {
//     "name" : "Wohl-Ziegler Reaction"
//   },
//   {
//     "name" : "Wolff-Kishner Reduction"
//   },
//   {
//     "name" : "Wolff Rearrangement"
//   },
//   {
//     "name" : "Woodward cis-Hydroxylation"
//   },
//   {
//     "name" : "Woodward Reaction"
//   },
//   {
//     "name" : "Wurtz Reaction"
//   },
//   {
//     "name" : "Wurtz-Fittig Reaction"
//   },
//   {
//     "name" : "Yamaguchi Esterification"
//   }