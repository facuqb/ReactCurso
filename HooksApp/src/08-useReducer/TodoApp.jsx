import { useReducer } from 'react';
import { TodoList } from './components/TodoList';
import { todoReducer } from './todoReducer';

const initialState = [{
    id:new Date().getTime(),
    description: 'recolectar la piedra del alma',
    done: false
},{
    id: new Date().getTime()*2,
    description: 'recolectar la piedra del tiempo',
    done: false
}]


export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState )



  return (
        <>
            <h1>TodoApp: 10, <small>pendentes: 2 </small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos}/>
                </div>
                <div className="col-5">
                    <h4>Agregar todo</h4>
                    <hr />
                    <form>
                        <input 
                            type="text"
                            placeholder='que hay que hacer?'
                            className='form-control' />

                        <button
                            type='submit'
                            className='btn btn-outline-primary'>
                                Agregar
                            </button>
                    </form>
                </div>
            </div>
        </>
    )
}
