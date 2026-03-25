import { todoHandler } from "../logic/todoHandler.js";

export const createTodoLine = (todo) => {
    const line = document.createElement('div');
    line.classList.add('todo-item');
    
    const priority = todo.get('priority'); 
    line.classList.add(`priority-${priority}`);

    const leftGroup = document.createElement('div');
    leftGroup.style.display = 'flex';
    leftGroup.style.alignItems = 'center';
    leftGroup.style.gap = '10px';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const title = document.createElement('span');
    title.classList.add('todo-title');
    title.textContent = todo.get('title');

    const desc = document.createElement('div');
    desc.classList.add('todo-desc');
    desc.textContent = todo.get('description');

    const priorityText = document.createElement('div');
    priorityText.classList.add('todo-priority');
    priorityText.textContent = todo.get('priority');

    const notes = document.createElement('div');
    notes.classList.add('todo-notes');
    notes.textContent = todo.get('notes');

    leftGroup.appendChild(checkbox);
    leftGroup.appendChild(title);
    leftGroup.appendChild(priorityText);
    leftGroup.appendChild(desc);
    leftGroup.appendChild(notes);

    const rightGroup = document.createElement('div');
    rightGroup.style.display = 'flex';
    rightGroup.style.alignItems = 'center';
    rightGroup.style.gap = '15px';

    const date = document.createElement('span');
    date.classList.add('todo-date');
    date.textContent = todo.get('dueDate') || ''; 
    date.style.color = '#666';

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&times;'; 
    deleteBtn.classList.add('delete-btn');
    
    deleteBtn.onclick = () => {
        const id = todo.get('id'); 
    
    if (confirm(`"${todo.get('title')}" löschen?`)) {
        todoHandler.deleteTodoById(id); 
        }
    };

    rightGroup.appendChild(date);
    rightGroup.appendChild(deleteBtn);

    line.appendChild(leftGroup);
    line.appendChild(rightGroup);

    return line;
};