export const loadHome = () => {
    const container = document.createElement('div');
    const heading = document.createElement('h1');
    heading.textContent = "Odins To-Do-List";
    container.append(heading);
    
    return container; 
};