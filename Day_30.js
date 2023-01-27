//write a function that returns an array in the given format:
//input 'hello'
//output 'Hello','hEllo','heLlo','helLo','hellO'
function wave(str)
{
	let result = [];
  	for(let i = 0; i < str.length; i++) 
    {
      	let arr = str.toLowerCase().split("");
      	if(arr[i] === ' ') 
        {
      		continue;
      	} 
        else 
        {
      		arr[i] = arr[i].toUpperCase();
        	result.push(arr.join(""));
      	}
        
  	}
  	return result;
}
