function program4() {
    var str = prompt("Please enter integers of the array seperated by spaces", "");
    var result = parseInt(str.split(' ').join(""));
    result++;
    var resultStr = result.toString();
    var len = resultStr.length;
    var finalString = "";
    for (let i = 0; i < len; i++) {
        finalString = finalString.concat(resultStr.charAt(i));
        if (i != len - 1) {
            finalString = finalString.concat(" ");
        }
    }
    document.getElementById("program4Output").innerHTML =
        "Highest Score is : " + finalString;
}
