//function to return nth-largest number in a given array of numbers.
function nth_largest(arr,n)
{
	arr.sort(function(a, b){return a - b});
    var out = arr[n-1];
    return out;
}
