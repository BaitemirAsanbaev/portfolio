import classes from './CardButton.module.scss'
import addIcon from '../../../assets/images/add.svg'
import infoIcon from '../../../assets/images/information.svg'
const CardButton = ({ type, action }) => {
  return <button className={classes.CardButton} onClick={action}>
    <img src={type==='info' ? infoIcon : addIcon} />
  </button>

}

export default CardButton;