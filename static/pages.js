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
});

$(".goToInventory").click(function() {
    loadPage(5);
});

$(".goToItemInfo").click(function() {
    loadPage(6);
});

$('#aboutPageButton').click(function () {
    loadPage(7);
});

function loadPage(page) {
    if (page == 0) {
        document.getElementById("mainMenu").style.display = "flex";
    } else {
        document.getElementById("mainMenu").style.display = "none";
    }
    if (page == 1) {
        document.getElementById("mainScreenWrapper").style.display = "block";
        updateDisplay();
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
        updateShop();
    } else {
        document.getElementById("shopScreen").style.display = "none";
    }
    if (page == 5) {
        document.getElementById("inventoryScreen").style.display = "block";
        updateInventory();
    } else {
        document.getElementById("inventoryScreen").style.display = "none";
    }
    if (page == 6) {
        document.getElementById("itemInfoScreen").style.display = "block";
    } else {
        document.getElementById("itemInfoScreen").style.display = "none";
    }
    if (page == 7) {
        document.getElementById("aboutPage").style.display = "block";
    } else {
        document.getElementById("aboutPage").style.display = "none";
    }
}

$(".exit").click(function() {
    window.location.href = "https://www.jotform.com/62425974782164";
});


var remainingStatsGlobal = 15;

function newGame() {
    setGameDefaults();
    var heat = 1000;
    var brightness = 1000;
    var smokiness = 1000;
    var protection = 0;
    var remainingStats = 2000;
    var p = 100;
    var remainingStatsDisplay = document.getElementById('statsRemaining');
    var heatDisplay = document.getElementById('startHeat');
    var brightDisplay = document.getElementById('startBright');
    var smokeDisplay = document.getElementById('startSmoke');
    var protectDisplay = document.getElementById('startProtect');

    updateRemainingDisplay();

    document.getElementById('heatInc').addEventListener('click', incHeat);
    function incHeat() {
        if (remainingStats > 0) {
            remainingStats -= p;
            heat += p;
            updateRemainingDisplay();
        }
    }
    document.getElementById('heatDec').addEventListener('click', decHeat);
    function decHeat() {
        if (fire.heat > 1000) {
            remainingStats += p;  
            heat -= p;
            updateRemainingDisplay();
        }
    }

    document.getElementById('brightInc').addEventListener('click', incBright);
    function incBright() {
        if (remainingStats > 0) {
            remainingStats -= p;
            brightness += p;
            updateRemainingDisplay();
        }
    }
    document.getElementById('brightDec').addEventListener('click', decBright);
    function decBright() {
        if (fire.brightness > 1000) {
            remainingStats += p;
            brightness -= p;
            updateRemainingDisplay();
        }
    }

    document.getElementById('smokeInc').addEventListener('click', incSmoke);
    function incSmoke() {
        if (remainingStats > 0) {
            remainingStats -= p;
            smokiness += p;
            updateRemainingDisplay();
        }
    }
    document.getElementById('smokeDec').addEventListener('click', decSmoke);
    function decSmoke() {
        if (fire.smokiness > 1000) {
            remainingStats += p;
            smokiness -= p;
            updateRemainingDisplay();    
        }
        
    }

    document.getElementById('protectInc').addEventListener('click', incProtect);
    function incProtect() {
        if (remainingStats > 0) {
            remainingStats -= p;
            protection += p;
            updateRemainingDisplay();
        }
    }
    document.getElementById('protectDec').addEventListener('click', decProtect);
    function decProtect() {
        if (fire.protection > 0) {
            remainingStats += p;
            protection -= p;
            updateRemainingDisplay();
        }
    }


    function updateRemainingDisplay() {
        remainingStatsDisplay.innerHTML = "Stats Remaining: " + remainingStats.toString();
        heatDisplay.innerHTML = heat.toString();
        brightDisplay.innerHTML = brightness.toString();
        smokeDisplay.innerHTML = smokiness.toString();
        protectDisplay.innerHTML = protection.toString();
        fire.heat = heat;
        fire.brightness = brightness;
        fire.smokiness = smokiness;
        fire.protection = protection;
        remainingStatsGlobal = remainingStats;
    }
    
}
