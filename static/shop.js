var birch = new Wood("Birch", "static/images/birchShop.jpg", "wood", 1, 25, 25, 50, 100);
var pine = new Wood("Pine", "static/images/pineShop.jpg", "wood", 1, 40, 40, 100, 20);
var oak = new Wood("Oak", "static/images/oakShop.jpg", "wood", 1, 75, 75, 25, 25);

var copper = new Metal("Copper", "static/images/copperShop.jpg", "metal", 2, 75, "Green");
var rubidium = new Metal("Rubidium", "static/images/rubidiumShop.jpg", "metal", 6, 600, "Red");
var sodium = new Metal("Sodium", "static/images/sodiumShop.jpg", "metal", 4, 250, "Yellow");
var cesium = new Metal("Cesium", "static/images/cesiumShop.jpg", "metal", 8, 1000, "Blue");

var wall = new Structure("Wall", "static/images/wallShop.jpg", "structure", 4, 200);
var roof = new Structure("Roof", "static/images/roofShop.jpg", "structure", 8, 500);

var allItems = [birch, pine, oak, copper, rubidium, sodium, cesium, wall, roof];

function updateShop() {
    document.getElementById('shopBalanceDisplay').innerHTML = "Sharp Rocks: " + inventory.balance.toString();
    items = [];
    for (var i = 0; i < 3; ) {
        var curr = Math.floor(Math.random() * 9);
        if (items.includes(allItems[curr])) continue;
        items.push(allItems[curr]);
        i++;
    }
    
    var html = "<tr class=\"shopRow\">";

    for (var i = 0; i < items.length; i++) {
        html += "<td style=\"text-align: center;\"><img style=\"width:100px;height:100px;\" src=\"";
        html += items[i].image;
        html += "\"/></td>";
    }

    html += "</tr><tr class=\"shopRow\">";

    for (var i = 0; i < items.length; i++) {
        html += "<td style=\"text-align: center;\"><button class=\"shopButton button\" id=\"shop";
        html += items[i].name + "\">" + items[i].name;
        html += "</button></td>";
    }

    html += "</tr>"
    
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
                        document.getElementById('shopBalanceDisplay').innerHTML = "Sharp Rocks: " + inventory.balance.toString();
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
                document.getElementById('shopBalanceDisplay').innerHTML = "Sharp Rocks: " + inventory.balance.toString();
                return;
            }
        }
    }
}
