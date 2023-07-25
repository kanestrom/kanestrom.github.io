import logo from './Vektorlogo4.svg';
import instagram from "./03 Black Glyph/Instagram_Glyph_Black.png"
import facebook from "./black/PNG/f_logo_RGB-Black_114.png"
import './App.css';
import Body from './Body';
import Paintings from './Paintings';

function App() {
  return (
    <div className="App">
      <header>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <a className="App-link"
        href="https://www.instagram.com/kanestrom.art/"
        target="_blank"
        rel="noopener noreferrer">
        <img src={instagram} className="Social-logo" alt="logo" />
      </a>
      <a className="App-link"
          href="https://www.facebook.com/gallerirkk/"
          target="_blank"
        rel="noopener noreferrer">
        <img src={facebook} className="Social-logo" alt="logo" />
      </a> */}

      <Body />
      <Paintings />

    </div>
  );
}

export default App;
