import { useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false,

  },
  {
    id: '1',
    title: 'todo 2',
    completed: false,
  }
]
function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)

  return (
    <>
      <Todos todos={todos} />
    </>
  )
}

export default App
