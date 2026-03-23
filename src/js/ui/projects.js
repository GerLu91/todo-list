export const loadProjects = () => {
    const container = document.createElement('div');
    const heading = document.createElement('h1');
    heading.textContent = "Meine Projekte";
    container.append(heading);
    
    return container;
};