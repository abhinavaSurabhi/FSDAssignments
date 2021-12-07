function brickStairCase() {
    var bricks = parseInt(prompt("Please enter the number", "0"));
    //var root = (-1 + Math.sqrt(1 + (8 * bricks)))/2;
    var sum = 0;
    var n = 0;
    while (sum <= bricks) {
        n++;
        sum += n;
    }
    n--;
    console.log(n);
    document.getElementById("brickStaircaseOutput").innerHTML =
        n + " stairs can be constructed";
    //console.log(Math.floor(n));
}
