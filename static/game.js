var gameID = 1

var fire = {
    size: 1000,
    heat: 1000,
    brightness: 1000,
    smokiness: 1000,
    protection: 0,
    colour: "Default",
    colourTime: 0,
};

function setGameDefaults() {
    fire = {
        size: 1000,
        heat: 1000,
        brightness: 1000,
        smokiness: 1000,
        protection: 0,
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
    fire.size -= getWeatherEffects();

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
    if (fire.size >= 10000) {
        alert("You Win");
        deleteGame();
        loadPage(0);
    } else if (fire.size <= 0) {
        alert("You Lose");
        deleteGame();
        loadPage(0);
    }

    if (fire.heat < 1) {
        fire.heat = 1;
    } else if (fire.heat > 10000) {
        alert("You have reached maximum heat");
        fire.heat = 10000;
    }

    if (fire.brightness < 1) {
        fire.brightness = 1;
    } else if (fire.brightness > 10000) {
        alert("You have reached maximum brightness");
        fire.brightness = 10000;
    }

    if (fire.smokiness < 1) {
        fire.smokiness = 1;
    } else if (fire.smokiness > 10000) {
        alert("You have reached maximum smokiness");
        fire.smokiness = 10000;
    }

    if (fire.protection > 10000) {
        alert("You have reached maximum protection");
        fire.protection = 10000;
    }

    
    var fireDisplay = document.getElementById("fire");

    var fireWidth = Math.round((fire.size/10000) * 200) + 50;
    var fireTop = Math.round((fire.size/10000) * (-200)) - 20;
    var fireLeft = Math.round((fire.size/10000) * (-100)) + 400;
    var bright = (fire.brightness / 10000) * 0.2 + 0.8;
    var smoke = (fire.smokiness / 10000) * 0.6 + 0.4;
    
    fireDisplay.style.width = fireWidth + "px";
    fireDisplay.style.marginTop = fireTop + "px";
    fireDisplay.style.marginLeft = fireLeft + "px";
    fireDisplay.style.opacity = bright;

    var smokeDisplay = document.getElementById("smoke");
    smokeDisplay.style.width = (fireWidth * 3) + "px";
    smokeDisplay.style.marginLeft = (fireLeft-(fireWidth * 2)/2) + "px";
    smokeDisplay.style.opacity = smoke;

    var neanderthalDisplay = document.getElementById("neanderthal");
    neanderthalDisplay.style.marginLeft = (300 - (fireWidth-75)/2) + "px";

    var pos = 56;
    var tmp = fireDisplay.innerHTML;
    if (fire.colour === "Default") {
        fireDisplay.innerHTML = tmp.slice(0, pos) + "0" + tmp.slice(pos+1, tmp.length);
    } else if (fire.colour === "Blue") {
        fireDisplay.innerHTML = tmp.slice(0, pos) + "1" + tmp.slice(pos+1, tmp.length);
    } else if (fire.colour === "Green") {
        fireDisplay.innerHTML = tmp.slice(0, pos) + "2" + tmp.slice(pos+1, tmp.length);
    } else if (fire.colour === "Red") {
        fireDisplay.innerHTML = tmp.slice(0, pos) + "3" + tmp.slice(pos+1, tmp.length);
    } else if (fire.colour === "Yellow") {
        fireDisplay.innerHTML = tmp.slice(0, pos) + "4" + tmp.slice(pos+1, tmp.length);
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

function deleteGame() {
    $.ajax({
        type: 'POST',
        url: '/api/delete',
        contentType: 'application/json',
        data: JSON.stringify(gameID),
        success: function() {
            console.log("Game deleted");
            fire = {
                size: 1000,
                heat: 1000,
                brightness: 1000,
                smokiness: 1000,
                protection: 0,
                colour: "Default",
            };
            inventory = {
                balance: 5,
                items: []
            };
            name = "";
        }, 
        error: function(error) {
            console.error(error);
        }
    });
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
        $(".goToItemInfo").click(function() {
            loadPage(6);
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
        $(".goToItemInfo").click(function() {
            loadPage(6);
        });
    }
}
