//Given an array of elements, find a subsequence in the array such that all the 
//elements in the sequence are consecutive irrespective of their order.
function sequence(arr)
{
	arr.sort();
    var unique_arr =[];
    for (i = 0; i < arr.length; i++)
    {
    	var x = arr[i];
        if(!unique_arr.includes(x))
        {
        	unique_arr.push(x);
        }
    }
    count = 0;
    for (i = 0; i < unique_arr.length; i++)
    {
    	if (unique_arr[i+1] ===	unique_arr[i]+1)
        {
        	count = count +1;
        }
    }
    return count;
}
