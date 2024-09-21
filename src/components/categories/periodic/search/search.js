import React, { Component } from 'react';

import nf from "../../../../photos/notf.png"
import {Link} from 'react-router-dom'
import GoToTop from '../../../../top';
import wait from "../../../../photos/notf.png"
import periodic from "../periodic.json";




class SearchP extends Component {
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
    const filteredRxns = periodic.filter(r =>{
      return r.name.toLowerCase().includes(searchfield.toLowerCase());
      
      
    })
    if(searchfield === "")
    {
      for(var i = 0 ; i <periodic.length; i++)
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
        
        
        {/* <img className='pt-img' src={pt} /> */}
        <p className="categories-head" >Elements</p>
        <p className="sub-search" >Search using name of the element</p>
        <br/>
       
            <input type="text" placeholder="Search here.." className="searchbox" 
            onChange={this.onSearchChange} />
          <br/>
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
                      <img className="rxn-no-img" src={nf} alt="not found" />
                      <h3 className="rxn-no-text">Sorry, we can't find any organic reaction.<br/> Please try to search any other keyword</h3>
                    </div>
                    )
                  :
                  ( 
                    filteredRxns.map((rxn) => (
                        <Link to ={rxn.link}>
                            <div className="filteredRxns chc">
                              <h1 className="rxn-name">{rxn.name}</h1>
                            </div>
                        </Link>
                          ))

                    )
                )
				            
				    }
            
				    </div>
            
            <GoToTop/>
        </div>
      ) 
        
     
  }
}

export default SearchP;


