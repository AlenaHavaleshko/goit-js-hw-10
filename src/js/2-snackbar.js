import '../css/styles.css';

const NOTIFICATION_DELAY_SUCCESS = 3000;
const NOTIFICATION_DELAY_REJECT = 6000;
let timeoutId = null;

const refs = {
  notificationSuccess: document.querySelector('.js-alert-fulfield'),
  notificationReject: document.querySelector('.js-alert-rejected'),
}

refs.notificationSuccess.addEventListener('click', onNatificationClick);
refs.notificationReject.addEventListener('click', onNatificationClick);

showNotificationSuccess();
showNotificationReject();

// Functions

function onNatificationClick() {
  hideNotificationSuccess();
  clearInterval(timeoutId);
};

// Success
function showNotificationSuccess() {
  refs.notificationSuccess.classList.add('is-visible-success');
 // refs.notificationReject,classList.add('is-visible');

 timeoutId = setTimeout(() => {
    console.log('Закриваем алерт автоматически,чтобы не висел');
    hideNotificationSuccess();
  }, NOTIFICATION_DELAY_SUCCESS);
}

// Reject
function showNotificationReject() {
  refs.notificationReject.classList.add('is-visible-reject');

 timeoutId = setTimeout(() => {
    console.log('Закриваем алерт автоматически,чтобы не висел');
    hideNotificationReject();
  }, NOTIFICATION_DELAY_REJECT);
}

// hide notification
function hideNotificationSuccess() {
  refs.notificationSuccess.classList.remove('is-visible-success');
}

function hideNotificationReject() {
  refs.notificationReject.classList.remove('is-visible-reject');
}






const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;

let promptCounter = 0;
let hasSubscribed = true;

 const intervalId = setInterval(() => {
  if( promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('Нужно остановить интервал');
    clearInterval(intervalId);
    return
  }
  console.log('Подпишись на рассылку! - ' + Date.now());
  promptCounter += 1
}, PROMPT_DELAY);