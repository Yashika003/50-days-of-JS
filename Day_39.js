//write a function for the following
//'Pure Strawberry Joy' takes 0.5 minutes, 'Energizer' and 'Green Garden' take 
//1.5 minutes each, 'Tropical Island' takes 3 minutes and 'All or Nothing' takes
//5 minutes. For all other drinks (e.g., special offers) you can assume a 
//preparation time of 2.5 minutes.
//e.g ('Tropical Island'); // => 3
//6 wedges from a 'small' lime, 8 wedges from a 'medium' lime and 10 from a 
//'large' lime.
//e.g (25, ['small', 'small', 'large', 'medium', 'small']); // => 4
// return the orders that cannot be prepared before the end of the work day.
//e.g (5, ['Energizer', 'All or Nothing', 'Green Garden']); // => ['Green Garden']
function mix_juice(name)
{
	switch(name)
    {
        case 'Pure Strawberry Joy' : return 0.5
        case 'Energizer': return 1.5;
        case 'Green Garden': return 1.5;
        case 'Tropical Island': return 3;
        case 'All or Nothing': return 5;
        default: return 2.5;
    }
}
function limes_cut(wedges_needed, limes)
{
	let total = 0;
    let count = 0;
    for(i=0;i<limes.length-1;i++){
        if(limes[i] == 'small') total += 6;
        if(limes[i] == 'medium') total += 8;
        if(limes[i] == 'large') total += 10;
        count++;
        if(total >= wedges_needed) break;
    }
	return count;
}
function orders_remaining(time_left, orders)
{
	let time = 0;
    for(i=0;i<orders.length;i++){
        time += mix_juice(orders[i]);
        orders.splice(0,1);
        if(time_left <= time) break;
    }
	return orders;
}
