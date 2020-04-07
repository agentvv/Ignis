var ticksSince = 0;

function neanderthal() {
    console.log("Here1");
    var rnd = Math.random * 100;
    var speedFactor = fire.brightness + fire.smokiness;
    if ((ticksSince * 10 * (speedFactor/20000)) > rnd) {
        console.log("Here2");
        var sizeChange = Math.floor(0.05 * fire.size);
        fire.size -= sizeChange;
        var balanceChange = Math.floor(sizeChange/100 * (fire.heat/1000))
        if (fire.colour != "Default") {
            balaanceChange *= 2;
        }
        inventory.balance += balanceChange;
        ticksSince = 0;
    } else {
        console.log("Here3");
        ticksSince += 1;
    }
}
