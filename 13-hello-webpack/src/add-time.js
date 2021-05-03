import Typed from 'typed.js';
// const Typed = require('typed.js')

import { timeoutPromise } from './utils.js';

// npm install typed.js --save

async function addTime(timeout) {
  const timeDiv = document.createElement('div');
  document.getElementById('container').appendChild(timeDiv);

  const textspan = document.createElement('span');
  timeDiv.appendChild(textspan);

  var typed = new Typed(textspan, {
    strings: ["Loading..."],
    typeSpeed: 30
  });

  await timeoutPromise(timeout);

  timeDiv.textContent = (new Date()).toString();
}

export default addTime;