const btn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear');
const results = document.querySelector('#results');

btn.addEventListener('click', () => {
  results.textContent = ''; // Clear previous results

  for (let i = 1; i < 10; i++) {
    const square = i * i;
    results.textContent += `${i} x ${i} = ${square}\n`;
  }

  results.textContent += '\nFinished!';
});

clearBtn.addEventListener('click', () => {
  results.textContent = '';
});