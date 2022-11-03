import { TodoItem } from "./TodoItem"


export const TodoList = ({todos, remove, onToggleTodo}) => {
  return (
    <ul className='list-group'>
        {todos.map(todo => (
           <TodoItem key={todo.id} todo={todo} remove={remove} onToggleTodo = {onToggleTodo} />
        ))}
    </ul>
  )
}
