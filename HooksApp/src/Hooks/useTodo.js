import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
export const useTodo = () => {

    const init = () =>{
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const initialState = [];

    const [todos, dispatch] = useReducer(todoReducer, initialState,init )
    useEffect(() => {localStorage.setItem('todos',JSON.stringify(todos))}, [todos])
    
    const handleNewTodo = (todo) =>{
        const action = {
            type: "Add Todo",
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) =>{
        const action = {
            type: 'Remove Todo',
            payload: id
        }
        dispatch(action)
    }

    const handleToggleTodo = (id) =>{
        const action = {
            type: 'Toggle Todo',
            payload: id
        }
        dispatch(action)
    }

    const todosCount = todos.length;

    const pendingTodosCount = todos.filter(todo=> !todo.done).length;
  return {
    todos, handleDeleteTodo,handleToggleTodo,handleNewTodo, todosCount, pendingTodosCount
  }
}
