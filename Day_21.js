/function to add 2 arrays without duplicates
function add(arr1, arr2)
{
	arr3 = arr1.concat(arr2);
    for(var i=0; i<arr3.length; ++i) {
        for(var j=i+1; j<arr3.length; ++j) {
            if(arr3[i] === arr3[j])
                arr3.splice(j--, 1);
        }
    }
    return arr3;
}
