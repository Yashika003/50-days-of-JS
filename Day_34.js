//function to find element with most frequency in given array.
function frequent(arr)
{
	var max = 0;
    var value = 0;
    for(i = 0; i < arr.length; i++)
    {
    	let freq = 0;
        for(let j = 0 ; j < arr.length ; j++){
    		if(arr[i] == arr[j]){
        		freq += 1;
    		}
		}
        if(freq > max)
        {
        	max = freq;
            value = arr[i];
        }
    }
    return 'Element with most frequency is: '+value+' with frequency '+max;
}
