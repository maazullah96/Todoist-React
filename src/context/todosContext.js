import { createContext, useContext, useReducer } from 'react'

// Initial state for the todos
const initialState = {
  todos: [],
  labels: []
}

const TodosContext = createContext()

const TodosDispatchContext = createContext()

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state, action.payload]
      }
    case 'ADD_LABEL':
      return {
        ...state,
        labels: [...state.labels, action.payload]
      }
  }
}

const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState)

  return (
    <TodosContext value={state}>
      <TodosDispatchContext value={dispatch}>{children}</TodosDispatchContext>
    </TodosContext>
  )
}

export function useTodos() {
  return useContext(TodosContext)
}

export function useTodosDispatch() {
  return useContext(TodosDispatchContext)
}
