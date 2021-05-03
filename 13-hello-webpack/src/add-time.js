import Typed from 'typed.js';
// const Typed = require('typed.js')

import { timeoutPromise } from './utils.js';

// npm install typed.js --save

async function addTime(timeout) {
  const timeDiv = document.createElement('div');
  document.getElementById('container').appendChild(timeDiv);

  const textSpan = document.createElement('span');
  timeDiv.appendChild(textSpan);

  let typed = new Typed(textSpan, {
    strings: ["Loading..."],
    typeSpeed: 30
  });

  await timeoutPromise(timeout);
  typed.destroy();

  typed = new Typed(textSpan, {
    strings: ["Completed!",(new Date()).toString()],
    typeSpeed: 30,
    onComplete: () => {
      typed.cursor.remove();
    }
  });
}

export default addTime;