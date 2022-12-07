import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  // 👇️ Change text color for clicked element only
  event.target.style.color = 'salmon';
});

