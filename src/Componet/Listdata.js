import Cardsave from "./Cardsave";
import classes from './List.module.css'
const Lisdata = (props) => {

    return (
        
        <Cardsave className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li>
                        {user.name} ({user.age})
                    </li>
                ))}
            </ul>
        </Cardsave>
    );
}
export default Lisdata;