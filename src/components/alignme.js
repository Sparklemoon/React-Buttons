import React from 'react'

function AlignMe() {

    function clickHandler() {
        console.log('test')
    }
    return (
        <div>
            <h2>MOVE MEEEEEE</h2>
       <button onClick={clickHandler}>NEW ALIGN ME BUTTON </button>
        </div>
    )
}

export default AlignMe