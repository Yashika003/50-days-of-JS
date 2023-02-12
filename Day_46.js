//in an array, find the index position of string 'needle'.
function needle(arr)
{
	for(i = 0; i < arr.length; i++)
    {
    	if(arr[i] === 'needle')
        {
        	return 'Needle found at position '+i;
            break;
        }
    }
}
