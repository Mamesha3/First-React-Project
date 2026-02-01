import Done from "./done"
import ToDo from "./todo"
import { useState } from "react"

function App() {
  const [toggleBtn, setToggleBtn] = useState({
    todo: false,
    completed: false
  })

  // todo condition
  function toggleTodo() {
    setToggleBtn(prev => ({
      ...prev,
      todo: !prev.todo
    }))
  }   
  // close todo condition

  function toggleCo() {
    setToggleBtn(prev => ({
      ...prev,
      completed: !prev.completed
    }))

  }


  return (
  <>
    <ToDo 
     toggleBtn={toggleBtn.todo}
     toggleCondition={toggleTodo}
    />
    <Done 
     toggleBtn={toggleBtn.completed}
     toggleCondition={toggleCo}
    />
  </>
  )
}

export default App