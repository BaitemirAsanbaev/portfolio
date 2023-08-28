import classes from './404.module.scss'
import { Link, useNavigate } from 'react-router-dom'

const GoBack = () => {
  const navigate = useNavigate()
  return (<div className={classes.GoBack}>
    {/* <div>404</div> */}
    <div className={classes.links}>
      <h1>Page not found</h1>
      <div>
        <Link to='/'>Home</Link>
        <a onClick={() => navigate(-1)}>Back</a>
      </div>
    </div>
  </div>);
}

export default GoBack