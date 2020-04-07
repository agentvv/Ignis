var inventory = {
    balance: 0,
    items: [],
};

class Item {
    constructor(name, image) {
        this.name = name;
        this.image = image;
        this.num = 1;
    }

    add() {
        this.num += 1;
    }

    use() {
        if (this.num > 1) this.num--;
        else {
            for (var i = 0; i < inventory.items.length; i++) {
                if (inventory.items[i] == this) {
                    inventory.items.splice(i,1);
                }
            }
        }
        updateInventory();
    }
}

class Wood extends Item {
    constructor(name, image, size, heat, brightness, smokiness) {
        super(name, image);
        this.size = size;
        this.heat = heat;
        this.brightness = brightness;
        this.smokiness = smokiness;
    }

    add() {
        super.add();
    }

    use() {
        fire.size += this.size;
        fire.heat += this.heat;
        fire.brightness += this.brightness;
        fire.smokiness += this.smokiness;
        super.use();
    }
}

class Metal extends Item {
    constructor(name, image, brightness, colour) {
        super(name, image);
        this.brightness = brightness;
        this.colour = colour;
    }

    add() {
        super.add();
    }

    use() {
        fire.brightness += this.brightness;
        fire.colour = this.colour;
        super.use();
    }
}

class Structure extends Item {
    constructor(name, image, protection) {
        super(name, image);
        this.protection = protection;
    }

    add() {
        super.add();
    }

    use() {
        fire.protection += this.protection;
        super.use();
    }
}

function updateInventory() {
    var html = "";

    for (var i = 0; i < inventory.items.length; i++) {
        html += "<li><button id=invButton";
        html += inventory.items[i].name + ">" + inventory.items[i].name;
        html += "</button><img style=\"width:100px;height:100px;\" src=\"";
        html += inventory.items[i].image;
        html += "\"/></li>";
        //if (i % 2 == 1) html += "</br>";
    }
    
    document.getElementById("inventoryItems").innerHTML = html;
}

$("#invButtonBirch_Wood").click(function() {
    for (var i = 0; i < inventory.items.length; i++) {
        if (inventory.items[i].name == "Birch_Wood") {
            inventory.items[i].use();
        }
    }
});

$("#invButtonPine_Wood").click(function() {
    for (var i = 0; i < inventory.items.length; i++) {
        if (inventory.items[i].name == "Pine_Wood") {
            inventory.items[i].use();
        }
    }
});

$("#invButtonOak_Wood").click(function() {
    for (var i = 0; i < inventory.items.length; i++) {
        if (inventory.items[i].name == "Oak_Wood") {
            inventory.items[i].use();
        }
    }
});

$("#invButtonCopper_Shard").click(function() {
    for (var i = 0; i < inventory.items.length; i++) {
        if (inventory.items[i].name == "Copper_Shard") {
            inventory.items[i].use();
        }
    }
});

$("#invButtonRubidium_Shard").click(function() {
    for (var i = 0; i < inventory.items.length; i++) {
        if (inventory.items[i].name == "Rubidium_Shard") {
            inventory.items[i].use();
        }
    }
});

$("#invButtonSodium_Shard").click(function() {
    for (var i = 0; i < inventory.items.length; i++) {
        if (inventory.items[i].name == "Sodium_Shard") {
            inventory.items[i].use();
        }
    }
});

$("#invButtonCesium_Shard").click(function() {
    for (var i = 0; i < inventory.items.length; i++) {
        if (inventory.items[i].name == "Cesium_Shard") {
            inventory.items[i].use();
        }
    }
});

$("#invButtonWall_Layer").click(function() {
    for (var i = 0; i < inventory.items.length; i++) {
        if (inventory.items[i].name == "Wall_Layer") {
            inventory.items[i].use();
        }
    }
});

$("#invButtonRoof_Layer").click(function() {
    for (var i = 0; i < inventory.items.length; i++) {
        if (inventory.items[i].name == "Roof_Layer") {
            inventory.items[i].use();
        }
    }
});
