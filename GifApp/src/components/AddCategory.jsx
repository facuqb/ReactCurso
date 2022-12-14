import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState("")
    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        if(inputValue.trim().length < 2) {
            return
        }
        onNewCategory(inputValue)
        setInputValue("")

    }

  return (
    <form onSubmit={onSubmit}>
        <input 
    type="text"
    placeholder="Busca Gifs" 
    value = { inputValue }
    onChange={ onInputChange } 
         />
    </form>
  )
}
