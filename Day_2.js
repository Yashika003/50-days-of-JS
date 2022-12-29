//write a function to reverse a string
function reverse_string(str){
	var split_str=str.split("");
	var reverse_str = split_str.reverse();
	var join_str = reverse_str.join("");
	return join_str;
}
