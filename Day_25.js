//function to reverse words with 5 or more letters in a string.
function spin_words(str)
{
	var split_str = str.split(' ');
    for(var i = 0; i < split_str.length; i++)
    {
    	if(split_str[i].length >= 5)
        {
        	var rev = split_str[i].split('').reverse().join('');
            split_str[i] = rev;
        }
    }
    return split_str.join(' ');
}
