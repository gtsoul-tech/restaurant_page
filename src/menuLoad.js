import './style.css';
import Icon1 from './1.jpg';
import Icon2 from './2.jpg';
import Icon3 from './3.jpg';
import Icon4 from './4.jpg';
import Icon5 from './5.jpg';
import Icon6 from './6.jpg';

export default function menuLoad() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent="Ramen Menu";
    menu.appendChild(title);



    function createDish(subtitleText, descriptionText, icon){
        const dish = document.createElement('div');
        dish.classList.add('dish');

        const subtitle = document.createElement('div');
        subtitle.classList.add('subtitle');
        subtitle.textContent = subtitleText;

        const description = document.createElement('div');
        description.classList.add('description');
        description.textContent = descriptionText;

        
        const image = document.createElement('div');
        const myIcon = new Image();
        myIcon.src = icon;
        myIcon.classList.add('image');
        image.appendChild(myIcon);
        
        menu.appendChild(dish);
        dish.appendChild(subtitle);
        dish.appendChild(description);
        dish.appendChild(image);

        menu.appendChild(dish);
    }

    createDish("Traditional Tonkotsu Ramen:", "Rich pork bone broth simmered to perfection, served with tender chashu pork slices, marinated soft-boiled egg, scallions, and nori seaweed.",Icon1);
    createDish("Savory Miso Ramen:", "A harmonious blend of miso-infused broth, featuring braised pork belly, corn kernels, bean sprouts, and a drizzle of chili oil for a hint of warmth.",Icon2);

    createDish("Spicy Kimchi Ramen:", "Tangy kimchi and spicy chili paste elevate this bowl, accompanied by slices of bulgogi beef, crispy tofu cubes, and a medley of vegetables.",Icon3);
    createDish("Coconut Curry Ramen:", "A unique twist with a creamy coconut curry broth, shrimp tempura, sliced chicken, bell peppers, and fresh cilantro for a burst of flavors.",Icon4);

    createDish("Cold Sesame Ramen:", "Chilled ramen noodles tossed in a sesame dressing, garnished with cucumber ribbons, shredded chicken, pickled radishes, and toasted sesame seeds.",Icon5);
    createDish("Citrusy Yuzu Ramen:", "A refreshing citrus-infused broth topped with poached salmon, snow peas, bamboo shoots, and a sprinkle of yuzu zest for a zesty kick.",Icon6);

    return menu;
}