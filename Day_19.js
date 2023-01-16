/function to return value of colour code in resistors
function colour_code(colour)
{
	colour = colour.toLowerCase();
    switch(colour){
        case 'brown' : return 1;
        case 'red' : return 2;
        case 'yellow' : return 4;
        case 'green' : return 5;
        case 'blue' : return 6;
        case 'violet' : return 7;
        case 'grey' : return 8;
        case 'white' : return 9;
        default : return 0;
    }
}
