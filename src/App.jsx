import gsap from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
gsap.registerPlugin(ScrollTrigger,SplitText)
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <div className=' h-dvh '>
<div className="noisy"></div>
      </div>
    </main>
    
  )
}

export default App