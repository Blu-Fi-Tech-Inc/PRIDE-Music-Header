import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Explore <code>PRIDE Music Arcade</code> for Independent Artists.
        </p>
        <a
          className="App-link"
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome!
        </a>
      </header>
    </div>
  );
}

export default App;
