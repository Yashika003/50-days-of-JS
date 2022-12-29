// create a function to generate randum numbers between a given range with maximum and 
//minimum numbers inclusive.
function random_num(min, max) {
  let y = max-min+1
  let x = Math.floor((Math.random() * (y)) +min);
  return x;
}
