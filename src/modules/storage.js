// get data from item in Local storage 
export const getStorageData = (item) => {
    let todolist=JSON.parse(localStorage.getItem(item))?JSON.parse(localStorage.getItem(item)):[];
    return todolist;
}

// update the item's data  in localStorage
export const SetStorageData = (item,data) => {
    localStorage.setItem(item,JSON.stringify(data));
}

/* Store a new todo in local storage */
export const StoreTodo=(item,todo)=>{

    let todolist=getStorageData(item);
    todolist.push(todo);
    SetStorageData(item,todolist);

}
/* update todo in local storage */
export const updateTodo=(newTodo)=>{
    let todolist=getStorageData("current_todolist");

    todolist.forEach( (todo) => {
        if (todo.id==newTodo.id) {
            todo.name=newTodo.name;
            todo.isImportant =newTodo.isImportant;
            todo.toDoDate=newTodo.toDoDate;
            todo.state=newTodo.state;   
        }
      
    });
    SetStorageData("current_todolist",todolist);
}

/* Remove todo from local storage */
export const RemoveTodo=(id)=>{
    let todolist=getStorageData("current_todolist");

    todolist.forEach( (todo,index) => {
        if (todo.id==id) {
            todolist.splice(index,1)
        }
      
    });
    SetStorageData("current_todolist",todolist);


}
