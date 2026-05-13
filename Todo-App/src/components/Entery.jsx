import { useRef } from "react";
import { useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { useContext } from "react";
function Entery()
{
  const {addClick}=useContext(TodoContext);
  const itemRef=useRef("");
  const dateRef=useRef("");
  function handleAddClick(event)
  {
    event.preventDefault();
    addClick(itemRef.current.value,dateRef.current.value);
    itemRef.current.value="";
    dateRef.current.value="";
    
  }
  return <form className="EnteryArea" onSubmit={handleAddClick}>
   <input type="text" placeholder="Enter Your Task Here" className="EnteryInput" ref={itemRef}/>
   <input type="date" className="DateInput" ref={dateRef}/>
   <button className="AddButton" type="submit">Add</button>

  </form>
}
export default Entery;