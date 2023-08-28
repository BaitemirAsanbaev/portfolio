import CardButton from "../UI/Button/CardButton";
import classes from './Card.module.scss'

const Card = ({ item }) => {
  return (<div className={classes.Card}>
    <img src={item.image} alt={item.title} />
    <div className={classes.info}>
      <h6>{item.title}</h6>
      <span>{item.price} сом</span>
      <div className={classes.btns}>
        <CardButton type='info' action={null} />
        <CardButton type='add' action={null} />
      </div>
    </div>
  </div>);
}

export default Card;