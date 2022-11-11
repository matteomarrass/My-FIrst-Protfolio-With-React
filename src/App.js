import "./App.css";
import { onRefresh } from "./components/presentation";

onRefresh();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p id="ciao"></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
