//function to return the middle letter of a word.
//if there are even number of letters, return the middle two letters.
function middle(str)
{
	var i = Math.floor(str.length/2) -  1;
    if(str.length%2==0) return str[i]+str[i+1];
    return str[i+1];
}
