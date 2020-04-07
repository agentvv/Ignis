var name = "";
$('#createGame').click(function () {
    console.log('Button clicked');
    name = document.getElementById('fireName').value;
    if (name != "" && remainingStatsGlobal == 0){
        var game = {
            name: name,
            fire: fire, 
            inventory: inventory, 
        }
        createGame(game);
        loadPage(1);
    } else {
        alert('Please enter a name for your fire or use the rest of your stats to create a fire.');
    }
});

function createGame(game) {
    $.ajax({
        type: 'POST',
        url: '/api/new',
        data: JSON.stringify(game),
        contentType: 'application/json',
        success: function (data) {
            data = JSON.parse(data);
            gameID = data;
            document.getElementById('fireName').value = "";
        },
        error: function (error) {
            console.error(error);
        }
    });
}

$('#loadGameButton').click(loadGames);
    
function loadGames() {
    $.ajax({
        type: 'GET', 
        url: '/api/all',
        success: function(data) {
            data = JSON.parse(data);
            var loadGameSelect = document.getElementById('loadGameSelect');
            var games = "";
            for (var i = 0; i < data.length; i++) {
                games += '<option value="' + data[i].id.toString() + '">' + data[i].name + '</option>';
            }
            loadGameSelect.innerHTML = games;
        },
        error: function (error) {
            console.error(error);
        }
    });
};

$('#saveExit').click(function() {
    saveGame();
});

function saveGame() {
    var game = {
        name: name,
        fire: fire, 
        inventory: inventory
    }
    var data = {
        id: gameID,
        game: game
    };
    $.ajax({
        type: 'POST',
        url: '/api/save',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(data) {
            console.log(data);
            fire = {
                size: 1000,
                heat: 1000,
                brightness: 1000,
                smokiness: 1000,
                protection: 1000,
                colour: "Default",
            };
            inventory = {
                balance: 10,
                items: []
            };
            name = "";
        }, 
        error: function(error) {
            console.error(error);
        }
    });
}

$('#loadGame').click(function () {
    options = document.getElementById('loadGameSelect');
    if (options[options.selectedIndex] != undefined) {
        selectedOption = options[options.selectedIndex].value;
        loadSelectedGame(selectedOption);
        loadPage(1);
    }
});

function loadSelectedGame(option) {
    $.ajax({
        type: 'POST', 
        url: '/api/load', 
        contentType: 'application/json', 
        data: JSON.stringify(option), 
        success: function (data) {
            console.log(data);
            gameID = parseInt(option);
            fire = data['fire'];
            name = data['name'];
            inventory = data['inventory'];
        }, 
        error: function (error) {
            console.error(error);
        }
    })
}