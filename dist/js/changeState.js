
function setToDo(id){
    console.log(id);

    let todolist=[];
    let lastList=JSON.parse(localStorage.getItem('MyToDoList'));
    if(lastList!=null)todolist=lastList;
    todolist.forEach( (todo)=>{
        if(todo.id==id)todo.state='ToDo';  
    });
    localStorage.removeItem('MyToDoList');
    localStorage.setItem('MyToDoList',JSON.stringify(todolist));
    location.reload();


}

function setDone(id){
    let todolist=[];
    let lastList=JSON.parse(localStorage.getItem('MyToDoList'));
    if(lastList!=null)todolist=lastList;
    todolist.forEach( (todo)=>{
        if(todo.id==id)todo.state='Done';
    });
    localStorage.removeItem('MyToDoList');
    localStorage.setItem('MyToDoList',JSON.stringify(todolist));
    location.reload();

}