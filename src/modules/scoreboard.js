function scoreboard(playerCount, listOfPlayers) {
    var columnCount = 10;
    var currentRoll = 1;
    var playerToPlay;
    var scoreboardTable = document.getElementById('scoreboard');
    var initialView = document.getElementById('initialisingGame');

    this.initScoreboard = function () {
        scoreboardTable.classList.remove('hide-element');
        initialView.classList.add('hide-element');
        for (var i=1; i<=playerCount; i++) {
            this.createRow(i);
        }
        this.whosTurnIsIt();
    };
    
    this.createRow = function (i) {
        var idOfNewRow = 'player'+i+'Row';
        this.createElement('tr', idOfNewRow, '', 'scoreboardBody', '');
        this.createElement('td', 'nameColumn'+i, '', idOfNewRow, listOfPlayers['player'+i].name);
        for (var j=1; j<=columnCount; j++) {
            this.createElement('td', '', 'column'+j, idOfNewRow, '');
        }
        this.createElement('td', 'scoreColumn'+i, '', idOfNewRow, listOfPlayers['player'+i].score);
    };
    
    this.createElement = function (elementType, elementId, elementClassList, idOfElementToAppendChildTo, valueToPlaceInNewElement) {
        var element = document.createElement(elementType);
        element.id = elementId;
        element.classList = elementClassList;
        document.getElementById(idOfElementToAppendChildTo).appendChild(element);
        if (elementId.length > 0) {
            document.getElementById(elementId).innerHTML = valueToPlaceInNewElement;
        }
    };

    this.whosTurnIsIt = function () {
        var stop = false;
        for (var i=1; i<=playerCount; i++) {
            if (!stop) {
                if (listOfPlayers['player'+i].rolls[currentRoll] == undefined) {
                    playerToPlay = listOfPlayers['player'+i];
                    stop = true;
                } else if (i == playerCount) {
                    playerToPlay = listOfPlayers['player1'];
                    currentRoll = currentRoll + 1;
                    stop = true;
                }
                document.getElementById('itIsYourGo').classList.remove('hide-element')
                document.getElementById('playerNameItIsYourGo').innerHTML = playerToPlay.name;
            }
        }
    };

    this.recordPlayersRoll = function (pinsKnockedOver) {
        playerToPlay.rolls[currentRoll] = pinsKnockedOver;
        console.log(playerToPlay);
        console.log(document.getElementById('player' + playerToPlay.orderInPlayerList + 'Row').children)
        var columnsInPlayerRow = Array.prototype.slice.call(document.getElementById('player' + playerToPlay.orderInPlayerList + 'Row').children);
        var stop = false;
        for (var i=0; i<columnsInPlayerRow.length; i++) {
            classListOfChild = Array.prototype.slice.call(columnsInPlayerRow[i].classList);
            if (!stop && classListOfChild.indexOf('column' + currentRoll) > -1) {
                columnsInPlayerRow[i].innerHTML = pinsKnockedOver;
                stop = true;

            }
        }
        this.whosTurnIsIt();
    };

    this.initScoreboard();
};