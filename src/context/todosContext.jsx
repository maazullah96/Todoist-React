import { createContext, useContext, useReducer } from 'react'
import { faLockOpen, faFileShield } from '@fortawesome/free-solid-svg-icons'
// Initial state for the todos
const initialState = {
  todos: [],
  labels: [
    { title: 'Label 1', id: 1, color: 'red' },
    { title: 'Label 2', id: 2, color: 'orange' },
    { title: 'Label 3', id: 3, color: 'blue' }
  ],
  priorities: [
    { title: 'Priority 1', id: 1, color: 'red' },
    { title: 'Priority 2', id: 2, color: 'orange' },
    { title: 'Priority 3', id: 3, color: 'blue' },
    { title: 'Priority 4', id: 4, color: 'black' }
  ],
  projects: [
    { title: 'Inbox', id: 1, color: 'blue', icon: faFileShield },
    { title: 'Health', id: 2, color: 'black', icon: faLockOpen }
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
    case 'ADD_PRIORITY':
      return {
        ...state,
        priorities: [...state.priorities, action.payload]
      }
    default:
      return state
  }
}

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
