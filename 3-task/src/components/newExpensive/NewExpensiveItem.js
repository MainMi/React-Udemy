import Card from "../UI/Card";
import NewExpensiveForm from "./NewExpensiveForm";

import './NewExpensiveItem.css';

function NewExpensiveItem (props) {

    const bubleNewExpensiveData = newData => props.onAddExpensiveData(newData);
    
    return <Card className="new-expense"><NewExpensiveForm onBubleSubmitHandler={bubleNewExpensiveData} /></Card>
}

export default NewExpensiveItem;