import React, { useState, useEffect } from 'react'

export default function toggle() {
    const [visibility, setVisibility] = useState("visible")
    const [buttonText, setButtonText] = useState("Hide")
       

    function handleToggle() {
        // this.setState({
        //     visibility: this.state.visibility === "visible" ? "hidden" : "visible"
        //     buttonText: this.state.buttonText === "Hide" ? "show" : "Hide"
        // })
        setVisibility(visibility === "visible" ? "hidden" : "visible")
        setButtonText(buttonText === "Hide" ? "Show" : "Hide")
    }

    
        return (
            <div className="toggle-wrapper">
                <h3 style={{ visibility:visibility }}>Hide Me!</h3>
                <button onClick={handleToggle}>{buttonText}</button>
            </div>
        )
    }




// import React, { Component } from "react"

// export default class Toggle extends Component {
//     constructor() {
//         super()

//         this.state = {
//             visibility: "visible"
//         }

//         this.handleToggle = this.handleToggle.bind(this)
//     }

//     handleToggle() {
//         this.setState({
//             visibility: this.state.visibility === "visible" ? "hidden" : "visible"
//         })
//     }

//     render() {
//         return (
//             <div className="toggle-wrapper">
//                 <h3 style={{ visibility: this.state.visibility }}>Hide Me!</h3>
//                 <button onClick={this.handleToggle}>HIde</button>
//             </div>
//         )
//     }
// }