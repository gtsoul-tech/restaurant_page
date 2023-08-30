import initialLoad from "./initialLoad";
import menuLoad from "./menuLoad";
import contactLoad from "./contactLoad";
import navbarLoad from "./navbarLoad";
import './style.css';

const content = document.createElement('div');
content.classList.add('content');


document.body.appendChild(navbarLoad());
content.appendChild(initialLoad());
document.body.appendChild(content);

const home= document.querySelector('.navbarHome');
const menu= document.querySelector('.navbarMenu');
const contact= document.querySelector('.navbarContact');

home.addEventListener("click", () => {
    home.textContent = "Home*";
    contact.textContent = "Contact";
    menu.textContent = "Menu ";
    content.replaceChildren();
    content.appendChild(initialLoad());
});
menu.addEventListener("click", () => {
    home.textContent = "Home";
    contact.textContent = "Contact";
    menu.textContent = "Menu *";
    content.replaceChildren();
    content.appendChild(menuLoad());
});

contact.addEventListener("click", () => {
    home.textContent = "Home";
    contact.textContent = "Contact *";
    menu.textContent = "Menu";
    content.replaceChildren();
    content.appendChild(contactLoad());
});