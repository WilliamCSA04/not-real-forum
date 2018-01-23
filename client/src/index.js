import React from 'react';
import ReactDOM from 'react-dom';
import App from './templates/App';
import "./scss/Default.scss"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
