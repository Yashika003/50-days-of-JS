//write a function to reverse an integer
function reverse_num(num){
	var str = num.toString();
	var str_split = str.split('');
	var str_reverse = str_split.reverse();
	var str_join = str_reverse.join('');
	var str_to_num = parseInt(str_join);
	return str_join;
}
