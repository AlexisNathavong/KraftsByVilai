import './App.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <div class="ui menu">
          <div class="header item">
            Home
          </div>
          <a class="item">
            About
          </a>
      </div>
      <HomePage/>
    </div>
  );
}

export default App;
