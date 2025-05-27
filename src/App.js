import Gallery from './components/gallary';
import Header from './components/Nav';
import Home from './components/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';
import About from './components/About';
function App() {
  return (
    
    <div className="App">
      <div>
    <Header/>

      </div>
<Home/>
<Menu/>
     <Gallery/>
    <div>
<About/>
    </div>
<Footer/>
    </div>
  );
}

export default App;
