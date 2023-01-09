//convert given seconds to space age on all planets of our solar system
const orbit = {
	'Mercury': 0.2408467,
    'Venus': 0.61519726,
    'Earth': 1.0,
    'Mars': 1.8808158,
    'Jupiter': 11.862615,
    'Saturn': 29.447498,
    'Uranus': 84.016846,
    'Neptune': 164.79132,
};
const earth_orbit_seconds = 31557600;
function spaceage(seconds)
{
	var x = [];
    for (var key in orbit)
    {          
        var y = orbit[key] * 31557600;
        var z = (seconds/y).toFixed(2);
        var w = key + ": " + z;
        x.push(w);
    }
    return x.join("<br>") + "<br>";
}
