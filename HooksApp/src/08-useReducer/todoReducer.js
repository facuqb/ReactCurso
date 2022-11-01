
export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'abc':
        throw new Error('action.type = ABC no esta implementada');
    default:
        return initialState;
  }
}
