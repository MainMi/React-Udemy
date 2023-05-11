import { useState } from "react"
import errorValidateMsg from "../components/error/error.validate.msg";

const useInput = (validateFn, nameValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouch, setIsTouch] = useState(false);

    const errorArrMsg = errorValidateMsg(nameValue, enteredValue);

    let arrayValidate = validateFn(enteredValue);
    
    arrayValidate = arrayValidate.map((value) => {
        return errorArrMsg[value]
    })
    const checkError = arrayValidate.length && isTouch;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = (event) => {
        setIsTouch(true);
    }

    const resetFn = () => {
        setEnteredValue('');
        setIsTouch(false);
    }
    return {
        value: enteredValue,
        isValidInput: !(arrayValidate.length),
        arrayError: checkError ? arrayValidate : [],
        valueChangeHandler,
        inputBlurHandler,
        resetFn
    }
}

export default useInput;