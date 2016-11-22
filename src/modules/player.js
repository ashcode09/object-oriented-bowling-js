var player = function () {
    this.name = '';
    this.rolls = [];
    this.score = 0;

    this.addName = function () {
        this.name = document.getElementById('playerName').value;
        document.getElementById('playerName').value = '';
    };

    this.updateScore = function (newScore) {
        this.score = newScore;
    };

};

