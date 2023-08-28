import classes from './Profile.module.scss'
import avatar from './assets/avatar.png'
const Profile = () => {
    return ( <div className={classes.Profile}>
    <img src={avatar}/>
    <p>
    I'm full stack developer with over 2 years of practical experience, and a few commercial experience.
Mostly I specify on frontend development, but consider myself as full stack, because I can maintain both backend and frontend parts, and I'm familiar with entire process of web development.
    </p>
    </div> );
}
 
export default Profile;