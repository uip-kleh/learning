import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Hello from './components/Hello'
import Name from './components/Name'
import Message from './components/Message';
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import Counter from './components/Counter';
import Counters from './components/Counters';
import { FizzBuzzParent } from './components/Parent';
import { ParentMemo } from './components/ParentMemo';
import { UseMemoSample } from './components/UseMemoSample';
import { Clock } from './components/Clock';
import { UseContextSample } from './components/UseContextSample';
import ImageUploader from './components/UseRefSample';
import { FizzBuzz } from './components/FizzBuzz';
import { UseCallbackSample } from './components/UseCallbackSample';
import { UseEffectSample } from './components/UseEffectSample';

ReactDOM.render(
  <React.StrictMode>
    {/* <Hello /> */}
    {/* <Name /> */}
    {/* <Message /> */}
    {/* <Parent /> */}
    {/* <Page /> */}
    {/* <Counter initialValue={0}/> */}
    {/* <Counters initialValue={0} /> */}
    {/* <FizzBuzzParent />
    <ParentMemo />
    <UseMemoSample />
    <Clock />
    <UseContextSample />
    <ImageUploader /> */}
    <h1>PRACTICE</h1>
    {/* <FizzBuzz /> */}
    <UseCallbackSample />
    <UseMemoSample />
    <UseEffectSample />
  </React.StrictMode>,
  document.getElementById('root'),
)
