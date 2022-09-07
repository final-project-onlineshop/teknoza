import { useState } from "react";
import "./App.css";
import Button from 'react-bootstrap/Button'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <img src="images/logo-teknoza.png" alt="Logo" height="50" />
      </div>
      <h1>Teknomarkt for Informatiker</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button variant="warning">bootstrap testing button</Button>{' '}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
