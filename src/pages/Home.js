import About from "../components/About/About/About";
import Profile from "../components/Profile/Profile";
import { Projects } from "../modules/Projects";

const Home = () => {
  return ( <div>
    <Profile/>
    <Projects/>
    <About/>
  </div> );
}
 
export default Home;