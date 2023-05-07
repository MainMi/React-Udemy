import MealsItem from "./MealItem/MealsItem";
import classes from './AvalibleMeals.module.css'

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Best fish and vegetables",
        price: 24.99
    },
    {
        id: "m2",
        name: "Spaghetti",
        description: "Delicious Italian pasta with tomato sauce",
        price: 14.99
    },
    {
        id: "m3",
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with parmesan cheese and croutons",
        price: 9.99
    },
    {
        id: "m4",
        name: "Steak",
        description: "Juicy sirloin steak cooked to perfection",
        price: 34.99
    },
    {
        id: "m5",
        name: "Chicken Curry",
        description: "Traditional Indian chicken curry with basmati rice",
        price: 19.99
    },
    {
        id: "m6",
        name: "Fish and Chips",
        description: "Classic British dish with crispy battered fish and fries",
        price: 12.99
    }
];

const AvalibleMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => <MealsItem key={meal.id} {...meal} />)

    return <section>
        <ul className={classes.cardBox} >
            {mealsList}
        </ul>
    </section>
};

export default AvalibleMeals;