//write a function to convert given array of digits of a base to another 
//asked base
//if the number is 24, and we have to change it to base 8, then input will be
//change_base([2,4], 10, 8)
function change_base(arr, from_base, to_base)
{
	var num = arr.join("");
    if (from_base === 10)
    {
    	var number = Number(num);
        var new_int = number.toString(to_base);
    }
    else if (to_base === 10)
    {
    	new_int = parseInt(num, from_base);
    }
    else
    {
    	number = parseInt(num, from_base);
        new_int = number.toString(to_base);
    }
    var new_arr = Array.from(String(new_int), String);
    for (i=0; i<new_arr.length; i++)
    {
    	var x = new_arr[i];
        var y = parseInt(x, to_base);
        new_arr[i] = y;
    }
    return new_arr;
}
