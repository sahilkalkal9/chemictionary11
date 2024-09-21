import React, { Component } from 'react';
import './inorganic.scss';
import nf from "../../../../photos/notf.png"


import wait from "../../../../photos/wait.png"
import inreactions from "./inorganic.json"
import GoToTop from '../../../../top';

class Inorganic extends Component {
  constructor() {
    super()
    this.state = {
      searchfield: ''
    }
  }

  

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const {searchfield} = this.state;
    const filteredRxns = inreactions.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if(searchfield === "")
    {
      for(var i = 0 ; i <inreactions.length; i++)
      {
        filteredRxns.pop();
      }
      
    }
    return(
      <div className='Organic Categories'>
        {/* <div className="back-container">
          <Link to="/categories/reactions">
            <img className="back" src={back} alt="back" />
          </Link>
        </div> */}
          <p className="categories-head" >Inorganic</p>
          <p className="sub-search" >Search using name of the reaction</p>
      <br/>
          
            <input type="text" placeholder="Search here.." className="searchbox" 
            onChange={this.onSearchChange} />
         <br/>
          <p className="sub-search" id="cr" >Click on the name of reaction for explaination</p>
          <div className="reactions" >
						{ (this.state.searchfield==="")
              ? (
                  <div className="rxn-not-found">
                      <img className="rxn-no-img" src={wait} alt="waiting" />
                      <h3 className="rxn-no-text">Waiting for task.</h3>
                  </div>
                ) 
              : (
                (!filteredRxns.length && this.state.searchfield !=="")
                  ? (
                    <div className="rxn-not-found">
                      <img className="rxn-no-img" src={nf} alt="not found"/>
                      <h3 className="rxn-no-text">Sorry, we can't find any organic reaction.<br/> Please try to search any other keyword</h3>
                    </div>
                    )
                  :
                  (
                    filteredRxns.map((rxn) => (
                            <div className="filteredRxns chc">
                              <h1 className="rxn-name">{rxn.name}</h1>
                             
                            </div>
                          ))
                    )
                )
                    
            }
				    </div>
            <br/><br/> 
            <center>
              <p className="qoute">"The chemical name for water (H<sub>2</sub>O) is dihydrogen monoxide."<br/> 
              </p>
            </center>
          <GoToTop/>
        </div>
      ) 
        
     
  }
}

export default Inorganic;


