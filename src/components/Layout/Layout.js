import { Footer } from "../../modules/Footer"
import { Header } from "../../modules/Header";

const Layout = ({ children }) => {
  return (<>
    <Header/>
    {children}
    <Footer />
  </>);
}

export default Layout;