$(".newGame").click(function() {
    loadPage(2);
});

$(".loadGame").click(function() {
    loadPage(3);
});

$(".goToMain").click(function() {
    loadPage(0);
});

$(".goToGame").click(function() {
    loadPage(1);
});

$(".goToShop").click(function() {
    loadPage(4);
    updateShop();
});

$(".goToInventory").click(function() {
    loadPage(5);
});

function loadPage(page) {
    if (page == 0) {
        document.getElementById("mainMenu").style.display = "flex";
    } else {
        document.getElementById("mainMenu").style.display = "none";
    }
    if (page == 1) {
        document.getElementById("mainScreenWrapper").style.display = "block";
    } else {
        document.getElementById("mainScreenWrapper").style.display = "none";
    }
    if (page == 2) {
        document.getElementById("gameCreater").style.display = "flex";
        newGame();
    } else {
        document.getElementById("gameCreater").style.display = "none";
    }
    if (page == 3) {
        document.getElementById("gameLoader").style.display = "flex";
    } else {
        document.getElementById("gameLoader").style.display = "none";
    }
    if (page == 4) {
        document.getElementById("shopScreen").style.display = "block";
    } else {
        document.getElementById("shopScreen").style.display = "none";
    }
    if (page == 5) {
        document.getElementById("inventoryScreen").style.display = "block";
    } else {
        document.getElementById("inventoryScreen").style.display = "none";
    }
}

$(".exit").click(function() {
    window.location.href = "https://www.jotform.com/62425974782164";
});


var remainingStats = 15;

function newGame() {
    var remainingStatsDisplay = document.getElementById('statsRemaining');
    var heatDisplay = document.getElementById('startHeat');
    var brightDisplay = document.getElementById('startBright');
    var smokeDisplay = document.getElementById('startSmoke');
    var protectDisplay = document.getElementById('startProtect');
    const minHeat = fire.heat;
    const minBright = fire.brightness;
    const minProtect = fire.protection;
    const minSmoke = fire.smokiness;

    updateRemainingDisplay();

    document.getElementById('heatInc').addEventListener('click', incHeat);
    function incHeat() {
        if (remainingStats > 0) {
            remainingStats--;
            fire.heat++;
            updateRemainingDisplay()
        }
    }
    document.getElementById('heatDec').addEventListener('click', decHeat);
    function decHeat() {
        if (fire.heat > minHeat) {
            remainingStats++;  
            fire.heat--;
            updateRemainingDisplay()
        }
    });

    document.getElementById('brightInc').addEventListener('click', incBright);
    function() {
        if (remainingStats > 0) {
            remainingStats--;
            fire.brightness++;
            updateRemainingDisplay()
        }
    });
    $('#brightDec').click(function() {
        if (fire.brightness > minBright) {
            remainingStats++;
            fire.brightness--;
            updateRemainingDisplay()
        }
    });

    $('#smokeInc').click(function() {
        if (remainingStats > 0) {
            remainingStats--;
            fire.smokiness++;
            updateRemainingDisplay()
        }
    });
    $('#smokeDec').click(function() {
        if (fire.smokiness > minHeat) {
            remainingStats++;
            fire.smokiness--;
            updateRemainingDisplay()    
        }
        
    });

    $('#protectInc').click(function() {
        if (remainingStats > 0) {
            remainingStats--;
            fire.protection++;
            updateRemainingDisplay()
        }
    });
    $('#protectDec').click(function() {
        if (fire.protection > minProtect) {
            remainingStats++;
            fire.protection--;
            updateRemainingDisplay()
        }
    });


    function updateRemainingDisplay() {
        remainingStatsDisplay.innerHTML = "Stats Remaining: " + remainingStats.toString();
        heatDisplay.innerHTML = fire.heat.toString();
        brightDisplay.innerHTML = fire.brightness.toString();
        smokeDisplay.innerHTML = fire.smokiness.toString();
        protectDisplay.innerHTML = fire.protection.toString();
    }
    
}
