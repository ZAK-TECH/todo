import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Todo from './modules/Todo';
import {RenderTodoList,RenderTodo,WatchTodoDate} from './modules/Dom';
import {StoreTodo} from './modules/storage';
import {update_undo_array,Undo,Redo} from './modules/UndoRedo';
import moment from 'moment';


/* Render todolist from local storage on page load or page refresh */
RenderTodoList();

/* Watch todo date when loading the page */
WatchTodoDate();

/* Event listener when submiting the form to add new todo */
const ToDoForm=document.getElementById("ToDoForm");
    ToDoForm.addEventListener("submit",(event)=>{
        event.preventDefault();
 
        let todoName=document.getElementById("toDoInput").value;
        let toDoDate=document.getElementById("toDoDate").value;
        toDoDate=toDoDate?moment(toDoDate).format("D/M/YYYY, h:mm a"):"Not mentionned";
        let todo=new Todo(todoName,toDoDate);
        
        update_undo_array();
        StoreTodo("current_todolist",todo);
        RenderTodo(todo);
        ToDoForm.reset();

    });

    /* Event listener when clicking Undo Button */
const undo_btn=document.getElementById("undo_btn");
    undo_btn.addEventListener("click",(event)=>{
        event.preventDefault();
        Undo();
        RenderTodoList();
    });

     /* Event listener when clicking Redo Button */
const redo_btn=document.getElementById("redo_btn");
    redo_btn.addEventListener("click",(event)=>{
    event.preventDefault();
    Redo();
    RenderTodoList();

});