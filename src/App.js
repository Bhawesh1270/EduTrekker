import './App.css';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Team from './components/Team';
// import Footerteam from  './components/footerteam';
function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <AboutUs/>
   <Courses/>
<Team/>
   {/* <Footerteam/> */}

   <Footer/>
   </>
  );
}

export default App;
