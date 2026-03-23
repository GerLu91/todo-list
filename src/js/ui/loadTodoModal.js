export const loadTodoModal = (dialogElement) => {
    const container = document.createElement('div');
    container.classList.add('create');
    const plusbtn = document.createElement('button');
    plusbtn.textContent = "+";
    plusbtn.classList.add('create-btn');
    plusbtn.addEventListener('click', () => {
        dialogElement.showModal();
    });


    container.append(plusbtn);
    
    return container;
}