import { createContext, useContext, useReducer } from 'react'

// Initial state for the todos
const initialState = {
  todos: [],
  labels: [
    { title: 'Label 1', id: 1 },
    { title: 'Label 2', id: 2 },
    { title: 'Label 3', id: 3 }
  ]
}

const TodosContext = createContext()

const TodosDispatchContext = createContext()

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case 'ADD_LABEL':
      return {
        ...state,
        labels: [...state.labels, action.payload]
      }
    default:
      return state
  }
}

// const TodosProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(todosReducer, initialState)

//     <TodosContext value={state}>
//   return (
//       <TodosDispatchContext value={dispatch}>{children}</TodosDispatchContext>
//     </TodosContext>
//   )
// }

const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState)

  return (
    <TodosContext.Provider value={state}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  )
}

function useTodos() {
  return useContext(TodosContext)
}

function useTodosDispatch() {
  return useContext(TodosDispatchContext)
}

export { TodosProvider, useTodosDispatch, useTodos }
