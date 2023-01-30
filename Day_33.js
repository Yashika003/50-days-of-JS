//function to remove duplicates from an array
function unique(arr)
{
	var set = new Set(arr);
    return Array.from(set.values());
}
