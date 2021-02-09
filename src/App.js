import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import './App.css';

function App() {
  
  return (
    <div className="App">
        <Navbar/>
        <MovieList/>
        <Footer/>
    </div>
  );
}

export default App;
