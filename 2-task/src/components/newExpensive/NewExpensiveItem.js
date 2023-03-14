import Card from "../UI/Card";
import NewExpensiveForm from "./NewExpensiveForm";

import './NewExpensiveItem.css';

function NewExpensiveItem () {
    return <Card className="new-expense"><NewExpensiveForm /></Card>
}

export default NewExpensiveItem;