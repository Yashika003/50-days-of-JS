//in an array of positive integers, find the outlier.
//the array will consist of all odd or all even integers except one outlier
function outlier(arr)
{
	var count_odd = 0;
    var count_even = 0;
    var odd_arr = [];
    var even_arr = [];
    for(i = 0; i < arr.length; i++)
    {
    	if(arr[i]%2==0) 
        {
        	count_even++;
            even_arr.push(arr[i]);
        }
        else 
        {
        	count_odd++;
            odd_arr.push(arr[i]);
        }
    }
    if(count_odd==1)
    {
    	return odd_arr;
    }
    else
    {
    	return even_arr;
    }
}
