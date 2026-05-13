import { TodoContext } from "../Context/TodoContext";
import { useContext } from "react";
function Todo({TodoList})
{
  const {DelClick}=useContext(TodoContext);
  return <div className="TodoArea">

    <div className="TodoHeading">{TodoList.item}</div> 
    <div className="TodoDate">{TodoList.date}</div>
    <button className="DeleteButton" onClick={() => DelClick(TodoList.item)}>Delete</button>
  </div>

}
export default Todo;