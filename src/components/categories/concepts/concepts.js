import React, { Component } from 'react';
import nf from "../../../photos/notf.png"
import { Link } from 'react-router-dom'
import wait from "../../../photos/wait.png"
import concept from "./concepts.json";
import GoToTop from '../../../top';






class Concepts extends Component {
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
    const { searchfield } = this.state;
    const filteredRxns = concept.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());


    })
    if (searchfield === "") {
      for (var i = 0; i < concept.length; i++) {
        filteredRxns.pop();
      }

    }
    return (
      <div className='Categories Organic'>
        {/* <div className="back-container">
          <Link to="/categories/reactions">
            <img className="back" src={back} alt="back" />
          </Link>
        </div> */}

        <p className="categories-head" >Concepts</p>
        <p className="sub-search" >Search using name of the concept</p>
        <br />

        <input type="text" placeholder="Search here.." className="searchbox"
          onChange={this.onSearchChange} />
        <br />
        {/* <p className="sub-search" id="cr" >Click on the name of reaction for explaination</p> */}
        {/* <br/> */}
        <div className="reactions" >
          {(this.state.searchfield === "")
            ? (

              <div className="rxn-not-found">
                <img className="rxn-no-img" src={wait} alt="waiting" />
                <h3 className="rxn-no-text">Waiting for task.</h3>
              </div>
            )
            : (
              (!filteredRxns.length && this.state.searchfield !== "")
                ? (
                  <div className="rxn-not-found">
                    <img className="rxn-no-img" src={nf} alt="not found" />
                    <h3 className="rxn-no-text">Sorry, we can't find any organic reaction.<br /> Please try to search any other keyword</h3>
                  </div>
                )
                :
                (
                  filteredRxns.map((k) => (
                    <Link to={k.link}>
                      <div className="filteredRxns chc">
                        <h1 className="rxn-name">{k.name}</h1>
                      </div>
                    </Link>
                  ))

                )
            )

          }

        </div>
        <GoToTop />
      </div>
    )


  }
}

export default Concepts;


