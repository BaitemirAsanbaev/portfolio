import kt from '../../../../assets/images/kt.png'
import classes from './ProjectCard.module.scss'
const ProjectCard = () => {
    return ( <div className={classes.ProjectCard}>
        <div style={{backgroundImage:`url(${kt})`}}></div>
        <div>Kyrgyz Tours</div>
        <div>frontend</div>
    </div> );
}
 
export default ProjectCard;