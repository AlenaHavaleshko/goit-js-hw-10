import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const delay = Number(e.target.elements.delay.value);
  const isSuccessful = e.target.elements.isActive.value === 'fulfilled';

  const promise = createPromise(delay, isSuccessful);

  function createPromise(delay, isSuccessful) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isSuccessful) {
          resolve({ delay });
        } else {
          reject({ delay });
        }
      }, delay);
    });
  }

  promise
    .then(({ delay }) => {
      iziToast.success({
        title: 'OK',
        message: `✅ Fulfilled promise in ${delay} ms`,
        position: 'topRight',
      });
    }
    )
    .catch(({ delay }) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay} ms`,
        position: 'topRight',
      });
    });
  form.reset();
});
