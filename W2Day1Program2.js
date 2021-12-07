function program2(elem) {
    var len = prompt("Please enter the length of the array", "");
    var arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(parseInt(prompt("Please enter the integer in Position:" + i + "of the array", "0")));
    }
    //var intArray = str.split(' ').map(Number);
    var maxScore = arr[0];
    var sum = 0;
    for (let i = 0; i < len; i++) {
        sum = sum + arr[i];
        if (sum < 0) {
            sum = 0;
        }
        if (sum > maxScore) {
            maxScore = sum;
        }
    }
    if (elem.id == "program2") {
        document.getElementById("program2Output").innerHTML =
            "Highest Score is : " + maxScore;
    } else {
        document.getElementById("programGameOutput").innerHTML =
            "Highest Score is : " + maxScore;
    }
}
