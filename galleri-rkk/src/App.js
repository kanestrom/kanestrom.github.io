import logo from './Vektorlogo4.svg';
import './App.css';
import Body from './Body';
import Paintings from './Paintings';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} style={{ width: 870, maxWidth: "100%" }} alt="logo" />
      </header>
      <Body />
      <Paintings />

    </div>
  );
}

export default App;
