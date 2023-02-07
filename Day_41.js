//function to determine membership of a club
//two types of me,bership: open and senior
//if a person is of at least 55 years old and has a handicap greater than 7,
//then they are senior member, else they are open member
//input of type [[age, handicap], [age, handicap],...]
//output of type ['open', 'senior',...]
function membership(arr)
{
	out = [];
    for(i=0; i<arr.length; i++)
    {
    	if (arr[i][0]>=55 && arr[i][1]>7) out.push('senior');
        else out.push('open');
    }
    return out;
}
