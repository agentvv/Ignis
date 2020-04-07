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

class Metals extends Item {
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

    
    
    document.getElementById("inventoryItems").innerHTML = html;
}
