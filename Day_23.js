//for an array of numbers, write a function to return index for which sum of
//both sides of the array is equal
function equal(arr)
{
	for (i=0; i<arr.length; i++)
    {
        var leftSum = 0;
        for (var j = 0; j<i; j++) {
  			leftSum += arr[j];
		}
        var rightSum = 0;
        for (var k = i+1; k<arr.length; k++) {
  			rightSum += arr[k];;
		}
        if(rightSum === leftSum)
        {
        	return i;
        }
    }
    return -1;
}
