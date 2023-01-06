//write a function to remove array elements based on object property
//input format = [{field: "property_name"}];
//fltr is the property_name which you want to remove from the array
function remove_obj(ar, fltr)
{
    var y = ar.length;
    for (i = 0; i < y; i++)
    {
    	if (ar[i].field == fltr)
        {
        	ar.splice(i, 1);
        }
    }
    var x = JSON.stringify(ar, null, 2);
    return x;
}
