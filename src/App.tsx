import './App.css';
import Game from "./components/Game/Game"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core";

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <main className="Main"><Game /></main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
