const timeoutPromise = ms => new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve();
  }, ms);
})

const sample = ((from, to) => from + (to - from) * Math.ramdom())const

function removeGreeting(){
  const greetingDiv = document.getElementById('greeting');
  if (greetingDiv) {
    greetingDiv.remove();
  }
}

async function addTime(ms) {
  const timeDiv = document.createElement('div');
  timeDiv.textContent = 'Loading...';
  document.getElementById('container').appendChild(timeDiv);

  await timeoutPromise(ms);
  timeDiv.textContent =(new Date()).toString()

}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add-one').addEventListener('click', () => {
    removeGreeting();

    addTime(sample(0, 1000));
  })

  document.getElementById('add-three').addEventListener('click', () => {
    removeGreeting();

    Array(3).fill().forEach(() => {
      addtime(sample(1000, 3000));
    });
  })
})
