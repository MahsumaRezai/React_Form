import { Fragment } from "react";
import classes from './Form.module.css'

const Form = () => {
    return (
        <Fragment>
            <form className={classes.form}>
                <div className={classes.content}>
                    <label>Name</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"></input>
                </div>
            </form>

        </Fragment>
    )
}
export default Form