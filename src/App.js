import './css/App.css';
import './css/Header.css';
import './css/Footer.css';
import './css/App.css';
import './css/Square.css';
import './css/Board.css';
import './css/Game.css';
import Game from "./components/Game"
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main"><Game /></main>
      <Footer />
    </div>
  );
}

export default App;
