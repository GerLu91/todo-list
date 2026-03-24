import { createTodoLine } from "./createTodoLine";

export const loadHome = (todoList = []) => {
const content = document.querySelector('#content');
content.textContent = '';

/* const content = document.createElement('div');
content.id = 'content' */

const title = document.createElement('h1');
title.textContent = 'Meine Todos';
content.appendChild(title);

    if (todoList.length === 0) {
        const message = document.createElement('p');
        message.classList.add('empty-message');
        message.textContent = 'Noch keine Aufgaben geplant. Klicke auf das "+", um loszulegen!';
        content.appendChild(message);
        return;
    }

    const listContainer = document.createElement('div');
    listContainer.classList.add('todo-list');

    todoList.forEach(todo => {
        const line = createTodoLine(todo);
        listContainer.appendChild(line);
    });

    content.appendChild(listContainer);

};