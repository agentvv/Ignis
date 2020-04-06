$(".newGame").click(function() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("mainGame").style.display = "none";
    document.getElementById("gameCreater").style.display = "block";
    document.getElementById("gameLoader").style.display = "none";
    document.getElementById("shop").style.display = "none";
});

$(".loadGame").click(function() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("mainGame").style.display = "none";
    document.getElementById("gameCreater").style.display = "none";
    document.getElementById("gameLoader").style.display = "block";
    document.getElementById("shop").style.display = "none";
});

$(".exit").click(function() {
    window.location.href = "http://www.google.com";
});

$(".goToMain").click(function() {
    document.getElementById("mainMenu").style.display = "block";
    document.getElementById("mainGame").style.display = "none";
    document.getElementById("gameCreater").style.display = "none";
    document.getElementById("gameLoader").style.display = "none";
    document.getElementById("shop").style.display = "none";
});

$(".goToGame").click(function() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("mainGame").style.display = "block";
    document.getElementById("gameCreater").style.display = "none";
    document.getElementById("gameLoader").style.display = "none";
    document.getElementById("shop").style.display = "none";
});

$(".goToShop").click(function() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("mainGame").style.display = "none";
    document.getElementById("gameCreater").style.display = "none";
    document.getElementById("gameLoader").style.display = "none";
    document.getElementById("shop").style.display = "block";
});
