//function to return number of divisors of an integer.
function divisors(num)
{
	var count = 0;
    for(i = 0; i < num+1; i++)
    {
    	if(num%i==0)
        {
        	count++;
        }
    }
    return count;
}
