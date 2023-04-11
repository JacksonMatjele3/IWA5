const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

const location = 'RSA';
const currency = 'R';
const customers = 1;

let shipping = null;
let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

if (location === 'RSA') {
  shipping = 400;
  currency === 'R';
} else if (location === 'NAM') {
  shipping = 600;
} else {
  shipping = 800;
}

if ((shoes + batteries + pens + shirts) >= 1000 && (location === 'RSA' || location === 'NAM') && customers === 1) {
  shipping = 0;
}

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

if (location === 'NK') {
  console.log(BANNED_WARNING);
} else {
  console.log('Price:', currency, shoes + batteries + pens + shirts + shipping + toys);
}

