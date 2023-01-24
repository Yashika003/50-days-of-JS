//write function to return number of vowels in a string
function vowel(str)
{
	const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    const arr = str.split('');
    var count = 0;
    for (i =0; i < arr.length; i++)
    {
        for (j =0; j < vowels.length; j++)
        {
            if (arr[i] === vowels[j])
            {
            	count += 1;
            }
        }
    }
    return count;
}
