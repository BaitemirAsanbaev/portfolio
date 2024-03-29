import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import styles from './style/global.module.scss'
import Fun from './pages/Fun';
import Project from './pages/Project';
const App = () => {

  
  return (<div className={styles.app}>
    <Layout>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='/:id' element={<Project/>}/>
        <Route path='/fun' element={<Fun/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </Layout>
  </div>);
}

export default App;