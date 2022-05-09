import React from 'react'

const Counter = ({ number, handleNumber }) => {
    return (
        <>
            <p>{number}</p>
            <button onClick={handleNumber} data-id="+">sumar</button>
            <button onClick={handleNumber} data-id="-">restar</button>

        </>
    )
}

export default Counter