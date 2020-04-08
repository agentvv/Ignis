var ticksSince = 0;

function neanderthal() {
    var rnd = Math.random() * 100;
    var speedFactor = fire.brightness + fire.smokiness;
    if ((ticksSince * 10 * (speedFactor/10000)) > rnd) {
        displayNeanderthal();
    } else {
        ticksSince += 1;
    }
}

function displayNeanderthal() {
    var neanderthalDisplay = document.getElementById("neanderthal");
    neanderthalDisplay.style.display = "block"

    setTimeout(function(){
        var sizeChange = Math.floor(0.05 * fire.size);
        fire.size -= sizeChange;
        var balanceChange = Math.ceil(sizeChange/100 * (fire.heat/1000))
        if (fire.colour != "Default") {
            balanceChange *= 2;
        }
        inventory.balance += balanceChange;
        
        ticksSince = 0;
        neanderthalDisplay.style.display = "none"
        updateDisplay();
    }, 5000);
}
