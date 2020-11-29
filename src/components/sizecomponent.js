import React, { Component } from 'react';


class Size extends Component {
  render() {
    return (
      <div className="size">
        <SizeChanger
          targets={['#target .content']}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
          }}
          options={{
            stepSize: 2,
            range: 3
          }}
          customButtons={{
            up: <span style={{'fontSize': '36px'}}>A</span>,
            down: <span style={{'fontSize': '20px'}}>A</span>,
            style: {
              backgroundColor: 'pink',
              color: 'green',
              
            },
            buttonsMargin: 10
          }}          
        />
        <div id="target">
          <p className="title">small</p>
          <p className="content">BIG!</p>
        </div>
      </div>
    );
  }
}