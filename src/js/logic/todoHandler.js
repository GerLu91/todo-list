import { loadHome } from "../ui/home";
import { createTodo } from "./createTodos";

const STORAGE_KEY = 'my_todo_list';

const loadFromStorage = () => {
    const json = localStorage.getItem(STORAGE_KEY);
     if (!json) return [];

    const rawArray = JSON.parse(json);

    return rawArray.map(todoData => createTodo(todoData));
}




let todos = loadFromStorage();

const syncAndRender = () => {
    const rawDataArray = todos.map(t => t.getInfo());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rawDataArray));
    loadHome(todos);
}

export const todoHandler  = {

    addTodo(data) {
        const newTodo = createTodo(data);
        todos.push(newTodo);
        syncAndRender();
        return newTodo;
    },

    getAllTodos(){
        return todos;
    },

    deleteTodoById(id) {
    todos = todos.filter(t => t.get('id') !== id);
    syncAndRender();
    },

    findTodoByTitle(title){
        return todos.find(t => t.get('title') === title);
    }
}