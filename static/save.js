$('#createGame').click(function () {
    console.log('Button clicked');
    name = document.getElementById('fireName').value;
    if (name != "" && remainingStats == 0){
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
            console.log(data);
        },
        error: function (error) {
            console.error(error);
        }
    });
}


$('#loadGameButton').click(loadGames);
    
function loadGames() {
    console.log('Load game');
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