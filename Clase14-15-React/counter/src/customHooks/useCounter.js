import { useState } from 'react'
export const useCounter = (initialValue = 0) => {
    const [number, setNumber] = useState(initialValue)

    const increment = () => {
        setNumber(prevNumber => prevNumber + 1)
    }
    const decrement = () => {
        setNumber(prevNumber => prevNumber - 1)
    }
    return { increment, decrement, number }
}

//No exponemos el setter del estado sino la implementación que hicimos con increment y decrement. Ahora tenemos la lógica encapsulada en esta función (el custom hook useCounter) y eso nos permite limpiar nuestros componentes App y CounterB.
