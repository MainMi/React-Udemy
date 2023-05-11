import { Fragment, useEffect, useState } from "react";
import classes from "./PasswordModal.module.css";
import { regex } from "../components/constant/regex.enum"

const PasswordModal = (props) => {

    const { onHidden, showModal } = props;

    const [ isHiddenText, setHiddenText ] = useState(false);
    const [ enteredPassword, setPassword ] = useState('')

    const changeTextHandler = () => setHiddenText((prevIsHiddent => !prevIsHiddent))

    const [ isLower, setLower ] = useState(false);
    const [ isUpper, setUpper ] = useState(false);
    const [ isNumber, setNumber ] = useState(false);
    const [ isSpecial, setSpecial ] = useState(false);
    const [ isLength, setLength ] = useState(false);

    useEffect(() => {
        setLower(checkRegexFn(enteredPassword, regex.REGEX_LOWER_CHAR));
        setUpper(checkRegexFn(enteredPassword, regex.REGEX_UPPER_CHAR));
        setNumber(checkRegexFn(enteredPassword, regex.REGEX_NUMBER_CHAR));
        setSpecial(checkRegexFn(enteredPassword, regex.REGEX_SPECIAL_CHAR));
        setLength(checkRegexFn(enteredPassword, regex.REGEX_LENGTH_CHAR));
    }, [enteredPassword])

    const valueChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const checkRegexFn = (value, regex) => {
        const reg = new RegExp(regex);
        return reg.test(value)
    }

    const sendChangePassword = () => {
        props.onSetPassword(enteredPassword)
    }

    const validBtn = isLower
        && isUpper
        && isNumber
        && isSpecial
        && isLength
    return (
        <Fragment>
            <div className={`${classes.backdrop} ${!showModal ? classes.disabled : ''}`} onClick={onHidden}></div>
                <div className={`${classes.modalPassword} ${!showModal ? classes.disabled : ''}`}
                >
                    <div className={classes.labelBox}>
                        <label htmlFor="password">Пароль</label>
                        <input type={!isHiddenText ? "password" : "text"} name="password" onKeyUp={valueChangeHandler} placeholder="Пароль" />
                        <div className={`${classes.changeEyes} ${isHiddenText ? classes.hidden : ''}`} onClick={changeTextHandler}></div>
                    </div>
                    <ul className={classes.checkBox}>
                        
                        <li className={`${classes.checkMsg} ${isLower ? classes.valid : ''}`}>At least one lowercase character</li>

                        <li className={`${classes.checkMsg} ${isUpper ? classes.valid : ''}`}>At least one uppercase character</li>

                        <li className={`${classes.checkMsg} ${isNumber ? classes.valid : ''}`}>At least one number</li>

                        <li className={`${classes.checkMsg} ${isSpecial ? classes.valid : ''}`}>At least one special character</li>

                        <li className={`${classes.checkMsg} ${isLength ? classes.valid : ''}`}>At least 8 character</li>
                    </ul>
                    <div className={classes.buttonBox}>
                        <button className={`${classes.btn} ${classes.unactive}`} onClick={onHidden}>Вийти</button>
                        <button className={classes.btn} disabled={!validBtn} type="button" onClick={() => {
                            sendChangePassword()
                            onHidden()
                        }}>Пітвердити</button>
                    </div>
                </div>
        </Fragment>
        
    );
};

export default PasswordModal;
