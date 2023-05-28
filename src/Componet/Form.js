import { Fragment, useState } from "react";
import classes from './Form.module.css';
import Button from "./Button";

const Form = () => {
    const [nameEnter, nameFun] = useState('');
    const [passwordEnter, passwordFun] = useState('');
    const datasubmit = () => {
        if (nameEnter.trim().length === 0 && passwordEnter.trim().length === 0) {
            return;
        }
        if (passwordEnter.length <= 10) {
            return;
        }
        console.log(nameEnter);
        console.log(passwordEnter);
        nameFun('');
        passwordFun('')
    }


    const datanameHandler = (event) => {
        nameFun(event.target.value);

    }
    const datapasswordHandler = (event) => {
        passwordFun(event.target.value);
    }
    return (
        <Fragment>
            <form className={classes.form} onSubmit={datasubmit}>
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