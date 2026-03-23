import { createTodo } from "./createTodos";



let todos = [];

export const todoHandler  = {

    addTodo(data) {
        const newTodo = createTodo(data);
        todos.push(newTodo);
        return newTodo;
    },

    getAllTodos(){
        return todos;
    },

    deleteTodos(index){
        todos.splice(index, 1);
    },

    findTodoByTitle(title){
        return todos.find(t => t.get('title') === title);
    }
}