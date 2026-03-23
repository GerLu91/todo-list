export const initializeTodoModal = () => {

    const dialog = document.createElement('dialog');
    dialog.id = 'todo-modal';
    dialog.classList.add('todo-modal');

    const form = document.createElement('form');
    form.setAttribute('method', 'dialog');

    const h2 = document.createElement('h2');
    h2.textContent = 'Erstelle ein neues Todo';

    const inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.id = 'todo-title';
    inputTitle.placeholder = 'Titel';
    inputTitle.required = true;

    const textAreaDesc = document.createElement('textarea');
    textAreaDesc.id = 'todo-desc';
    textAreaDesc.placeholder = 'Beschreibung';

    const inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.id = 'todo-date';

    const buttonContainer = document. createElement('button');
    buttonContainer.classList.add('modal-buttons');


    const cancelBtn = document.createElement('buttonn');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Abbrechen';

    const saveBtn = document.createElement('button');
    saveBtn.type = 'submit';
    saveBtn.id = 'save-btn';
    saveBtn.textContent = 'Speichern';

    buttonContainer.appendChild(cancelBtn, saveBtn);

    form.append(h2, inputTitle, textAreaDesc, inputDate, buttonContainer);

    dialog.append(form);

    cancelBtn.addEventListener('cick', () => {
        dialog.close();
    });

    document.body.appendChild(dialog);

    return dialog;



}