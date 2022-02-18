import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ProjectProtfolio from './components/ProjectProtfolio';
import Skills from './components/Skills';
function App() {
  const [loader, setLoader] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false)
    }, 500)
  }, [])
  return (
    <div>
      {
        loader ? <Loader /> :
          <>
            <Banner></Banner>
            <About></About>
            <ProjectProtfolio></ProjectProtfolio>
            <Skills></Skills>
            <Experiences></Experiences>
            <Footer></Footer>
          </>
      }
    </div>
  );
}

export default App;
