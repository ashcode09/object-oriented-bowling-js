var scoreboard = function (playerCount) {
    var playerCount = playerCount;
    var columnCount = 10;

    this.initScoreboard = function () {
        document.getElementById('scoreboard').classList.remove('hide-element');
        document.getElementById('initialisingGame').classList.add('hide-element');
        for (var i=1; i<=playerCount; i++) {
            this.createRow(i);
        }
    };
    
    this.createRow = function (i) {
        var idOfNewRow = 'player'+i+'Row';
        this.createElement('tr', idOfNewRow, '', 'scoreboardBody', '');
        this.createElement('td', 'nameColumn'+i, '', idOfNewRow, window['player'+i].name);
        for (var j=1; j<=columnCount; j++) {
            this.createElement('td', '', 'column'+j, idOfNewRow, '');
        }
        this.createElement('td', 'scoreColumn'+i, '', idOfNewRow, window['player'+i].score);

        // var scoreColumn = document.createElement('td');
        // scoreColumn.id = 'scoreColumn'+i;
        // document.getElementById(idOfNewRow).appendChild(scoreColumn);
        // document.getElementById('scoreColumn'+i).innerHTML = window['player'+i].score;


    };
    
    this.createElement = function (elementType, elementId, elementClassList, idOflementToAppendChildTo, valueToPlaceInNewElement) {
        var element = document.createElement(elementType);
        element.id = elementId;
        element.classList = elementClassList;
        document.getElementById(idOflementToAppendChildTo).appendChild(element);
        if (elementId.length > 0) {
            document.getElementById(elementId).innerHTML = valueToPlaceInNewElement;
        }
    };


    this.initScoreboard();

    console.log(playerCount);
};