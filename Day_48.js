//function to format number of seconds to human readable format
function format(sec) {
  let time = { year:3153600, day: 86400, hour: 3600, minute: 60, second: 1 };
  let arr = [];
  if(sec === 0) return 'now'
  if(sec < 0) return;

  for(let key in time){
      if(sec >= time[key]){
          var val = Math.floor(sec/time[key]);
          val += val > 1 ? ' '+ key + 's' : ' ' + key
          arr.push(val)
          sec = sec%time[key]
      }
  }
  return arr.length > 1 ? arr.join(', ').replace(/,([^,]*)$/,' and'+'$1') : arr[0]

}
