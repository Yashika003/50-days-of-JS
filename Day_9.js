//write a function to check if an object is empty or not
function is_empty(obj)
{
	var x = Object.keys(obj);
    if (x.length == 0)
    {
    	return true;
    }
    else
    {
    	return false;
    }
}
