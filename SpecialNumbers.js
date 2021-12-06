function specialNumbers() {
    var power = parseInt(prompt("Please enter the power of the 10", "0"));
    var tot = 1;
    for (let i = 1; (i <= power) && (i <= 10); i++) {
        tot += permutation(i);
    }
    document.getElementById("specialNumbersOutput").innerHTML =
        "Total special numbers are " + tot;
    console.log(tot);
}

function permutation(r) {
    var primary = fact(10) / fact(10 - r);
    var zeroes = fact(9) / fact(9 - r + 1);
    return primary - zeroes;
}
function fact(num) {
    var f = 1;
    for (let i = 1; i <= num; i++) {
        f = f * i;
    }
    return f;
}