import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Hello from './components/Hello'
import Name from './components/Name'
import Message from './components/Message';
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import reportWebVitals from './reportWebVitals';
import Counter from './components/Counter';

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <Name />
    <Message />
    <Parent />
    <Page />
    <Counter initialValue={0}/>
  </React.StrictMode>,
  document.getElementById('root'),
)
