import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DocumentMeta from 'react-document-meta';

import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Nemanja Milojević | Front-End Developer',
  description: 'I am a description, and I can create multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DocumentMeta {...meta}>
        <App />
      </DocumentMeta>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
