const form = document.getElementById('form');
const input = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const regex = [
  /^1 \d\d\d-\d\d\d-\d\d\d\d$/,
  /^1 \(\d\d\d\) \d\d\d-\d\d\d\d$/,
  /^1\(\d\d\d\)\d\d\d-\d\d\d\d$/,
  /^1 \d\d\d \d\d\d \d\d\d\d$/,
  /^\d\d\d\d\d\d\d\d\d\d$/,
  /^\d\d\d-\d\d\d-\d\d\d\d$/,
  /^\(\d\d\d\)\d\d\d-\d\d\d\d$/,
];

checkBtn.addEventListener('click', e => {
  e.preventDefault();
  
  const value = input.value;
  
  if (!value) return alert("Please provide a phone number");

  if (regex.some(re => re.test(value))) {
    resultsDiv.textContent = `Valid US number: ${value}`
    resultsDiv.classList.remove('error');
  } else {
    resultsDiv.textContent = `Invalid US number: ${value}`
    resultsDiv.classList.add('error');
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.innerHTML = '';
  resultsDiv.classList.remove('error');
});
