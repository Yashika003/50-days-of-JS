//write a function to return the number of grains on a given square and the 
//total number of grains on chessboard given the condition: 
//One grain on the first square of a chess board, with the number of grains 
//doubling on each successive square.
function chess(num)
{
	var x = num-1;
    var grains_on_square = 2**x;
    var grains_on_board = 0;
    for (i = 0; i < 64; i++)
    {
    	grains_on_board += 2**i;
    }
    const str = "Total number of grains on board = "+grains_on_board+" and grains on square "+num+" is "+grains_on_square+".";
    return str;
}
