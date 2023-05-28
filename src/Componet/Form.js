import { Fragment } from "react";
import classes from './Form.module.css'; 
import Button from "./Button";

const Form = () => {
    return (
        <Fragment>
            <form className={classes.form}>
                <div className={classes.content}>
                    <label>Name</label>
                    <input type="text"></input>
                </div>
                <div className={classes.content_one}>
                    <label>Password</label>
                    <input type="password"></input>
                </div>
                <div>
                    <Button>Login</Button>
                </div>
            </form>

        </Fragment>
    )
}
export default Form