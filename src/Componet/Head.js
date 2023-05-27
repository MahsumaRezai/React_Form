import { Fragment } from "react"; 
import classes from './Head.module.css';

 const Head=()=>{
    const title =" This is a Login Page"
    return(
       <Fragment>
        <div className={classes.head}>
            <div>
                <h2>{title}</h2>
            </div>

        </div>

       </Fragment>
    )
 }
 export default Head;