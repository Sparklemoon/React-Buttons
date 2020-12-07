
import React, { Component } from "react"

export default class Counter extends Component {
    constructor() {
        super()

       this.state = {
           number:0
       }
       this.handleChange = this.handleChange.bind(this)
    }

    handleChange(direction) {
        this.setState({
            number: direction ==="+" ? this.state.number + 1 : this.state.number -1
        })
    }
   render() {
       return (
           <div className="counter-wrapper">
               <button onClick={() => this.handleChange("+")}>DO II NAO!</button>
               <h3>{this.state.number}</h3>
               <button onClick={() => this.handleChange("-")}>IT IS DONE!</button>
           </div>
       )
       }
   }
