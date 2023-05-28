import { Fragment } from "react";
import classes from './Card.module.css';
import Form from "./Form";

const Card = () => {
    return (
        <Fragment>
            <div className={classes.card}>
                <Form></Form>

            </div>
        </Fragment>
    )

}
export default Card