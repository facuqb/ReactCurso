import { useTodo } from '../Hooks/useTodo';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';

export const TodoApp = () => {

    const {todos, handleDeleteTodo,handleToggleTodo,handleNewTodo, todosCount, pendingTodosCount} = useTodo();

  return (
        <>
            <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount} </small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} remove={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd todo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}
