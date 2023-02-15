const name = document.querySelector('.name');
const isUserName = document.querySelector('.username');
const date = new Date();
const hours = date.getHours();
const isGreeting = document.querySelector('.greeting');
const greetingEn = ['night', 'morning', 'afternoon', 'evening'];

function getTimeOfDay() {
  return greetingEn[Math.floor(hours/6)];
}

function showGreeting() {
  const timeOfDay = getTimeOfDay();
  isGreeting.textContent = `Good ${timeOfDay},`;
  setTimeout(showGreeting, 1000);
}

function setLocalStorage() {
  if (localStorage.getItem('name') === 'undefined') {
    localStorage.clear();
  }
  localStorage.setItem('name', name.value);
}

function getLocalStorage() {
  if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
    isUserName.textContent = name.value;
  }
}

function colorName() {
  if (isUserName.textContent.length === 0) {
    isUserName.textContent = '[Your name]';
    isUserName.classList.add('_none-name');
  }
  if (isUserName.classList.contains('_none-name') && !isUserName.textContent.includes('[Your name]')) {
    isUserName.classList.remove('_none-name');
  }
}

// TODO non-scroll span element with big text and move cursor in start
function sizeGreeting() {
  console.log(window.innerWidth);
  if (isGreeting.getBoundingClientRect().y === isUserName.getBoundingClientRect().y && isGreeting.offsetWidth + isUserName.offsetWidth < window.innerWidth) {
    isUserName.classList.remove('_inline-block');
  }
  if (isGreeting.offsetWidth + isUserName.offsetWidth > window.innerWidth) {
    isUserName.classList.add('_inline-block');
    isUserName.style.maxWidth = Math.floor(window.innerWidth - window.innerWidth/10)  + 'px';
  }
}

isUserName.addEventListener('click', function(e) {
  if (isUserName.textContent.includes('[Your name]')) {
    isUserName.textContent = '';
  }
  isUserName.classList.remove('_none-name');
  isUserName.contentEditable = 'true';
  isUserName.style.borderBottom = "1px solid #fff";
  sizeGreeting();
});

document.addEventListener( 'keyup', function(e) {
  if( e.code === 'Enter') {
    isUserName.textContent = isUserName.textContent.replace(/(\r\n|\n|\r)/gm," ");
    e.stopPropagation();
    e.preventDefault();
    isUserName.contentEditable = 'false';
    name.value = isUserName.textContent;
    setLocalStorage();
    isUserName.style.borderBottom = "none";
    colorName();
  };
  sizeGreeting();
});

document.addEventListener('click', (e) => {
  let target = e.target;
  let nameUser = target == isUserName || isUserName.contains(target);

  if (!nameUser) {
    name.value = isUserName.textContent;
    setLocalStorage();
    isUserName.style.borderBottom = "none";
    colorName();
    sizeGreeting();
  }
});

export {showGreeting, setLocalStorage, getLocalStorage, colorName, sizeGreeting};