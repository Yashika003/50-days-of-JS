//write a function which can convert the time input given in 12 hours format to 
//24 hours format
function _12_to_24(time){ //Input in "HH:MM AM/PM" format
	var hrs = Number(time.match(/^(\d+)/)[1]);
	var mnts = Number(time.match(/:(\d+)/)[1]);
	var ampm = time.match(/\s(.*)$/)[1];
	if (ampm === "PM" && hrs < 12) hrs = hrs + 12;
    if (ampm === "AM" && hrs === 12) hrs = hrs - 12;
    var sHrs   = hrs.toString();
    var sMnts = mnts.toString();
    if (hrs < 10) sHrs = "0" + sHrs;
    if (mnts < 10) sMnts = "0" + sMnts;
	return (sHrs + ":" + sMnts);
}
