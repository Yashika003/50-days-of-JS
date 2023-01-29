//function to obtain gcd of 2 numbers
function gcd(num1, num2)
{
	if(num1 >= num2)
    {
    	var lesser = num2;
    }
    else
    {
    	lesser = num1;
    }
    for(i = lesser; i>1; i--)
    {
    	if(num1%i===0 && num2%i===0)
        {
        	return i;
            break;
        }
    }
}
