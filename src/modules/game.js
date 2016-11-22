var game = function () {

    players = {};

    this.createPlayers = function () {
        var amountOfPlayers = document.getElementById('playerAmount').value;
        for (var i=0; i<amountOfPlayers; i++) {
            players['player'+(i+1).toString()] = new player();
        };
        console.log(players)
        this.playersWithNoName();
    };

    this.playersWithNoName = function () {
        var stop = false;
        Object.keys(players).map(function (key, index) {
            if (players[key].name == "" && !stop) {
                document.getElementById('playerBeingNamed').innerHTML = key.toString();
                stop = true;
            };
        });
    };

    this.namePlayers = function () {
        var stop = false;
        Object.keys(players).map(function (key, index) {
            if (players[key].name == "" && document.getElementById('playerName').value != '' && !stop) {
                players[key].addName(document.getElementById('playerName').value);
                document.getElementById('playerName').value = '';
                stop = true;
            };
        });
        this.playersWithNoName();
    };

};