var fire = {
    size: 1000,
    heat: 1000,
    brightness,
    smokiness,
    colour,
    protection
}

function tick() {
    if (document.getElementById("mainGame").style.display == "none")
        return;
    
    weatherEffects = getWeatherEffects();
    fire.size += 10 - weatherEffects[0];
    fire.heat += 10 - weatherEffects[1];
    
    updateBrightness();
    updateSmokiness();

    updateDisplay();
    return;
}
setInterval(tick, 10000);

function updateBrightness() {
    fire.brightness = .5 + (Math.floor(fire.heat/10)/1000)*0.5;
}

function updateSmokiness() {
    fire.smokiness = .1 + (Math.floor(fire.size/10)/1000)*0.7;
}

function updateDisplay() {
    console.log("size: " + fire.size + " and heat: " + fire.heat);
    //document.getElementById("fire").style.opacity = fire.brightness;
    //document.getElementById("smoke").style.opacity = fire.smokiness;
}
