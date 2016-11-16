const React = require('react');
const ReactDOM = require('react-dom');

const RegistrationForm = require('./components/RegistrationForm');
const Webpage = require('./components/Webpage');

ReactDOM.render(
  (
    React.createElement('div', {}, [RegistrationForm, Webpage])
  ),
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
