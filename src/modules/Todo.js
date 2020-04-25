import moment from "moment";
export default class Todo{
  constructor(name,toDoDate,state='ToDo',isImportant=false){
      this.id=Date.now();
      this.name=name;
      this.toDoDate=toDoDate;
      this.state=state;
      this.isImportant=isImportant;
  
    } 

  }
  

export function AddTodo(){

const ToDoForm=document.getElementById("ToDoForm");
ToDoForm.addEventListener("submit",(event)=>{
  event.preventDefault();

  /* get last todo list from localstorage before writing to it */

let todolist=JSON.parse(localStorage.getItem('MyToDoList')) ? JSON.parse(localStorage.getItem('MyToDoList')):[];
let todolist_undo= JSON.parse(localStorage.getItem('todolist_undo')) ? JSON.parse(localStorage.getItem('todolist_undo')) : [];

/* save current todolist to Undo array before adding */
todolist_undo.unshift(todolist);
localStorage.setItem('todolist_undo',JSON.stringify(todolist_undo));

/* add  todo to local storage */

let todo=document.getElementById("toDoInput").value;
let toDoDate=document.getElementById("toDoDate").value;

      toDoDate=toDoDate?moment(toDoDate).format("D/M/YYYY"):"Not mentionned";
      let todoObject=new Todo(todo,toDoDate);
      todolist.push(todoObject);
localStorage.setItem('MyToDoList',JSON.stringify(todolist));



document.getElementById("ToDoForm").reset();
//RenderList();
location.reload();


});

} 
export function RemoveTodo(){
  let todolist=JSON.parse(localStorage.getItem('MyToDoList'))?JSON.parse(localStorage.getItem('MyToDoList')):[];
  let todolist_undo= JSON.parse(localStorage.getItem('todolist_undo')) ? JSON.parse(localStorage.getItem('todolist_undo')) : [];
  
  
    todolist.forEach( (todo,index)=>{
      
      const buttonId='rm'+index;
      const removeButton=document.getElementById(buttonId);

      removeButton.addEventListener("click",()=>{
        /* save current todolist to Undo array before Removing */
          todolist_undo.unshift(todolist);
          localStorage.setItem('todolist_undo',JSON.stringify(todolist_undo));

          todolist.splice(index,1)
          localStorage.setItem('MyToDoList',JSON.stringify(todolist));
          //RenderList(); 
          location.reload();
      });
     
  });

}





