import React, { Component } from "react"

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        this.upNumber = this.upNumber.bind(this)
        this.downNumber = this.downNumber.bind(this)
        this.reset = this.reset.bind(this)
    }


  
    upNumber(newCount) {
      this.setState({ counter: newCount + 1 })
    }
    
    downNumber(newCount) {
        this.setState({ counter: newCount - 1})
    }


    reset(newCount) {
        this.setState({ counter: newCount =0})
    }
  
    render() {
      return (
         <div className="counter-wrapper">
            <button onClick={() => this.upNumber}>UP</button>
            <button onClick={() => this.downNumber}>DOWN</button>
            <button onClick={() => this.reset}>Reset</button>
            <h1>Current Count: {this.state.counter}</h1>
         </div>
      );
    }
}
  



















