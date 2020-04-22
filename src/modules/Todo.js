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

let todolist=[];
let lastList=JSON.parse(localStorage.getItem('MyToDoList'));
if(lastList!=null)todolist=lastList;

/* add  todo to local storage */

let todo=document.getElementById("toDoInput").value;
let toDoDate=document.getElementById("toDoDate").value;

      if(toDoDate=="")toDoDate="Not mentionned";
      let todoObject=new Todo(todo,toDoDate);
      todolist.push(todoObject);
      //console.warn('added',todolist);
localStorage.setItem('MyToDoList',JSON.stringify(todolist));
document.getElementById("ToDoForm").reset();

location.reload();


});

} 
export function RemoveTodo(){
  let todolist=[];
    let lastList=JSON.parse(localStorage.getItem('MyToDoList'));
    if(lastList!=null)todolist=lastList;
  
    todolist.forEach( (todo,index)=>{
      
      const buttonId='rm'+todo.id;
      const removeButton=document.getElementById(buttonId);
      removeButton.addEventListener("click",()=>{
          todolist.splice(index,1)
          localStorage.setItem('MyToDoList',JSON.stringify(todolist));
          location.reload();
      });
     
  });

}





