import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="App">
      <h1>Workshop React Hooks</h1>
      <button className="visibility-btn" onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Counter
      </button>
      {isVisible && <Counter />}
    </div>
  );
}

export default App;
