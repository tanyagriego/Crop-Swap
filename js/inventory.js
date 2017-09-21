
//this array contains the produce options
var produceArray = ["Carrots", "Apples", "Kale", "Strawberries", "Squash"];

//array of locations of markets
var locationsArray =[];

//constructor function to build various locations
var MarketLocation = function (neighborhood, address, starId) {
    this.neighborhood = neighborhood;
    this.address = address;
    this.starId = starId
}

//locations pushed into the array
locationsArray.push(new MarketLocation("The Pearl", "123 Marshall St.", "star1"));
locationsArray.push(new MarketLocation("PSU", "1825 SW Broadway", "star2"));
locationsArray.push(new MarketLocation("Sellwood", "789 SE Tacoma St.", "star3"));
locationsArray.push(new MarketLocation("Northeast", "2035 NE Alberta St", "star4"));
locationsArray.push(new MarketLocation("Southeast","3203 SE Woodstock Blvd", "star5",));


//code to add text to the paragraph
var message = "blank";

function updatePage() {
    document.getElementById("address-paragraph").innerHTML = message;
}

//code that adds stars to the map and updates the text on the page
function showLocations() {
    for (var index = 0; index < userProfile.length; index++) {
        if (produceLocationOptions.value == userProfile[index].crops) {
            document.getElementById("star1").style.visibility = 'visible';
            message += MarketLocation.address
            updatePage();
        } else if (produceLocationOptions.value == userProfile[index].crops) {
            document.getElementById("star2").style.visibility = 'visible';
            message += "1825 SW Broadway";
            updatePage();
        } else if (produceLocationOptions.value == userProfile[index].crops) {
            document.getElementById("star3").style.visibility = 'visible';
            message += "789 SE Tacoma St.";
            updatePage();
        } else if (produceLocationOptions.value == userProfile[index].crops) {
            document.getElementById("star4").style.visibility = 'visible';
            message += "2035 NE Alberta St";
            updatePage();
        } else if (produceLocationOptions.value == userProfile[index].crops) {
            document.getElementById("star5").style.visibility = 'visible';
            message += "3203 SE Woodstock Blvd";
            updatePage();
        } else {
            document.getElementById("star1").style.visibility = 'hidden';
            message = "No options available.";
            updatePage();
        }
    }
}

//variable which gets the drop down menu container
var produceLocationOptions = null;

//adds event listener to drop down menu, this will be called when page loads
function addListeners() {
    produceLocationOptions = document.getElementById("produce-location-options");
    produceLocationOptions.addEventListener("change", showLocations);
}

window.addEventListener("load", addListeners);