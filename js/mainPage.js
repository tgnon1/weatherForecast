// Code for the main app page (locations list).

// This is sample code to demonstrate navigation.
// You need not use it for final app.

loadLocations();

// Add a location for demo purpose
// locationWeatherCache.addLocation(-37.9152515,145.1115844,'Clayton');
// locationWeatherCache.addLocation(-27.9866558,153.0435033,'Gold Coast');
// saveLocations();


function viewLocation(locationName)
{
    // Save the desired location to local storage
    localStorage.setItem(APP_PREFIX + "-selectedLocation", locationName);
    // And load the view location page.
    location.href = 'viewlocation.html';
}
