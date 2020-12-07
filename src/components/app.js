import React, { Component } from 'react';
import moment from "moment";

import AlignMe from "./alignme.js";
import Alignment from "./traditionalcomponents.js";
import Counting from "./countingcomponent.js";
import SizeChanger from "./sizecomponent.js";
// import Toggle from "./toggle.js";
import Counter from "./counter.js"
import Resizer from "./resizer.js"
import Color from "./color.js"
import Clock from "./clock.js"

import Example from "./stateexample.js"
import EffectExample from "./effectExamples.js"
import Toggle from "./hookstoggle.js"



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
        <hr />
        <Toggle />
        <hr />
        <Counter />
        <hr />
        <Resizer />
        <hr />
        <Color />
        <hr/>
        <Clock />
        <hr/>
        <EffectExample />
        <hr />
        <Example />
        <div className="peekaboo-buttons">
         <button onClick={this.createText}>Click</button>
         {this.state.showText ? this.buttonTime() : null}
        </div>

        <SizeChanger />
        <Counting />
       <div>
        <AlignMe />
       </div>
      
       
       <div className="time">{moment().format("h:mm:ss")}</div>
      

     </div>
    )};
    }
    
  
  















 