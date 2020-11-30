import React, { Component } from 'react';


export default class Counting extends Component {
    constructor() {
      super();
      this.state = {
        count: 0
      }
      this.goUp = this.goUp.bind(this)
      this.goDown = this.goDown.bind(this)
    }

    goUp(plusOne) {
      this.setState({ count: this.state.count + plusOne})
    }

    goDown(minusOne) {
      this.setState({ count: this.state.count - minusOne})
    }
  
  render() {
    return (
    
        <div className="counts">
          <button onClick={() => this.goDown(1)}>small</button>
          <p> {this.state.count} </p>
          <button onClick={() => this.goUp(1)}>BIG!</button> 
        </div>
      
    );
  }
}