import { Fragment } from 'react';

import AvalibleMeals from "./AvalibleMeals";
import MealSummary from "./MealSummary";

const Meals = () => {
    return <Fragment>
        <MealSummary/>
        <AvalibleMeals/>
    </Fragment>
}

export default Meals;