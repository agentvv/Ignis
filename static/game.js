var gameID = 1

var fire = {
    size: 1000,
    heat: 1000,
    brightness: 1000,
    smokiness: 1000,
    protection: 1000,
    colour: "Default",
    colourTime: 0,
};

function setGameDefaults() {
    fire = {
        size: 1000,
        heat: 1000,
        brightness: 1000,
        smokiness: 1000,
        protection: 1000,
        colour: "Default",
        colourTime: 0,
    };
    inventory = {
        balance: 10,
        items: []
    }
}

function tick() {
    if (document.getElementById("mainScreenWrapper").style.display == "none")
        return;

    updateWeather();
    weatherEffects = getWeatherEffects();
    fire.size += 10 - weatherEffects[0];
    fire.heat += 10 - weatherEffects[1];

    if (fire.colour !== "Default") {
        fire.colourTime--;
        if (fire.colourTime == 0) {
            fire.colour = "Default";
        }
    }

    neanderthal();

    updateDisplay();
    return;
}
setInterval(tick, 10000);

function updateDisplay() {
    //console.log("size: " + fire.size + " and heat: " + fire.heat);
    //console.log(currentWeather);

    var fireDisplay = document.getElementById("fire");

    var fireWidth = Math.round((fire.size/10000) * 200) + 50;
    var fireTop = Math.round((fire.size/10000) * (-200)) - 20;
    var fireLeft = Math.round((fire.size/10000) * (-100)) + 400;
    var bright = (fire.brightness / 10000) * 0.5 + 0.5;
    var smoke = (fire.smokiness / 10000) * 0.8 + 0.1;

    console.log(fireWidth);
    console.log(fireWidth + "px");
    console.log(fireTop);
    console.log(fireTop + "px");
    console.log(fireLeft);
    console.log(fireLeft + "px");
    
    fireDisplay.style.width = fireWidth + "px";
    fireDisplay.style.marginTop = fireTop + "px";
    fireDisplay.style.marginLeft = fireLeft + "px";
    //fireDisplay.style.opacity = bright;
    //document.getElementById("smoke").style.opacity = smoke;

    var pos = 20;
    //var tmp = fireDisplay.innerHTML;
    if (fire.colour === "Default") {
        //fireDisplay.innerHTML = tmp.slice(0, pos) + "0" + tmp.slice(pos+1, tmp.length);
    } else if (fire.colour === "Blue") {
        //fireDisplay.innerHTML = tmp.slice(0, pos) + "1" + tmp.slice(pos+1, tmp.length);
    } else if (fire.colour === "Green") {
        //fireDisplay.innerHTML = tmp.slice(0, pos) + "2" + tmp.slice(pos+1, tmp.length);
    } else if (fire.colour === "Red") {
        //fireDisplay.innerHTML = tmp.slice(0, pos) + "3" + tmp.slice(pos+1, tmp.length);
    } else if (fire.colour === "Yellow") {
        //fireDisplay.innerHTML = tmp.slice(0, pos) + "4" + tmp.slice(pos+1, tmp.length);
    }

    document.getElementById("sizeStat").innerHTML = "Size: " + fire.size;
    document.getElementById("heatStat").innerHTML = "Heat: " + fire.heat;
    document.getElementById("brightStat").innerHTML = "Brightness: " + fire.brightness;
    document.getElementById("smokeStat").innerHTML = "Smokiness: " + fire.smokiness;
    document.getElementById("protectionStat").innerHTML = "Protection: " + fire.protection;

    
    var str = currentWeather.temp.toFixed(2);
    var i = str.length-1;
    for (; i > 0; i--) {
        if (str[i] === ".") {
            break;
        } else if (str[i] !== "0") {
            i++;
            break;
        } 
    }
    document.getElementById("tempStat").innerHTML = "Temperature: " + str.slice(0, i);

    str = currentWeather.humidity.toFixed(2);
    i = str.length-1;
    for (; i > 0; i--) {
        if (str[i] === ".") {
            break;
        } else if (str[i] !== "0") {
            i++;
            break;
        } 
    }
    document.getElementById("humidityStat").innerHTML = "Humidity: " + str.slice(0, i);
    
    str = currentWeather.wind.toFixed(2);
    i = str.length-1;
    for (; i > 0; i--) {
        if (str[i] === ".") {
            break;
        } else if (str[i] !== "0") {
            i++;
            break;
        } 
    }
    document.getElementById("windStat").innerHTML = "Wind Speed: " + str.slice(0, i);
    document.getElementById("weatherTypeStat").innerHTML = "Weather Type: " + currentWeather.type;
}

var backgnd = 'hill'

document.getElementById('toggleBackground').addEventListener('click', toggleBackground);

function toggleBackground(){
    if (backgnd == 'hill') {
        var backgroundnum = document.getElementById('mainScreenWrapper').innerHTML;
        var newHTML = backgroundnum.slice(0, 61+25) + '2' + backgroundnum.slice(61+26, backgroundnum.length);
        document.getElementById('mainScreenWrapper').innerHTML = newHTML;
        backgnd = '';
        document.getElementById('toggleBackground').addEventListener('click', toggleBackground);
        $(".goToShop").click(function() {
            loadPage(4);
            updateShop();
        });
        
        $(".goToInventory").click(function() {
            loadPage(5);
        });
        $(".goToMain").click(function() {
            loadPage(0);
        });
        $('#saveExit').click(function() {
            saveGame();
        });
    } else {
        var backgroundnum = document.getElementById('mainScreenWrapper').innerHTML;
        var newHTML = backgroundnum.slice(0, 61+25) + '1' + backgroundnum.slice(61+26, backgroundnum.length);
        document.getElementById('mainScreenWrapper').innerHTML = newHTML;
        backgnd = 'hill';
        document.getElementById('toggleBackground').addEventListener('click', toggleBackground);
        $(".goToShop").click(function() {
            loadPage(4);
            updateShop();
        });
        
        $(".goToInventory").click(function() {
            loadPage(5);
        });
        $(".goToMain").click(function() {
            loadPage(0);
        });
        $('#saveExit').click(function() {
            saveGame();
        });
    }
}
