//write a function for the folowing:
//to check whether we need a license to drive the vehicle. In this case, only
//cars and truck need license.
//to check which car out of the two should we take. car is chosen based on
//which car comes first in a given list
//to determine price of used car. if the car is lesser than 3 years old, 80% of
//the original price; between 3 and 10 years old, 70% of the original price; 
//more than 10 years old, 50% of the original price
function need_license(vehicle)
{
	vehicle = vehicle.toLowerCase();
    if(vehicle =='car' || vehicle =='truck') return true;
    else return false;
}
function choose_car(model1, model2)
{
	const cars = ['Mahindra Thar', 'Tata Nexon', 'Toyota Fortuner', 'Mahindra XUV700', 'Hyundai Creta', 'Maruti Brezza', 'Tata Punch', 'Maruti Bolero', 'Maruti Baleno', 'Mahindra Scorpio-N', 'Maruti Ertiga', 'Tata Tiago', 'Hyundai Venue', 'Tata Harrier', 'Kia Seltos', 'Honda City 4th Generation']
    let index1 = cars.indexOf(model1);
    let index2 = cars.indexOf(model2);
    if(index1 < index2) return model1;
    else return model2;
}
function price(original_price, age)
{
	if(age < 3)
    {
    	var new_price = original_price*0.8;
    }
    else if(age < 10)
    {
    	new_price = original_price*0.7;
    }
    else
    {
    	new_price = original_price/2;
    }
    return new_price;
}
