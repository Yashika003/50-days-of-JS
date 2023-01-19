//function to remove duplicates from string or array day 22
function unique(arr)
{
    if (typeof arr === 'string') 
    { 
    	arr = arr.split(""); 
    }
    for(var i=0; i<arr.length; ++i) {
        for(var j=i+1; j<arr.length; ++j) {
            if(arr[i] === arr[j])
                arr.splice(j--, 1);
        }
    }
    return arr;
}
