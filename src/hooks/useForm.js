import { useState } from "react"

export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange, reset]

}


export const useFormAndChangeBackground = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({target}) => {
        if(target.style.backgroundColor !== 'rgb(213, 213, 213)') {
            target.style.backgroundColor = '#D5D5D5'
        }
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange, setValues, reset]

}
