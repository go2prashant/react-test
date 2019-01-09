import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';



it('App should render here', () => {
  const div = document.createElement('div');
  console.log('div created.....');
  ReactDOM.render(<App />, div);
  console.log('App rendered.....');
});
