import { useState } from 'react';

import axios from 'axios';

import './App.css';

const url = 'https://a5n2yicsb4.execute-api.us-east-1.amazonaws.com/staging';

const App = () => {
  const [ input, setInput ] = useState('');
  const [ title, setTitle ] = useState('');

  const fetchTitle = () => {
    try {
      axios.post(url, { url: input })
        .then(res => {
          const data = JSON.parse(res.data.body);
          setTitle(data.title);
        })
        .catch(err => {
          console.log(err);
        });
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
