//write a function to return a string in the given format:
//input string = 'AbCd'
//output string = 'A-Bb-Ccc-Dddd'
function mumble(str)
{
	str = str.toLowerCase();
    var x = ''
    for(i = 0; i<str.length; i++)
    {
        var y = '';
        x = x+str[i].toUpperCase();
        for(j = 0; j<i; j++)
        {
        	y+=str[i];
        }
        x=x+y+'-';
    }
    x = x.replace(/.$/,'');
    str = x;
    return str;	
}
