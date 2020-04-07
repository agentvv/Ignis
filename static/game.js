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

    updateDisplay();
    return;
}
setInterval(tick, 10000);

function updateDisplay() {
    console.log("size: " + fire.size + " and heat: " + fire.heat);
    console.log(currentWeather);
    //document.getElementById("fire").style.opacity = fire.brightness;
    //document.getElementById("smoke").style.opacity = fire.smokiness;
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
