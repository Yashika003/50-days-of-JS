//function to write a number in expanded form.
function expanded_num(num)
{
	var str = num.toString().split('');
    for (i = 0; i<str.length; i++)
    {
    	for(j = str.length - i; j>1; j--)
        {
        	str[i] += '0';
        }
    }
    return str.join('+');
}
