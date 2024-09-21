import React, { Component } from 'react';
import './periodic.scss';
import chart from "../../../photos/chart.png"
import elements from "../../../photos/element.png"
import GoToTop from '../../../top';

import {Link,Outlet} from 'react-router-dom'



// import ScrollToTop from "react-scroll-to-top";
// import SearchP from './search/search';




function Periodic (){


  const changeColorChart =()=>{
    document.getElementById("chart").style.color = "blue";
    document.getElementById("ele").style.color = "#778899";
    
    
}
const changeColorElements =()=>{
    document.getElementById("ele").style.color = "red";
    document.getElementById("chart").style.color = "#778899";
   
}




  return( 
    <div className='Periodic Categories'>
    <p className="categories-head" >Periodic Table</p>
      
    <br/>
      <div className='periodic-menu'>
                {/* <Link to="/categories/periodic-table/chart" className='nav-link'>
		                <p className="p-menu-item" onClick={changeColorChart} id="chart" >Chart</p>
		            </Link> */}
                <div className="categories-container">
                  <Link className="category-link" to="/categories/periodic-table/chart" >
                      <div className="category chc">
                        <div className="category-content">
                          <img className="cat-img" alt='image' src={chart} />
                          <h1>Chart</h1>
                        </div>
                      </div>
                  </Link>
                  <Link className="category-link" to="/categories/periodic-table/elements" >
                      <div className="category chc">
                        <div className="category-content">
                          <img className="cat-img" alt='image'  src={elements} />
                          <h1>Elements</h1>
                        </div>
                      </div>
                  </Link>
                </div>
                
                {/* <Link to="/categories/periodic-table/elements" className='nav-link'>
		                <p className="p-menu-item" onClick={changeColorElements} id="ele" >Elements</p>
		            </Link> */}
      </div><br/>
      
      <GoToTop/>
    
                 


      
      
    </div>
  )
}

export default Periodic;