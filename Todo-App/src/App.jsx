import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Heading from './components/Header'
import Entery from './components/Entery'
import DisplayTodo from './components/DisplayTodo'
import Todo from './components/Todo'
import EmptyTodo from './components/EmptyTodo'
import { TodoContext } from './Context/TodoContext'


function App() {
 
 const [TodoList, setTodoList] = useState([]);
 function addClick(item,date)
 {
  setTodoList([...TodoList,{item,date}])
 }
 function DelClick(item)
 {
  setTodoList(TodoList.filter((todo) => todo.item !== item));
 }
  return (
    <TodoContext.Provider value={{addClick,DelClick,TodoList}}>
    <div className="Container">
      <Heading />
      <Entery />
      {TodoList.length===0?<EmptyTodo />: <DisplayTodo/>}
     
    </div>
    </TodoContext.Provider>
  )
}

export default App
