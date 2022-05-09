import React from 'react'
import { useCounter } from '../customHooks/useCounter'

const CounterB = () => {
    const { number, increment, decrement } = useCounter()
    return (
        <>
            <h1>Componente sin lógica</h1>

            <p>{number}</p>
            <button onClick={increment}>sumar</button>
            <button onClick={decrement} >restar</button>
        </>
    )
}

export default CounterB