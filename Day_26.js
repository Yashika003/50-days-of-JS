//write a function to return the number with odd frequency in an array of numbers
//only one element will appear odd number of times
function odd(arr)
{
	count = 0;
    for(i = 0; i < arr.length; i++)
    {
        for(j = 0; j < arr.length; j++)
        {
        	if (arr[i] === arr[j])
            {
            	count += 1;
            }
        }
        if (count % 2 !== 0)
        {
        	return arr[i];
        }
    }
}
