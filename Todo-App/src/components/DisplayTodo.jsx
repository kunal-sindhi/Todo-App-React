import Todo from "./Todo";
import { TodoContext } from "../Context/TodoContext";
import { useContext } from "react";
function DisplayTodo()
{
  const {TodoList}=useContext(TodoContext);
 
  return <div className="DisplayTodoArea">
    {
      TodoList.map((TodoList)=><Todo key={TodoList.date} TodoList={TodoList} />)
    }
  </div>
}
export default DisplayTodo;