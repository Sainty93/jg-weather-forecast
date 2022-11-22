var citiesList =$("#cities-List");
var cities = [];
var key = "3a2493c4f39f5c2c8541cb7f8707351f";

function FormatDay(date){
    var date = new Date();1
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

function storeCities() {
    
localStorage.setItem("cities",JSON.stringify(cities));
console.log(localStorage);

}

function renderCities() {
    cityList.empty();
}    

    for(var i = 0; i < cities.length; i++) {
        var city =cities[i];
        
        var li = $("<li>").text(city);
        li.attr("id", "listC");
        li.attr("data-city", city);
        li.attr("class" , "list-group-item");
        console.log(li);
        cityList.prepend(li);
    }

if (!city){
    return          
}
else {
    getResponseWeather(city)
};

