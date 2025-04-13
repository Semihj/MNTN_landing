import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Home from './components/Home'
import Level1 from './components/Level1'
import Level2 from './components/Level2'
import Level3 from './components/Level3'
import Navbar from './components/Navbar'
import Socials from './components/Socials'

function App() {

  return (
     <div className='flex flex-col w-full text-white' >
      
      <div className="w-full flex flex-col max-h-[1000px] z-0 ">
      <Socials/>
      <Navbar/>
      <Hero />
      <Home/> 
      <div id='content' className=" top-0 left-0 mt-[800px] lg:mt-[900px] z-50 gap-20 lg:gap-[200px] flex flex-col  w-full relative bg-[#0B1D26] ">
        <Level1/>
        <Level2/>
        <Level3/>
      </div>
      <Footer/>
       </div>
     </div>
  )

}

export default App
