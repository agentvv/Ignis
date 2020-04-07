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

function loadPage(page) {
    if (page == 0) {
        document.getElementById("mainMenu").style.display = "block";
    } else {
        document.getElementById("mainMenu").style.display = "none";
    }
    if (page == 1) {
        document.getElementById("mainGame").style.display = "block";
    } else {
        document.getElementById("mainGame").style.display = "none";
    }
    if (page == 2) {
        document.getElementById("gameCreater").style.display = "block";
    } else {
        document.getElementById("gameCreater").style.display = "none";
    }
    if (page == 3) {
        document.getElementById("gameLoader").style.display = "block";
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
    window.location.href = "http://www.google.com";
});
