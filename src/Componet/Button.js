import { Fragment } from "react";
import classes from  './Button.module.css'
const Button = (porps) => {
    return (
        <Fragment>
            <div  >
                <button className={classes.btn}>{porps.children}</button>
            </div>

        </Fragment>
    )
}
export default Button