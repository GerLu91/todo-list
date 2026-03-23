export const createNavbar = (onHomeClick, onProjectsClick) => {
    const nav = document.createElement('nav');
    nav.classList.add('main-nav');
    const ul = document.createElement('ul');

    const createNavItem = (text, callback) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.textContent = text;
        btn.addEventListener('click', callback);
        li.append(btn);
        return li;
    };

    ul.append(createNavItem('Home', onHomeClick));
    ul.append(createNavItem('Projekte', onProjectsClick));

    nav.append(ul);
    return nav;
};