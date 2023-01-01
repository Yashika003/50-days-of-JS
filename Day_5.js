//write a function which accepts a string argument and returns the count of
//characters between the first and last character 'X'.
function char_count(str) 
{
	var X_count = 0;
	const idx = [];
	for (var pos = 0; pos < str.length; pos++) 
 	{
    	if (str.charAt(pos) == 'X') 
    	{
    		X_count += 1;
    		idx.push(pos);
    	}
 	}
	if (X_count === 2)
	{	
 		count = idx[0] + idx[1];
 	}
 	else if (X_count === 1)
 	{
 		count = 0;
 	}
 	else if (X_count === 0)
 	{
 		count = -1;
 	}
 	return count;
}
