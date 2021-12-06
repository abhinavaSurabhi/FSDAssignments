function brickStairCase() {
    var bricks = parseInt(prompt("Please enter the number", "0"));
    var root = (-1.0 + Math.sqrt(1 + 8 * bricks)) / 2;
    document.getElementById("brickStaircaseOutput").innerHTML =
        Math.floor(root) + " stairs can be constructed";
    console.log(Math.floor(root));
}
