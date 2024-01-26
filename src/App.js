import './App.css';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
           <Hero/>
           <Gallery/>
           <Programs/>
           <Reasons/>
           <Plans/>
           <Testimonials/>
           <Join/>
           <Footer/>
    </div>
  );
}

export default App;
