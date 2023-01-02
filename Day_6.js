//write a function to truncate a string to a certain number of words.
function truncate(str, limit) 
{
	var split_str = str.split(" ");
    if (limit > split_str.length)
    {
    	var output = "Limit is greater than word count. Cannot perform function.";
    }
    else
    {
    	var join_str = "";
    	for (var i = 0; i < limit; i++)
    	{
    		join_str = join_str + split_str[i] + " ";
    	}
        output = join_str
    }
    return output
}
