var ticksSince = 0;

function neanderthal() {
    var rnd = Math.random() * 100;
    var speedFactor = fire.brightness + fire.smokiness;
    if ((ticksSince * 10 * (speedFactor/10000)) > rnd) {
        var sizeChange = Math.floor(0.05 * fire.size);
        fire.size -= sizeChange;
        var balanceChange = Math.floor(sizeChange/100 * (fire.heat/1000))
        if (fire.colour != "Default") {
            balaanceChange *= 2;
        }
        inventory.balance += balanceChange;
        ticksSince = 0;
        displayNeanderthal();
    } else {
        ticksSince += 1;
    }
}

function displayNeanderthal() {
    //var neanderthalDisplay = document.getElementById("neanderthal");
    //neanderthalDisplay.style.display = "block"
    console.log("Displaying Neanderthal");

    setTimeout(function(){
        console.log("Finished Displaying Neanderthal");
        //neanderthalDisplay.style.display = "none"
    }, 5000);
}
