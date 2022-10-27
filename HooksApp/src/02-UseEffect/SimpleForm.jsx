import { useEffect, useState } from 'react'
import { Message } from './Message';


export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'facundo',
        email: 'facundo@gmail.com'
    })

    const {username, email} = formState;


    const onInputChange = ({target}) =>{
        const {name, value} = target;
        setFormState({
            ...formState,
            [name] : value,
        })
    }
    useState(() => {}, [])



  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
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
        {
            (username === "facundo2") && <Message />
        }
    </>
  )
}
