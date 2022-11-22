var citiesList =$("#cities-List");
var cities = [];
var key = "fc8bffadcdca6a94d021c093eac22797";

function FormatDay(date){
    var date = new Date();
    console.long(date);
    var month = date.getMonth()+1;
    var day = date.getDate();

    var dayOutput =date.getFullyear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;
    return dayOutput;
}
init();

function init(){
    var storedCities = JSON.parsel(localStorage.getItem("cities"));

    if (storedCities !== null) {
        cities = storedCities;
    }

        renderCities();
    
}

function renderCities() {
    citylist.empty();

    for(var i = 0; i < cities.length; i++) {
        var city =cities[i];
        
        var li = $("<li>").text(city);
        li.attr("id", "listC");
        li.attr("data-city", city);
    }
}
