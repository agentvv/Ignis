var inventory = {
    balance: 10,
    items: [],
};

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
    var html = "";

    for (var i = 0; i < inventory.items.length; i++) {
        html += "<li><button class=\"invButton\" id=\"inv";
        html += inventory.items[i].name + "\">" + inventory.items[i].name;
        html += "</button><img style=\"width:100px;height:100px;\" src=\"";
        html += inventory.items[i].image;
        html += "\"/></li>";
    }
    
    document.getElementById("inventoryItems").innerHTML = html;
    
    var buttons = document.getElementsByClassName("invButton");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", itemUse);
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
