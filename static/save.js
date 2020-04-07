$('#createGame').click(function () {
    console.log('Button clicked');
    createGame();
});


function createGame() {
    $.ajax({
        type: 'POST',
        url: '/api/new',
        data: JSON.stringify(['test', 'fakegamestate']),
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.error(error);
        }
    });
}
