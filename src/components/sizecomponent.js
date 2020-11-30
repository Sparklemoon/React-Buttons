import React, { Component } from "react"

export default class SizeChanger extends Component {
    constructor(props) {
        super(props)

        this.state = {
            size: "font"
        }
        this.bigFontSize = this.bigFontSize.bind(this)
        this.smallFontSize = this.smallFontSize.bind(this)
    
    }

    bigFontSize(plusOne) {
        this.setState({ size: this.state.size + plusOne})
    }

    smallFontSize(minusOne) {
        this.setState({ size: this.state.size - minusOne})
    }
  
  
    render() {
      return (
         <div className="size-wrapper">
            <button style={{'fontSize': '36px'}} onClick={() => this.bigFontSize(1)}>small</button>
            <button style={{ 'fontSize': '20px'}} onClick={() => this.smallFontSize(1)}>BIG!</button> 
            {/* style: {{
                backgroundColor: 'pink',
                color: 'green',
                buttonsMargin: 10
            }}; */}
         </div>
      );
    }
}
  



















