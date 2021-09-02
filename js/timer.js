class Timer {
  constructor(args) {
    this.timer = document.querySelector(args.selector);
    this.targetDate = args.targetDate;
    this.refs = {
      daysSpan: this.timer.querySelector('[data-value="days"]'),
      hoursSpan: this.timer.querySelector('[ data-value="hours"]'),
      minsSpan: this.timer.querySelector('[ data-value="mins"]'),
      secsSpan: this.timer.querySelector('[data-value="secs"]'),
    };
  }
  /* получаем разницу дат */
  getTimeDif() {
    let now = new Date();
    const time = this.targetDate - now;
    return time;
  }
  ///Запуск таймера
  startTimer() {
    setInterval(() => {
      console.log();
      this.updateTimer(this.getTimerValue());
    }, 1000);
  }
  //получаем значения для обновления таймера
  getTimerValue() {
    const time = this.getTimeDif();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    /*
     * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
     * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
     */
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    /*
     * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
     * миллисекунд в одной секунде (1000)
     */
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  }
  updateTimer({ days, hours, mins, secs }) {
    this.refs.daysSpan.textContent = days;
    this.refs.hoursSpan.textContent = hours;
    this.refs.minsSpan.textContent = mins;
    this.refs.secsSpan.textContent = secs;
  }
}
const abs = new Timer({
  selector: "#timer-1",
  targetDate: new Date("Sep 20, 2021"),
});
abs.startTimer();
