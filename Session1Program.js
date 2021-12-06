function session1Program() {
    var str = prompt("Please enter the number", "");
    while (str.length > 1) {
        var sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += parseInt(str.charAt(i));
        }
        str = sum.toString();
    }
    document.getElementById("session1Program").innerHTML =
        "Summed integer output is " + str;
    console.log(str);
}
