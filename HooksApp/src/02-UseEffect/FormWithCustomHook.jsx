import { useEffect, useState } from 'react'
import { useForm } from '../Hooks/useForm';


export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password, onClick} = useForm({username: "",email: "",password:""})

    // const {username, email, password} = formState;

    useState(() => {}, [])



  return (
    <>
        <h1>Formulario con Custom Hook</h1>
        <hr />
        <form>
            <input 
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange}
            />
            <input 
                type="email"
                className='form-control mt-2'
                placeholder='tu_email@mail.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />
            <input 
                type="password"
                className='form-control mt-2'
                placeholder='contraseña'
                name='password'
                value={password}
                onChange={onInputChange}
            />

            <button className='btn btn-primary mt-2' onClick={onClick}> Reset</button>

        
        </form>

    </>
  )
}
