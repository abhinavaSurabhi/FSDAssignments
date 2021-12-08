function diamonds() {
    var len = parseInt(prompt("Please enter the total number of boxes:", "0"));
    var str = prompt("Please enter the number of diamonds in each box seperated by spaces", "0");
    var arr = str.split(' ').map(Number);
    var max = 0;
    for (let i = 0; i < (len - 2); i++) {
        for (let j = i + 2; j < len; j++) {
            if (max < arr[i] + arr[j]) {
                max = arr[i] + arr[j];
            }
        }
    }
    document.getElementById("diamonds").innerHTML =
        "Maximum diamonds are  " + max;
    console.log(max);
}