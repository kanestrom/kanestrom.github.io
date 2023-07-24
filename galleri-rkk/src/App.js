import logo from './Vektorlogo4.svg';
import headerimg from './clean.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
      </header>
        <img src={headerimg} className="App-logo" alt="headerimg" />
        <p>
          Visit my <a
          className="App-link"
          href="https://www.facebook.com/gallerirkk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook page
        </a> to stay updated.
        </p>
        
    </div>
  );
}

export default App;
