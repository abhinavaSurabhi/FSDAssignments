function studentTest() {
    var len = parseInt(prompt("Please enter the size of the array:", "0"));
    var str = prompt("Please enter the scores of students seperated by spaces:", "0");
    var arr = str.split(' ').map(Number);
    var max = -1;
    const hashMap = new Map();
    arr.forEach(num => {
        if (hashMap.has(num)) {
            hashMap.set(num, hashMap.get(num) + 1);
        } else {
            hashMap.set(num, 1);
        }
    });
    hashMap.forEach(function (value, key) {
        if (value === 1 && max < key) {
            max = key;
        }
    });
    document.getElementById("studentTest").innerHTML =
        "Maximum score is  " + max;
    console.log(max);
}