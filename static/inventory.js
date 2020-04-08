var inventory = {
    balance: 10,
    items: [],
};

var buttons = document.getElementsByClassName("invButton");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", itemUse);
}

class Item {
    constructor(name, image, subtype, cost) {
        this.name = name;
        this.image = image;
        this.cost = cost;
        this.subtype = subtype;
        this.num = 1;
    }

    add() {
        this.num += 1;
    }

    use() {
        if (this.num > 1) this.num--;
        else {
            for (var i = 0; i < inventory.items.length; i++) {
                if (inventory.items[i] === this) {
                    inventory.items.splice(i,1);
                }
            }
        }
        updateInventory();
        updateDisplay();
    }
}

class Wood extends Item {
    constructor(name, image, subtype, cost, size, heat, brightness, smokiness) {
        super(name, image, subtype, cost);
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
    constructor(name, image, subtype, cost, brightness, colour) {
        super(name, image, subtype, cost);
        this.brightness = brightness;
        this.colour = colour;
    }

    add() {
        super.add();
    }

    use() {
        fire.brightness += this.brightness;
        fire.colour = this.colour;
        fire.colourTime = 6;
        super.use();
    }
}

class Structure extends Item {
    constructor(name, image, subtype, cost, protection) {
        super(name, image, subtype, cost);
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
    document.getElementById('balanceDisplay').innerHTML = "Sharp Rocks: " + inventory.balance.toString();
    var ids = ['Oak', 'Birch', 'Pine', 'Cesium', 'Copper', 'Sodium', 'Rubidium', 'Wall', 'Roof'];
    for (var i = 0; i < ids.length; i++) {
        //if (document.getElementById('inv'+ids[i]) != undefined) {
        document.getElementById('inv'+ids[i]).innerHTML = ids[i] + ' Remaining: 0'; 
        //} 
    }
    for (var i = 0; i < inventory.items.length; i++) {
        document.getElementById('inv'+inventory.items[i].name).innerHTML = inventory.items[i].name + ' Remaining: ' + inventory.items[i].num.toString();
    }
}

function itemUse(event) {
    var item = event.target.id.slice(3, event.target.id.length);
    for (var i = 0; i < inventory.items.length; i++) {
        if (inventory.items[i].name === item) {
            inventory.items[i].use();
        }
    }
}
