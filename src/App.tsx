import './css/App.css';
import './css/Header.css';
import './css/Footer.css';
import './css/App.css';
import './css/Square.css';
import './css/Board.css';
import './css/Game.css';
import Game from "./components/Game.tsx"
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header />
      <main className="Main"><Game /></main>
      <Footer />
    </div>
  );
}

export default App;
