import React, { useState } from 'react'

export default function example() {
    // this.state ={
    //     count: 0
    // }

    // this.setState({ count: this.state.count + 1 })
    
    cosnt [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
       <div className='example-wrapper'>
           <h3>{count}</h3>
           <button onClick={handleClick}>Click Me!</button>

          
       </div>
    )
}