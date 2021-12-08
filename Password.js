function password() {
    var pass = prompt("Please enter the encrypted password", "");
    var output = "";
    var len = pass.length;
    var high = len;
    var low = 0;
    var check =0;
    for (let i = 0; i < len && check === 0; i++) {
        if (pass.charAt(i) == 'A') {
            output = output + low;
            low++;
        } else if (pass.charAt(i) == 'D') {
            output = output + high;
            high--;
        } else {
            check = 1;
            alert("Only A's and D's are allowed in the password");
        }
    }
    output = output + low;
    if (check === 0) {
        console.log("Output is " + output);
        document.getElementById("password").innerHTML =
            "The decrypted output is  " + output;
    } else {
        console.log("Incorrect format for the input password");
        document.getElementById("password").innerHTML =
            "Incorrect format for the input password";
    }
}