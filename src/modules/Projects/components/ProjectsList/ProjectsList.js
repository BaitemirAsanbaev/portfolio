import ProjectCard from "../ProjectCard/ProjectCard";
import classes from './ProjectsList.module.scss'
const ProjectsList = () => {
    return ( <div className={classes.ProjectsList}>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
    </div> );
}
 
export default ProjectsList;