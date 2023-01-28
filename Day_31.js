//function to return factorial of a number
function factorial(num)
{
	var product = 1;
    for(i = num; i>0; i--)
    {
    	product = product*i;
    }
    return product;
}
