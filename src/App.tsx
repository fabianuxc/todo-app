import { useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: true,

  },
  {
    id: '2',
    title: 'todo 2',
    completed: false,
  }
]
function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos todos={todos} onRemoveTodo={handleRemove} />
    </div>
  )
}

export default App
