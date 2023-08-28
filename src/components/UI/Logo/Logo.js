import logo from '../../../assets/images/kumara.png'
import classes from './Logo.module.scss';

const Logo = ({ size = 30 }) => {
  return (<div className={classes.Logo}>
    <img width={size} src={logo} alt='logo' />
  </div>

    );
}

export default Logo;