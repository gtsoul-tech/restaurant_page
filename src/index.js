import initialLoad from "./initialLoad";
import './style.css';

const content = document.createElement('div');
content.classList.add('content');
content.appendChild(initialLoad());

document.body.appendChild(content);