import { createContext } from "react";
export const TodoContext=createContext({addClick:()=>{},
DelClick:()=>{},
TodoList:[],

});
export default TodoContext;