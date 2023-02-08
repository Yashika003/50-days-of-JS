//function to return the sum of the two smallest positive integers of given
//array of positive integers
function min_sum(arr)
{
	 arr.sort(function(a, b){return a - b});
     return arr[0]+arr[1];
}
