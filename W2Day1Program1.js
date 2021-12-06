function program1() {
    var str1 = prompt("Please enter the string", "");
    var str2 = prompt("Please enter the second the string", "");
    document.getElementById("program1Output").innerHTML =
        'Output of program1 : ' + str1.indexOf(str2);
}