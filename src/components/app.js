import React, { Component } from 'react';
import moment from "moment";

import AlignMe from "./alignme.js";
import Alignment from "./traditionalcomponents.js";



export default class App extends Component {
    constructor() {
     super();
     this.state = {
       showText: false,
     }      
    this.createText = this.createText.bind(this);
    this.condrender = this.buttonTime.bind(this);
     }
 
 createText() {
  this.setState({ showText: !this.state.showText});
 }
 
  buttonTime() {
    return (
     <p>MUAHAHAHAHAHAHHAHAHAHAAHAHAHHA</p>
    ); 
  }
 
 

  render() {
    return (
     <div className="App">
       <Alignment/>
       <div className="peekaboo-buttons">
        <button onClick={this.createText}>Click</button>
        {this.state.showText ? this.buttonTime() : null}
       </div>



      <div>
        <AlignMe />
      </div>
       {/* <div className="align-me-buttons">
         <h2>ALIGN ME</h2>
         <button>LEFT</button>
         <button>CENTER</button>
         <button>RIGHT</button>
        </div>

       <div className="counting-buttons">
         <button>Up</button> 
         <button>Down</button>
       </div>
      
       <div className="bigger-smaller-buttons">
         <button>Bigger</button>
         <button>Smaller</button>
       </div>
          */}
       
       <div className="time">{moment().format("h:mm:ss")}</div>
      

     </div>
      );
    }
  }

















  