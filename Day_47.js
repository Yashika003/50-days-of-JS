//function to check for isograms. consider empty string to be an isogram
//ignore letter case
function isogram(str)
{
	if (str.length == 0) return true;
    else
    {
    	str = str.toLowerCase();
        var arr = str.split('');
        for(i = 0; i < arr.length; i++)
        {
        	for(j = i + 1; j < arr.length; j++)
            {
            	if(arr[i] === arr[j]) return false;
            }
        }
        return true;
    }
}
