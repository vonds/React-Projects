import React from 'react';
import GithubUserInfo from './GithubUserInfo'
import ZenQuote from './ZenQuote'
import './App.css';

function App() {
  return (
    <div className="App">
      <GithubUserInfo username='facebook' />
      <GithubUserInfo username='vonds' />
      <GithubUserInfo username='gaearon' />
      <GithubUserInfo username='sophiebits' />
    </div>
  );
}

export default App;
