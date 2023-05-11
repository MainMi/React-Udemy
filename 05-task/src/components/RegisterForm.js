import classes from './RegisterFrom.module.css'
import imageRegister from '../image/background.png'
import useInput from '../hooks/use-input'
import { regex } from './constant/regex.enum'
import { useState } from 'react'
import PasswordModal from './PasswordModal'
const isNotEmptyFn = (value) => value.trim() === '' ? ['emptyError'] : []
const isDataFn = (value, type) => {
    switch (type) {
        case 'day':
            return value < 1 || value > 31 ? ['dataError'] : []
        case 'month':
            return value < 1 || value > 12 ? ['dataError'] : []
        case 'year':
            return value < 1920 || value > 2023 ? ['dataError'] : []
        default:
            console.error('Incorrect type')
            break;
    }
}

const isEmailFn = (value) => {
    const regexEmail = new RegExp(regex.REGEX_EMAIL);
    return !regexEmail.test(value) ? ['emailError'] : []
}

const showErrorMsg = (arr) => {
    if (arr.length === 0) {
        return
    }
    return arr.map((value, index) => {
        return <p className={classes.errorMsg} key={index}>{value}</p>
    })
}

const RegisterFrom = () => {
    const {
        value: valueName,
        isValidInput: isValidName,
        arrayError: arrayErrorName,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        resetFn: resetName
    } = useInput(isNotEmptyFn, 'FirstName');

    const {
        value: valueLastName,
        isValidInput: isValidLastName,
        arrayError: arrayErrorLastName,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        resetFn: resetLastName
    } = useInput(isNotEmptyFn, 'LastName');

    const {
        value: valueDay,
        isValidInput: isValidDay,
        arrayError: arrayErrorDay,
        valueChangeHandler: dayChangeHandler,
        inputBlurHandler: dayBlurHandler,
        resetFn: resetDay
    } = useInput((value) => {
        const arrValidEmpty = isNotEmptyFn(value)
        const arrValidData = isDataFn(value, 'day');
        return [...arrValidEmpty, ...arrValidData]
    }, 'Day');

    const {
        value: valueMonth,
        isValidInput: isValidMonth,
        arrayError: arrayErrorMonth,
        valueChangeHandler: monthChangeHandler,
        inputBlurHandler: monthBlurHandler,
        resetFn: resetMonth
    } = useInput((value) => {
        const arrValidEmpty = isNotEmptyFn(value)
        const arrValidData = isDataFn(value, 'month');
        return [...arrValidEmpty, ...arrValidData]
    }, 'Month');

    const {
        value: valueYear,
        isValidInput: isValidYear,
        arrayError: arrayErrorYear,
        valueChangeHandler: yearChangeHandler,
        inputBlurHandler: yearBlurHandler,
        resetFn: resetYear
    } = useInput((value) => {
        const arrValidEmpty = isNotEmptyFn(value)
        const arrValidData = isDataFn(value, 'year');
        return [...arrValidEmpty, ...arrValidData]
    }, 'Year');

    const {
        value: valueEmail,
        isValidInput: isValidEmail,
        arrayError: arrayErrorEmail,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        resetFn: resetEmail
    } = useInput((value) => {
        const arrValidEmpty = isNotEmptyFn(value)
        const arrValidEmail = isEmailFn(value);
        return [...arrValidEmpty, ...arrValidEmail]
    }, 'Email');

    const [ password, setPassword ] = useState('');

    const setPasswordHandler = (password) => {
        setPassword(password)
    }

    const formInActive = isValidName 
        && isValidLastName
        && isValidDay
        && isValidMonth
        && isValidYear
        && isValidEmail
        && !(password.length === 0)

    const submitHandler = (ev) => {
        ev.preventDefault();
        if (!formInActive) {
            return;
        }
        resetName()
        resetLastName()
        resetDay()
        resetMonth()
        resetYear()
        resetEmail()
        setPassword('')
        console.log({
            valueName,
            valueLastName,
            valueDay,
            valueMonth,
            valueYear,
            valueEmail,
            password
        })
    }

    const [showModal, setShowModal] = useState(false);

    const showModalPasswordHandler = () => setShowModal(true);
    const hiddenModalPasswordHandler = () => setShowModal(false);


    return <div className={classes.backgroundBox}>
        <div className={classes.registerBox}>
            <form onSubmit={submitHandler} className={classes.registerForm}>
                <div className={classes.buttonBox}>
                    <button className={classes.btn}>Реєстрація</button>
                    <button className={`${classes.btn} ${classes.unactive}`}>Вхід</button>
                </div>
                {/* <div className={classes.labelBox}>
                    <label htmlFor="firstname">Nickname</label>
                    <input type="text" name="firstname" placeholder="Введіть нікнейм" />
                </div> */}
                <div className={classes.labelBox}>

                    <label className={classes.labelText}  htmlFor="firstname" >Ім’я</label>

                    <input type="text" onInput={nameChangeHandler} onBlur={nameBlurHandler} name="firstname" placeholder="Введіть ім’я" className={`${arrayErrorName.length ? classes.errorInput : ''}`} value={valueName}/>
                    {showErrorMsg(arrayErrorName)}

                </div>
                <div className={classes.labelBox}>

                    <label className={classes.labelText}  htmlFor="lastname">Прізвище</label>

                    <input onInput={lastNameChangeHandler} onBlur={lastNameBlurHandler} type="text" name="lastname" 
                    placeholder="Введіть прізвище" className={`${arrayErrorLastName.length ? classes.errorInput : ''}`} value={valueLastName}/>
                    {showErrorMsg(arrayErrorLastName)}

                </div>
                <div className={classes.dataBox}>
                    <div className={classes.labelBox}>

                        <label className={classes.labelText} htmlFor="day">День</label>

                        <input type="number" name="day" onInput={dayChangeHandler} onBlur={dayBlurHandler} className={`${arrayErrorDay.length ? classes.errorInput : ''}`} min="1" max="31" placeholder="День" value={valueDay}/>
                        {showErrorMsg(arrayErrorDay)}

                    </div>
                    <div className={classes.labelBox}>
                        <label className={classes.labelText} htmlFor="mounday">Місяць</label>
                        <input type="number" name="mounday" onInput={monthChangeHandler} onBlur={monthBlurHandler} className={`${arrayErrorMonth.length ? classes.errorInput : ''}`} min="1" max="12" placeholder="Місяць" value={valueMonth}/>
                        {showErrorMsg(arrayErrorMonth)}
                    </div>
                    <div className={classes.labelBox}>
                        
                        <label className={classes.labelText} htmlFor="year">Рік</label>

                        <input type="number" name="year" onInput={yearChangeHandler} onBlur={yearBlurHandler}  className={`${arrayErrorYear.length ? classes.errorInput : ''}`} min="1920" placeholder="Рік" value={valueYear}/>
                        {showErrorMsg(arrayErrorYear)}
                        
                    </div>
                </div>
                <div className={classes.labelBox}>

                    <label className={classes.labelText} htmlFor="email">Email</label>

                    <input type="text" name="email" onInput={emailChangeHandler} onBlur={emailBlurHandler}  className={`${arrayErrorEmail.length ? classes.errorInput : ''}`} placeholder="Введіть пошту" value={valueEmail}/>
                    {showErrorMsg(arrayErrorEmail)}

                </div>
                <div className={classes.labelBox} onClick={showModalPasswordHandler}>

                    <label className={classes.labelText}
                    htmlFor="password">Пароль</label>

                    <input type="password" name="password" placeholder="Введіть пароль" value={password} readOnly/>
                    
                </div>
                <PasswordModal showModal={showModal} onHidden={hiddenModalPasswordHandler} onSetPassword={setPasswordHandler}/>

                <button className={classes.btnSubmit} disabled={!formInActive} type="submit">Зареєструватися</button>
            </form>
            <div className={classes.imageBox}>
                <img src={imageRegister} alt=""></img>
            </div>
        </div>
    </div>
}
export default RegisterFrom;