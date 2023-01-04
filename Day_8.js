//write a function which accepts two valid dates and returns the difference
//between them as number of days
//date format = "mm/dd/yyyy"
function diff_date(date1, date2) 
{
	var d1 = new Date(date1);   
	var d2 = new Date(date2);
    var diff_time = d2.getTime() - d1.getTime();
    var diff_day = diff_time/(1000 * 60 * 60 * 24);
    return diff_day;
}
