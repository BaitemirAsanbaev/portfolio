import { NavLink } from 'react-router-dom'
import classes from './NavLinks.module.scss'

const NavLinks = () => {
  const scrollToComponent = (comp) => {
    const component = document.getElementById(comp);
    const rect = component.getBoundingClientRect();
    const scrollPosition = window.pageYOffset + rect.top;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth' // or 'auto' for instant scrolling
    })
  }
  return (<ul className={classes.NavLinks}>

        <li onClick={()=>scrollToComponent('home')}><NavLink to='/'>Home</NavLink></li>
        <li onClick={()=>scrollToComponent('projects')}><NavLink to='/'>Projects</NavLink></li>
        <li onClick={()=>scrollToComponent('about')}><NavLink to='/'>About</NavLink></li>
        <li onClick={()=>scrollToComponent('contacts')}><NavLink to='/'>Contacts</NavLink></li>
        <li><NavLink to='/fun'>Fun</NavLink></li>

  </ul>);
}

export default NavLinks;