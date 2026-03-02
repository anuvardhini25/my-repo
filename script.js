function showMessage() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name!");
    } else {
        document.getElementById("output").innerHTML =
            "Thank you, " + name + "! Message received.";
    }
}