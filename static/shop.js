var birch = new Wood("Birch_Wood", "static/images/birch.jpg", 100, 100, 100, 100);
var pine = new Wood("Pine_Wood", "static/images/pine.jpg", 50, 50, 50, 50);
var oak = new Wood("Oak_Wood", "static/images/pine.jpg", 50, 50, 50, 50);

var copper = new Metal("Copper_Shard", "static/images/copper.jpg", 50, 50);
var rubidium = new Metal("Rubidium_Shard", "static/images/rubidium.jpg", 50, 50);
var sodium = new Metal("Sodium_Shard", "static/images/sodium.jpg", 50, 50);
var cesium = new Metal("Cesium_Shard", "static/images/cesium.jpg", 50, 50);

var wall = new Metal("Wall_Layer", "static/images/wall.jpg", 50);
var roof = new Metal("Roof_Layer", "static/images/roof.jpg", 50);

var allItems = [birch, pine, oak, copper, rubidium, sodium, cesium, wall, roof];

function updateShop() {
    items = [birch, pine];
    
    var html = "";

    for (var i = 0; i < items.length; i++) {
        html += "<li><button class=\"shopButton\" id=\"";
        html += items[i].name + "\">" + items[i].name;
        html += "</button><img style=\"width:100px;height:100px;\" src=\"";
        html += items[i].image;
        html += "\"/></li>";
        //if (i % 2 == 1) html += "</br>";
    }
    
    document.getElementById("shopItems").innerHTML = html;
    
    var buttons = document.getElementsByClassName("shopButton");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", itemBuy);
    }
}

function itemBuy(event) {
    var item = event.target.id;
    for (var i = 0; i < allItems.length; i++) {

    }
}

$("#shopButtonBirch_Wood").click(function() {
    console.log("Here1");
    /*if (inventory.balance < 100) {
        console.log("Here2");
        alert("You don't have enough money to buy that");
    } else {
        console.log("Here3");
        var tmp;
        Object.assign(tmp, birch);
        inventory.items.push(tmp);
        inventory.balance -= 100;
        alert("Item bought");
    }*/
});

$("#shopButtonPine_Wood").click(function() {
    if (inventory.balance < 100) {
        alert("You don't have enough money to buy that");
    } else {
        var tmp;
        Object.assign(tmp, pine);
        inventory.items.push(tmp);
        inventory.balance -= 100;
        alert("Item bought");
    }
});

$("#shopButtonOak_Wood").click(function() {
    if (inventory.balance < 100) {
        alert("You don't have enough money to buy that");
    } else {
        var tmp;
        Object.assign(tmp, oak);
        inventory.items.push(tmp);
        inventory.balance -= 100;
        alert("Item bought");
    }
});

$("#shopButtonCopper_Shard").click(function() {
    if (inventory.balance < 100) {
        alert("You don't have enough money to buy that");
    } else {
        var tmp;
        Object.assign(tmp, copper);
        inventory.items.push(tmp);
        inventory.balance -= 100;
        alert("Item bought");
    }
});

$("#shopButtonRubidium_Shard").click(function() {
    if (inventory.balance < 100) {
        alert("You don't have enough money to buy that");
    } else {
        var tmp;
        Object.assign(tmp, rubidium);
        inventory.items.push(tmp);
        inventory.balance -= 100;
        alert("Item bought");
    }
});

$("#shopButtonSodium_Shard").click(function() {
    if (inventory.balance < 100) {
        alert("You don't have enough money to buy that");
    } else {
        var tmp;
        Object.assign(tmp, sodium);
        inventory.items.push(tmp);
        inventory.balance -= 100;
        alert("Item bought");
    }
});

$("#shopButtonCesium_Shard").click(function() {
    if (inventory.balance < 100) {
        alert("You don't have enough money to buy that");
    } else {
        var tmp;
        Object.assign(tmp, cesium);
        inventory.items.push(tmp);
        inventory.balance -= 100;
        alert("Item bought");
    }
});

$("#shopButtonWall_Layer").click(function() {
    if (inventory.balance < 100) {
        alert("You don't have enough money to buy that");
    } else {
        var tmp;
        Object.assign(tmp, wall);
        inventory.items.push(tmp);
        inventory.balance -= 100;
        alert("Item bought");
    }
});

$("#shopButtonRoof_Layer").click(function() {
    if (inventory.balance < 100) {
        alert("You don't have enough money to buy that");
    } else {
        var tmp;
        Object.assign(tmp, roof);
        inventory.items.push(tmp);
        inventory.balance -= 100;
        alert("Item bought");
    }
});
