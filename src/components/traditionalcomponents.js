
import React, { Component } from "react"

export default class Alignment extends Component {
    constructor() {
        super()

        this.state = {
            alignment: "flex-start"
        }

        this.handleAlignmentChange =this.handleAlignmentChange.bind(this)
    }

    handleAlignmentChange(newAlignment) {
        this.setState( { alignment: newAlignment})
    }

    render() {
        return (
            <div className="alignment-wrapper">
                <h2 style={{
                    display:"flex",
                    justifyContent: this.state.alignment

                }}>Align Me</h2>
                <button onClick={() => this.handleAlignmentChange("flex-start")}>left</button>
                <button onClick={() => this.handleAlignmentChange("center")}>center</button>
                <button onClick={() => this.handleAlignmentChange("flex-end")}>right</button>

            </div>
        )
    }
}