var game = function () {
    var maxPlayers = 6;
    var amountOfPlayersChosen = 1;
    this.playerToBeNamed = '';

    this.initPlayers = function () {
        amountOfPlayersChosen = document.getElementById('amountOfPlayersChosen').value || 1;
        if (amountOfPlayersChosen >= maxPlayers) {
            amountOfPlayersChosen = maxPlayers;
        }
        for (var i=1; i<=parseInt(amountOfPlayersChosen); i++) {
            window['player'+i] = new player();
        }
        this.displayNextPlayerToBeNamed();
    };

    this.displayNextPlayerToBeNamed = function () {
        document.getElementById('startGame').classList.remove('active-view');
        document.getElementById('namePlayers').classList.add('active-view');
        var stop = false;
        for (var i=1; i<=parseInt(amountOfPlayersChosen); i++) {
            console.log('player' + i, window['player'+i].name == '');
            if (window['player'+i].name == '' && !stop) {
                document.getElementById('playerToName').innerHTML = 'Player ' + i;
                this.playerToBeNamed = window['player'+i];
                stop = true;
            } else if (i==parseInt(amountOfPlayersChosen) && !stop) {
                console.log('All players have names now')
                document.getElementById('showScoreboard').classList.remove('hide-element');
            }
            this.listAllPlayers();
        }
    };

    this.listAllPlayers = function () {
        for (var i=1; i<=parseInt(amountOfPlayersChosen); i++) {
            if (window['player'+i].name != '' && (document.getElementById('player'+i+'ListName') == null)) {
                console.log(window['player'+i])
                document.getElementById('playerNameAdded').innerHTML = 'Player ' + window['player'+i].name + ' added!';
                var el = document.createElement('p');
                el.id = 'player'+i+'ListName';
                document.getElementById('listOfPlayers').appendChild(el);
                document.getElementById('player'+i+'ListName').innerHTML = window['player'+i].name;
            }
        }
    };




    this.initPlayers();
};