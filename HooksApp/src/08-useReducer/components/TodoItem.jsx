

export const TodoItem = ({todo, remove, onToggleTodo}) => {
  return (
    <li  className='list-group-item d-flex justify-content-between'
         onClick={() => onToggleTodo(todo.id)}>
                <span className={`align-self-center ${todo.done && "text-decoration-line-through"}`}>{todo.description}</span>
                <button
                onClick={() => remove(todo.id)} 
                className='btn btn-danger'>Borrar</button>    
            </li>
  )
}
