import './App.css';
import About from './Componets/About';
import Contact from './Componets/Contact';
import Home from './Componets/Home';
import Navbar from './Componets/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={Home } />
        <Route path="/about"element={About} />
        <Route path="/contact" element={Contact}/>
      </Routes>
      </div>
  );
}

export default App;
