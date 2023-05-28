import { Fragment, useState } from "react";
import classes from './Form.module.css';
import Button from "./Button";

const Form = () => {
    const [nameEnter, nameFun] = useState('');
    const [passwordEnter, passwordFun] = useState('');
    const datanameHandler = (event) => {
        nameFun(event.target.value);
        console.log(nameEnter)

    }
    const datapasswordHandler = (event) => {
        passwordFun(event.target.value);
        console.log(passwordEnter)
    }
    return (
        <Fragment>
            <form className={classes.form}>
                <div className={classes.content}>
                    <label>Name</label>
                    <input type="text" onChange={datanameHandler}></input>
                </div>
                <div className={classes.content_one}>
                    <label>Password</label>
                    <input type="password" onChange={datapasswordHandler}></input>
                </div>
                <div>
                    <Button>Login</Button>
                </div>
            </form>

        </Fragment>
    )
}
export default Form