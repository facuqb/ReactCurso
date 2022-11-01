console.log("hola mundo")

const initialState = [{
    id: 1,
    todo: 'Recolecta la piedra del alma',
    done: false,
}]

const todoReducer = ( state = initialState, action = {} ) =>{
    if(action.type === '[TODO] add todo'){
        return [...initialState, action.payload]
    }



    return state
}
let todos = todoReducer()

const newTodo={
    id: 2,
    todo: 'Romper las piedras del inframundo',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(initialState, addTodoAction)

console.log(todos)