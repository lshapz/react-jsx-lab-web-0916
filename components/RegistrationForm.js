const React = require('react');

class RegistrationForm extends React.Component {
  render(){
    React.createElement('form', {action: '/register', method: 'POST'}, 
      [React.createElement('input', {type: 'text'}), 
      React.createElement('input', {type:'password'}), 
      React.createElement('button', {type:'submit'})]


      )


  }
}

  module.exports = RegistrationForm;
