var scoreboard = function (playerCount) {
    var playerCount = playerCount;

    this.initScoreboard = function () {
        document.getElementById('scoreboard').classList.remove('hide-element');
        document.getElementById('initialisingGame').classList.add('hide-element');
        for (var i=1; i<=playerCount; i++) {
            this.createRow(i);
        }
    };
    
    this.createRow = function (i) {
        var row = document.createElement('tr');
        row.id = 'player'+i+'Row';
        document.getElementById('scoreboardBody').appendChild(row);
        document.getElementById('player'+i+'Row').innerHTML = "<td>" + window['player'+i].name + "</td><td>" + window['player'+i].score + "</td>";
    };



    this.initScoreboard();

    console.log(playerCount);
};