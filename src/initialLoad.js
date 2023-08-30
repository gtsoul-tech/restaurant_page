export default function initialLoad() {
    const element = document.createElement('div');
    element.classList.add('home');
    const title = document.createElement('div');
    title.textContent= "SavorRamen Restaurant";
    title.classList.add('subtitle');
    title.classList.add('homeDiv');
    element.appendChild(title);
    const description = document.createElement('div');
    description.textContent = "Nestled on a corner street, this ramen haven exudes a cozy yet contemporary vibe, drawing ramen enthusiasts into its culinary embrace. The air is alive with the fragrant harmony of slow-simmered broths and the clinks of chopsticks. Inside, minimalist decor with traditional accents sets the stage for a delightful experience. From the first steamy slurp, it's evident that every bowl is a masterpiece – a synthesis of toothsome noodles, melt-in-your-mouth chashu, impeccably seasoned broth, and an array of toppings that transform each bite into a journey of taste and texture. Beyond ramen, the menu surprises with small plates that pay homage to Japanese flavors, making it a haven for those seeking both comfort and culinary exploration.";
    element.appendChild(description);
    description.classList.add('homeDiv');
    const hours = document.createElement('div');
    hours.textContent= "Everyday: 8am - 10pm";
    hours.classList.add('homeDiv');
    element.appendChild(hours);
    const location = document.createElement('div');
    location.textContent = "Location : 42 Larkspur Lane, Dublin 10, County Cork, Ireland"
    location.classList.add('homeDiv');
    element.appendChild(location);
    return element;
}
