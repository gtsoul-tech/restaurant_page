import './style.css';
import Icon1 from './7.jpg';
import Icon2 from './8.jpg';
import Icon3 from './9.jpg';

export default function menuLoad() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent="Contact Us";
    menu.appendChild(title);



    function createContact(subtitleText, nameText, numberText, emailText,icon){
        const contact = document.createElement('div');
        contact.classList.add('contact');

        const subtitle = document.createElement('div');
        subtitle.classList.add('subtitle');
        subtitle.textContent = subtitleText;

        const name = document.createElement('div');
        name.classList.add('name');
        name.textContent = nameText;
        
        const number = document.createElement('div');
        number.classList.add('number');
        number.textContent = numberText;
        const email = document.createElement('div');
        email.classList.add('email');
        email.textContent = emailText;
        
        const image = document.createElement('div');
        const myIcon = new Image();
        myIcon.src = icon;
        myIcon.classList.add('image');
        image.appendChild(myIcon);
        
        menu.appendChild(contact);
        contact.appendChild(subtitle);

        contact.appendChild(name);
        contact.appendChild(number);
        contact.appendChild(email);
        contact.appendChild(image);

        menu.appendChild(contact);
    }
    createContact("Owner","Olivia Bennett", "+1 (555) 123-4567","olivia.bennett@example.com",Icon1);
    createContact("Chef","Marco Russo", "+1 (555) 987-6543","marco.russo@example.com",Icon2);
    createContact("Reservations Manager","Emily Thompson", "+1 (555) 555-1234","emily.thompson@example.com",Icon3);

    return menu;
}