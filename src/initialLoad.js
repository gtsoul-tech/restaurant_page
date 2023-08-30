export default function initialLoad() {
    const element = document.createElement('div');
    element.classList.add('home');
    const title = document.createElement('div');
    title.textContent= "SavorRamen Restaurant";
    element.appendChild(title);
    const description = document.createElement('div');
    description.textContent = "Nestled on a corner street, this ramen haven exudes a cozy yet contemporary vibe, drawing ramen enthusiasts into its culinary embrace. The air is alive with the fragrant harmony of slow-simmered broths and the clinks of chopsticks. Inside, minimalist decor with traditional accents sets the stage for a delightful experience. From the first steamy slurp, it's evident that every bowl is a masterpiece – a synthesis of toothsome noodles, melt-in-your-mouth chashu, impeccably seasoned broth, and an array of toppings that transform each bite into a journey of taste and texture. Beyond ramen, the menu surprises with small plates that pay homage to Japanese flavors, making it a haven for those seeking both comfort and culinary exploration.";
    element.appendChild(description);
    const hours = document.createElement('div');
    hours.textContent= "Everyday 8am - 10pm";
    element.appendChild(hours);
    const location = document.createElement('div');
    location.textContent = "Location : 42 Larkspur Lane, Dublin 10, County Cork, Ireland"
    element.appendChild(location);
    return element;
}




//   <div class="left">
//             <div class="navbar">
//                 <div><a href="Home">Home</a></div>
//                 <div><a href="Menu">Menu</a></div>
//                 <div><a href="Gallery">Gallery</a></div>
//                 <div><a href="Location">Location</a></div>
//                 <div><a href="Contanct">Contanct</a></div>
//                 <div><a href="Home">Logo(ramen svg)</a></div>
//             </div>
//             <div class="dishes">
//                 <div class="dish_icon"></div>
//                 <div class="dish_icon"></div>
//                 <div class="dish_icon"></div>
//             </div>
//             <div>
//                 <h1>A genuine fine-dining experience awaits</h1>
//             </div>
//             <div>
//                 QUote about life and food
//             </div>
//             <div>
//                 <p>
//                     paragraph about the history of the dishes
//                 </p>

//                 <button>More info</button>
//             </div>
//         </div>
//         <div class="right">
//             <img src="ramen" alt="ramen" srcset="">
//             <div>Quote</div>
//             <div class="share_button">
//                 Instagram
//             </div>
//             <div class="share_button">
//                 facebook
//             </div>
//             <div class="share_button">
//                 twitter
//             </div>
            
//         </div>