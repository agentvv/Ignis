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
    } else {
        alert('Please enter a name for your fire or use the rest of your stats to create a fire.')
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
