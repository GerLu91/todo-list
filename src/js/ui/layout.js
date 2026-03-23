export const createLayout = () => {
    const container = document.createElement('div');
    container.classList.add('main-container');

    const listSidebar = document.createElement('aside');
    listSidebar.classList.add('todo-sidebar');
    
    const title = document.createElement('h1');
    title.textContent = "Odins To-Dos";
    
    const listContainer = document.createElement('div');
    listContainer.id = 'todo-list-container'; // Hier kommen die To-Do-Items rein
    listContainer.textContent = "Lade To-Dos..."; // Platzhalter

    listSidebar.append(title, listContainer);

    const detailView = document.createElement('main');
    detailView.classList.add('todo-details');
    detailView.id = 'todo-detail-view'; // Hier werden Details angezeigt
    
    const placeholderText = document.createElement('p');
    placeholderText.textContent = "Wähle ein To-Do aus, um Details anzuzeigen.";
    detailView.append(placeholderText);

    container.append(listSidebar, detailView);

    return container;
};