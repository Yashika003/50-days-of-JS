//function that tells whether a given year is a leap year or not.
function leap_year(num)
{
	var flag = true;
    if(num%4!=0) flag = false;
    else if(num%100==0 && num%400!=0) flag = false; 
    if(flag==true) return('Is Leap Year');
    else return ('Not a leap year');
}
