import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Loader from './components/Loader';
import ProjectProtfolio from './components/ProjectProtfolio';
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
          </>
      }
    </div>
  );
}

export default App;
