import { useForm } from "../../Hooks/useForm"


export const TodoAdd = ({todo}) => {
    const { description, onInputChange,onResetForm } = useForm({description:""})

    const onSubmit = (e) =>{
        e.preventDefault();
        if(description.length < 2) return;
        todo({id: Math.round(Math.random() * 5000),
            done: false,
            description})
        onResetForm()
    }


  return (
    <form onSubmit={onSubmit}>
    <input 
        type="text"
        placeholder='que hay que hacer?'
        className='form-control'
        name="description"
        value={description}
        onChange={onInputChange} />

    <button
        type='submit'
        className='btn btn-outline-primary'>
            Agregar
        </button>
</form>
  )
}
