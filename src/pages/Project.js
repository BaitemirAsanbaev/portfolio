import { useHref, useParams } from "react-router-dom";

const Project = () => {
    const {id} = useParams()

    return ( <div>
        Project #{id}
    </div> );
}
 
export default Project;