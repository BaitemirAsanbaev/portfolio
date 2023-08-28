
import NavLinks from '../NavLinks/NavLinks';
import classes from './Nav.module.scss'

const Nav = () => {
  return (<nav className={classes.Nav}>
      <NavLinks pages={true}/>
    </nav>
  )
}

export default Nav;