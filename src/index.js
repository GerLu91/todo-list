import { loadHome } from './js/ui/home'


// Test import of styles
import '@/styles/index.scss'
import { createNavbar } from './js/ui/navbar';
import { initializeTodoModal } from './js/ui/todoModalUI';
import { loadTodoModal } from './js/ui/loadTodoModal';



const root = document.querySelector('#root'); 
const navbar = createNavbar(
    () => renderPage(loadHome), 
    () => renderPage(loadProjects)
);
root.append(navbar);

const todoDialog = initializeTodoModal();
const addBtnContainer = loadTodoModal(todoDialog);
root.append(addBtnContainer);

const pageContent = document.createElement('div');
pageContent.id = 'page-content'; 
root.append(pageContent);

function renderPage(pageFunction) {
    pageContent.innerHTML = ''; 
    pageContent.append(pageFunction());
}


renderPage(loadHome);

