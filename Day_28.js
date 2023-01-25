//write a function to return a string with all even indexed letters of each word
//in uppercase and odd indexed letters of each word in lowercase
function word(str)
{
	arr = str.split(' ');
    for(i =0; i<arr.length; i++)
    {
    	var x = arr[i].split('');
        for (j = 0; j < x.length; j++)
        {
        	if(j%2===0)
            {
            	x[j] = x[j].toUpperCase();
            }
            else
            {
            	x[j] = x[j].toLowerCase();
            }
        }
        arr[i] = x.join('');
    }
    str = arr.join(" ");
    return str;
}
