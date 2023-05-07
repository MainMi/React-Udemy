import classes from "./Header.module.css";
import HeaderButtton from "./HeaderButton";

const Header = (props) => {
    return <header className={classes.header}>
            <h1>Food&Take</h1>
            <HeaderButtton onClickShowCard={props.onShowCart}/>
        </header>
}

export default Header;