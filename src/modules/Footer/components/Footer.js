import classes from './Footer.module.scss'
import git from '../../../assets/images/github.svg'
import in_icon from '../../../assets/images/linkedin.svg'
import tg from '../../../assets/images/telegram.svg'
import anchor from '../../../assets/images/anchor.svg'

export const Footer = () => {
  function btingHome(){
    window.scrollTo(0,0)

  }
  return ( <footer id='contacts' className={classes.Footer}>
    <div><img onClick={btingHome} src={anchor}/></div>
    <small>@2023 baitemir</small>
    <div>
      <img src={git} alt='git'/>
      <img src={in_icon} alt='in'/>
      <img src={tg} alt='tg'/>
    </div>
    <a>baitemir1706@gmail.com</a>

  </footer> );
}
 
