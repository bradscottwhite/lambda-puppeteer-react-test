import { useState } from 'react';
import './App.css';

const url = 'https://l7nxxht4fvuqa25dzwfg5wsc6u0zhvkv.lambda-url.us-east-1.on.aws/';

const App = () => {
  const [ input, setInput ] = useState('');
  const [ title, setTitle ] = useState('');

  const fetchTitle = async () => {
    try {
      const data = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input })
      });
      setTitle(
        await data.json().title
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>{title}</h2>
        <input
          value={input}
          placeholder='Enter url to scrape...'
          onChange={e => setInput(e.currentTarget.value)}
        />
        <button onClick={fetchTitle}>Fetch Title</button>
      </header>
    </div>
  );
};

export default App;
