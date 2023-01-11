//write a function to determine whether a given string is a pangram or not
function pangram(str)
{
	str = str.toLowerCase();
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    var alphaArr = alphabets.split('');
    var y = alphaArr.length;
    var s = str.replace(/\s/g,'');
    for(let i = 0; i < s.length; i++){
    	var x = s[i];
        var index = alphaArr.indexOf(x);
        if (index != -1)
        {
        	alphaArr.splice(index, 1);
        }
    }
    var y = alphaArr.length;
    if (y == 0) return "is pangram";
    else return "is not a pangram";
}
