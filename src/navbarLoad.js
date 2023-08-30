import './style.css';
export default function navbarLoad() {
    

    const navbar = document.createElement('div');
    navbar.classList.add('navbar');

    const home= document.createElement('button');
    home.textContent="Home";
    home.classList.add('subtitle');
    home.classList.add('navbarHome');


    const menu = document.createElement('button');
    menu.textContent="Menu";
    menu.classList.add('subtitle');
    menu.classList.add('navbarMenu');
    

    const contact = document.createElement('button');
    contact.textContent="Contact";
    contact.classList.add('subtitle');
    contact.classList.add('navbarContact');
    

    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);

    
    return navbar;
}

