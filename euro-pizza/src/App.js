import Navbar from './components/navbar/nav';
import Home from './pages/home/home';
import Footer from './components/footer/footer';
import './style.css';

function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <Navbar />
        <Home />
        <Footer />
      </header>
    </div>
  );
}

export default App;
