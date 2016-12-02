function game() {
    var maxPlayers = 6;
    var amountOfPlayersChosen = 1;
    var playerToBeNamed = '';
    var listOfPlayers = {};

    this.initPlayers = function () {
        amountOfPlayersChosen = document.getElementById('amountOfPlayersChosen').value || 1;
        if (amountOfPlayersChosen >= maxPlayers) {
            amountOfPlayersChosen = maxPlayers;
        }
        for (var i=1; i<=parseInt(amountOfPlayersChosen); i++) {
            listOfPlayers['player'+i] = new player(i);
        }
        this.displayNextPlayerToBeNamed();
    };

    this.displayNextPlayerToBeNamed = function () {
        document.getElementById('startGame').classList.remove('active-view');
        document.getElementById('namePlayers').classList.add('active-view');
        var stop = false;
        for (var i=1; i<=parseInt(amountOfPlayersChosen); i++) {
            if (listOfPlayers['player'+i].name == '' && !stop) {
                document.getElementById('playerToName').innerHTML = 'Player ' + i;
                playerToBeNamed = listOfPlayers['player'+i];
                stop = true;
            } else if (i==parseInt(amountOfPlayersChosen) && !stop) {
                document.getElementById('showScoreboard').classList.remove('hide-element');
            }
            this.listAllPlayers();
        }
    };

    this.listAllPlayers = function () {
        for (var i=1; i<=parseInt(amountOfPlayersChosen); i++) {
            if (listOfPlayers['player'+i].name != '' && (document.getElementById('player'+i+'ListName') == null)) {
                document.getElementById('playerNameAdded').innerHTML = 'Player ' + listOfPlayers['player'+i].name + ' added!';
                var el = document.createElement('p');
                el.id = 'player'+i+'ListName';
                document.getElementById('listOfPlayers').appendChild(el);
                document.getElementById('player'+i+'ListName').innerHTML = listOfPlayers['player'+i].name;
            }
        }
    };

    this.nameNextPlayer = function () {
        playerToBeNamed.addName();
        this.displayNextPlayerToBeNamed()
    };

    this.createScoreboard = function () {
        scoreboard = new scoreboard(amountOfPlayersChosen, listOfPlayers);
    };
};