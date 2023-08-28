import classes from './Banner.module.scss'

const Banner = ({url}) => {
  return ( <div  id='home' className={classes.Banner}>
    <h1>{url === "/" ? "BAITEMIR": Number(url.slice(1))>0?`Project ${url.slice(1)}`  : "Not Found"}</h1>
    <h2>{url === "/" ? "Full stack developer":""}</h2>
  </div> );
}
 
export default Banner;