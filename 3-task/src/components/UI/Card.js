import './Card.css'

function Card (props) {
    const classNewCard = 'card ' + props.className;
    return <div className={classNewCard}>{props.children}</div>
}

export default Card;