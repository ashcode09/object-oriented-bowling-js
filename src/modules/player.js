var player = function () {
    this.name = '';

    this.addName = function () {
        this.name = document.getElementById('playerName').value;
        document.getElementById('playerName').value = '';
    };
};