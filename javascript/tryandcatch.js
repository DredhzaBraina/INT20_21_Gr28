function myFunction() {
    const message = document.getElementById("p1");
    message.innerHTML = "";
    let x = document.getElementById("zip").value;
    try {
        if(x == "")  throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 0)  throw "too low";
        if(x > 1000000)   throw "too high";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
}