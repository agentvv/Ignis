var birch = new Wood("Birch_Wood", "static/images/birch.jpg", "wood", 1, 100, 100, 100, 100);
var pine = new Wood("Pine_Wood", "static/images/pine.jpg", "wood", 1, 50, 50, 50, 50);
var oak = new Wood("Oak_Wood", "static/images/oak.jpg", "wood", 1, 50, 50, 50, 50);

var copper = new Metal("Copper_Shard", "static/images/copper.jpg", "metal", 1, 50, "Green");
var rubidium = new Metal("Rubidium_Shard", "static/images/rubidium.jpg", "metal", 1, 50, "Red");
var sodium = new Metal("Sodium_Shard", "static/images/sodium.jpg", "metal", 1, 50, "Yellow");
var cesium = new Metal("Cesium_Shard", "static/images/cesium.jpg", "metal", 1, 50, "Blue");

var wall = new Structure("Wall_Layer", "static/images/wall.jpg", "structure", 1, 50);
var roof = new Structure("Roof_Layer", "static/images/roof.jpg", "structure", 1, 50);

var allItems = [birch, pine, oak, copper, rubidium, sodium, cesium, wall, roof];

function updateShop() {
    items = [];
    for (var i = 0; i < 3; ) {
        var curr = Math.floor(Math.random() * 9);
        if (items.includes(allItems[curr])) continue;
        items.push(allItems[curr]);
        i++;
    }
    
    var html = "";

    for (var i = 0; i < items.length; i++) {
        html += "<li><button class=\"shopButton\" id=\"shop";
        html += items[i].name + "\">" + items[i].name;
        html += "</button><img style=\"width:100px;height:100px;\" src=\"";
        html += items[i].image;
        html += "\"/></li>";
    }
    
    document.getElementById("shopItems").innerHTML = html;
    
    var buttons = document.getElementsByClassName("shopButton");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", itemBuy);
    }
}

function itemBuy(event) {
    var item = (event.target.id).slice(4, event.target.id.length);
    for (var i = 0; i < allItems.length; i++) {
        if (allItems[i].name === item) {
            console.log(allItems[i].name)
            console.log(item)
            console.log(allItems[i].name === item)
            if (inventory.balance < allItems[i].cost) {
                alert("You don't have enough sharp rocks to buy that");
                return;
            } else {
                for (var j = 0; j < inventory.items.length; j++) {
                    if (inventory.items[j].name === item) {
                        inventory.items[j].add();
                        inventory.balance -= allItems[i].cost;
                        updateInventory();
                        alert("Item bought");
                        return;
                    }
                }
                var tmp = {};
                if (allItems[i].subtype === "wood") tmp = new Wood();
                else if (allItems[i].subtype === "metal") tmp = new Metal();
                else if (allItems[i].subtype === "structure") tmp = new Structure();
                
                Object.assign(tmp, allItems[i]);
                inventory.items.push(tmp);
                inventory.balance -= allItems[i].cost;
                updateInventory();
                alert("Item bought");
                return;
            }
        }
    }
}
