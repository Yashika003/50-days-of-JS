//function to return word with largest score in the string.
//score of a word is the sum of the numbers assigned to each letter of the word.
//numbers are assigned to letters based on alphabetical order.
function score(str)
{
	var split_str = str.split(' ');
    var num_arr = [];
    for (i = 0; i < split_str.length; i++)
    {
    	var word = split_str[i].split('');
        for (j = 0; j < word.length; j++)
        {
        	if(word[j] === 'a') word[j] = 1;
            else if(word[j] === 'b') word[j] = 2;
            else if(word[j] === 'c') word[j] = 3;
            else if(word[j] === 'd') word[j] = 4;
            else if(word[j] === 'e') word[j] = 5;
            else if(word[j] === 'f') word[j] = 6;
            else if(word[j] === 'g') word[j] = 7;
            else if(word[j] === 'h') word[j] = 8;
            else if(word[j] === 'i') word[j] = 9;
            else if(word[j] === 'j') word[j] = 10;
            else if(word[j] === 'k') word[j] = 11;
            else if(word[j] === 'l') word[j] = 12;
            else if(word[j] === 'm') word[j] = 13;
            else if(word[j] === 'n') word[j] = 14;
            else if(word[j] === 'o') word[j] = 15;
            else if(word[j] === 'p') word[j] = 16;
            else if(word[j] === 'q') word[j] = 17;
            else if(word[j] === 'r') word[j] = 18;
            else if(word[j] === 's') word[j] = 19;
            else if(word[j] === 't') word[j] = 20;
            else if(word[j] === 'u') word[j] = 21;
            else if(word[j] === 'v') word[j] = 22;
            else if(word[j] === 'w') word[j] = 23;
            else if(word[j] === 'x') word[j] = 24;
            else if(word[j] === 'y') word[j] = 25;
            else if(word[j] === 'z') word[j] = 26;
        }
        var sum = 0;
        for (k = 0; k < word.length; k++)
        {
        	sum+=word[k];
        }
        num_arr.push(sum);
    }
    var max = 0;
    for(i = 0; i < split_str.length; i++)
    {
    	if(num_arr[i]>max)
        {
        	max = num_arr[i];
            var max_val = split_str[i];
        }
    }
    return max_val;
}
