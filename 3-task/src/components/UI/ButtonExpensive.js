import './ButtonExpensive.css'

function ButtonExpensive (props) {
    const classNewCard = 'button_expensive ' + props.className;
    return <button className={classNewCard} onClick={props.onClick}>
        {props.children}
    </button>
}

export default ButtonExpensive;