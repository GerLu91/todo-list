import { loadHome } from './js/ui/home'


// Test import of styles
import '@/styles/index.scss'
import { createNavbar } from './js/ui/navbar';
import { getTodoFormData, initializeTodoModal } from './js/ui/todoModalUI';
import { loadTodoModal } from './js/ui/loadTodoModal';
import { loadProjects } from './js/ui/projects';
import { todoHandler } from './js/logic/todoHandler';



const root = document.querySelector('#root'); 
const navbar = createNavbar(
    () => renderPage(loadHome), 
    () => renderPage(loadProjects)
);
root.append(navbar);

const mainArea = document.createElement('main');
mainArea.id = 'content';
root.append(mainArea);

const todoDialog = initializeTodoModal();
const addBtnContainer = loadTodoModal(todoDialog);
root.append(addBtnContainer);
const form = todoDialog.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = getTodoFormData(form);
    todoHandler.addTodo(data);
    form.reset();
    todoDialog.close();
})


const pageContent = document.createElement('div');
pageContent.id = 'page-content'; 
root.append(pageContent);

function renderPage(pageFunction) {
    pageContent.innerHTML = ''; 
    pageContent.append(pageFunction());
}


renderPage(loadHome);

