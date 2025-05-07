
import '../css/styles.css';

// setTimeout
// const logger = time => {
//   console.log(`Лог через ${time} мс, потому что не отенили тайм аут`)
// };

// const timerId = setTimeout(logger, 2000, 2000);

// console.log(timerId);

// const shouldCanselTimer = Math.random() > 0.3;
// console.log(shouldCanselTimer);

// if(shouldCanselTimer) {
//   clearTimeout(timerId);
// }

// // setInterval
// const logger = time => {
//   console.log(`Лог каждые ${time} мс - ${Date.now()}`)
// };

// const intervalId = setInterval(logger, 2000, 2000);

// console.log(intervalId);

// const shouldCanselInterval = Math.random() > 0.3;
// console.log(shouldCanselInterval);

// if(shouldCanselInterval) {
//   clearInterval(intervalId);
// }

//------------------------------------------
// const date1 = new Date();
// console.log('date1', date1);


// setTimeout(() => {
//   const date2 = new Date();

//   console.log('date1', date1);
//   console.log('date2', date2);

//   console.log(date2 - date1)
// }, 3000);

//------------------------------------------

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
}

class Timer {
  constructor({onTick}) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
  }
  start() {
    if(this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = getTimeComponents(deltaTime);
  
     this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  }
}


// timer

const timer = new Timer({
  onTick: updateClockface,
});
// const timer = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if(this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = getTimeComponents(deltaTime);
  
//       updateClockface(time);
//      // console.log(`${hours}::${mins}::${secs}`);
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   },
// };

// запуск
refs.startBtn.addEventListener('click', timer.start.bind(timer));

// стоп
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));



// Приймають час у мідісекундах
// Рахують скільки в них вміщається годин/хвилин/секунд
// Малює інтерфейс

function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

// Приймаэ числа, перетворює в строку і додає на початок 0
//  якщо число меньше 2х знаков 
function pad(value) {
  return String(value).padStart(2, '0');
}

// Принимает время в миллисекундах
// Вычисляет сколько в них вмещается часов/минут/секунд
// Возвращает объект со свойствами hours, mins, secs
// Адская копипаста со стека 💩

function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}






