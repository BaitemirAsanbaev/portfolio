import classes from './SimpleButton.module.scss'
import { Link } from "react-router-dom";

const SimpleButton = ({children, link}) => {
  return ( <div className={classes.SimpleButton}>
    <Link to={link}>
      {children}
    </Link>
  </div> );
}
 
export default SimpleButton;