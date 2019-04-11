import $ from 'jquery';
import './style.scss';


// References https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc
function CountSeconds() {
  this.seconds = 0;
  this.counter = setInterval(() => {
    this.seconds += 1;
    const message = `You've been on this page for ${this.seconds} seconds`;
    $('#main').html(message);
  }, 1000);
}

const counting = new CountSeconds();

console.log(counting);
