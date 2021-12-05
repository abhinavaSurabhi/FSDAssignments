function program2() {
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
        if ( sum > maxScore) {
            maxScore = sum;
        }
    }
    document.getElementById("program2Output").innerHTML = 
    "Highest Score is : " + maxScore;
}
