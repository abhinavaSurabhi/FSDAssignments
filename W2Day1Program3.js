function program3() {
    //var len = prompt("Please enter the length of the array", "");
    var str = prompt("Please enter integers of the array seperated by spaces", "");
    var arr = str.split(' ').map(Number);
    var len = arr.length;
    //console.log("arr = " + arr + ", len = " + len);
    var max = 0;
    var min = arr[0];
    for (let i = 0; i < len; i++) {
        if ((arr[i] - min) > max) {
            max = arr[i] - min;
        }
        //console.log("min = " + min + ", arr[i] = " + arr[i] + ", max = " + max);
        if (min > arr[i]) {
            //console.log("enterd the if condition");
            min = arr[i];
        }
    }
    document.getElementById("program3Output").innerHTML =
        "Maximum Profit possible is : " + max;
}
