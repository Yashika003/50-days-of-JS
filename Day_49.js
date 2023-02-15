//function to check whether a given set of 3 numbers could be the lengths of the
//sides of a triangle
function triangle(a, b, c)
{
	if(a+b>c && b+c>a && a+c>b) return true;
    return false;
}
