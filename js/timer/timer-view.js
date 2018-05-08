import AbstractView from '../AbstractView';

const RADIUS = 370;
const MAX_TIME = 120;
export default class Header extends AbstractView {
  constructor(seconds) {
    super();
    this.seconds = seconds;
    this.lengthRound = Math.round(2 * Math.PI * RADIUS);
    this.shadowRound = this.lengthRound / (MAX_TIME);
    this.timerView = this.shadowRound * (MAX_TIME - this.seconds);
  }
  get template() {
    const minutes = String(parseInt(this.seconds / 60, 10)).padStart(2, `0`);
    const seconds = String(this.seconds % 60).padStart(2, `0`);
    return `
        <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780" stroke-dasharray="${this.lengthRound}" 
        stroke-dashoffset="${this.timerView}">
          <circle
            cx="390" cy="390" r="370"
            class="timer-line"
            style="filter: url(#blur);  transform: rotate(-90deg) scaleY(-1); transform-origin: center">
          </circle>
        </svg>
        <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer-value-mins">${minutes}</span><!--
          --><span class="timer-value-dots">:</span><!--
          --><span class="timer-value-secs">${seconds}</span>
        </div>`;
  }

  bind() {

  }
}
