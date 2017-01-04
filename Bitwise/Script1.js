// JavaScript source code
var currentPage = "Explore";
var correct = 0;
var visible2 = true;
var visible8 = true;
var visible10 = true;
var visible16 = true;

function changePage(page){
    document.getElementById("header").innerHTML = page;
    currentPage = page;

    document.getElementById("b").style.visibility = "hidden";
    document.getElementById("a2").value = "0";
    document.getElementById("a10").value = "0";
    document.getElementById("b2").value = "0";
    document.getElementById("b10").value = "0";
    document.getElementById("i2").value = "0";
    document.getElementById("i10").value = "0";

    document.getElementById("a2").readOnly= false;
    document.getElementById("a10").readOnly = false;
    document.getElementById("b2").readOnly = false;
    document.getElementById("b10").readOnly = false;
    document.getElementById("i2").readOnly = true;
    document.getElementById("i10").readOnly = true;
    document.getElementById("select").style.visibility = "visible";
    document.getElementById("select2").innerHTML = "";
    document.getElementById("a10").disabled = false;
    document.getElementById("a2").disabled = false;

    switch (page) {
        case "Explore":
            
            break;
        case "Worksheet 1":
            correct = "70";
            document.getElementById("b").style.visibility = "visible";
            document.getElementById("a10").readOnly = true;
            document.getElementById("b10").readOnly = true;
            document.getElementById("i2").readOnly = false;
            document.getElementById("i10").readOnly = false;
            document.getElementById("select").style.visibility = "hidden";
            document.getElementById("select2").innerHTML = "&";
            document.getElementById("a10").value = "215";
            document.getElementById("b10").value = "78";
            document.getElementById("a2").value = "";
            document.getElementById("b2").value = "";
            document.getElementById("i2").value = "";
            document.getElementById("i10").value = "";
            break;
        case "Worksheet 2":
            correct = "234";
            document.getElementById("b").style.visibility = "visible";
            document.getElementById("a10").readOnly = true;
            document.getElementById("b10").readOnly = true;
            document.getElementById("i2").readOnly = false;
            document.getElementById("i10").readOnly = false;
            document.getElementById("select").style.visibility = "hidden";
            document.getElementById("select2").innerHTML = "|";
            document.getElementById("a10").value = "194";
            document.getElementById("b10").value = "170";
            document.getElementById("a2").value = "";
            document.getElementById("b2").value = "";
            document.getElementById("i2").value = "";
            document.getElementById("i10").value = "";
            break;
        case "Worksheet 3":
            correct = "132";
            document.getElementById("b").style.visibility = "visible";
            document.getElementById("a10").readOnly = true;
            document.getElementById("b10").readOnly = true;
            document.getElementById("i2").readOnly = false;
            document.getElementById("i10").readOnly = false;
            document.getElementById("select").style.visibility = "hidden";
            document.getElementById("select2").innerHTML = "^";
            document.getElementById("a10").value = "87";
            document.getElementById("b10").value = "211";
            document.getElementById("a2").value = "";
            document.getElementById("b2").value = "";
            document.getElementById("i2").value = "";
            document.getElementById("i10").value = "";
            break;
        case "Worksheet 4":
            correct = "20";
            document.getElementById("a10").disabled = true;
            document.getElementById("a2").disabled = true;
            document.getElementById("b").style.visibility = "visible";
            document.getElementById("a10").readOnly = true;
            document.getElementById("b10").readOnly = true;
            document.getElementById("i2").readOnly = false;
            document.getElementById("i10").readOnly = false;
            document.getElementById("select").style.visibility = "hidden";
            document.getElementById("select2").innerHTML = "&";
            document.getElementById("a10").value = "";
            document.getElementById("b10").value = "107";
            document.getElementById("a2").value = "";
            document.getElementById("b2").value = "";
            document.getElementById("i2").value = "";
            document.getElementById("i10").value = "";
            break;
        case "Worksheet 5":
            correct = "52";
            document.getElementById("b").style.visibility = "visible";
            document.getElementById("a10").readOnly = true;
            document.getElementById("b10").readOnly = true;
            document.getElementById("i2").readOnly = false;
            document.getElementById("i10").readOnly = false;
            document.getElementById("select").style.visibility = "hidden";
            document.getElementById("select2").innerHTML = "<<";
            document.getElementById("a10").value = "13";
            document.getElementById("b10").value = "2";
            document.getElementById("a2").value = "";
            document.getElementById("b2").value = "";
            document.getElementById("i2").value = "";
            document.getElementById("i10").value = "";
            break;
        case "Worksheet 6":
            correct = "9";
            document.getElementById("b").style.visibility = "visible";
            document.getElementById("a10").readOnly = true;
            document.getElementById("b10").readOnly = true;
            document.getElementById("i2").readOnly = false;
            document.getElementById("i10").readOnly = false;
            document.getElementById("select").style.visibility = "hidden";
            document.getElementById("select2").innerHTML = ">>";
            document.getElementById("a10").value = "72";
            document.getElementById("b10").value = "3";
            document.getElementById("a2").value = "";
            document.getElementById("b2").value = "";
            document.getElementById("i2").value = "";
            document.getElementById("i10").value = "";
            break;
    }
}

function check() {
    if (document.getElementById("i10").value == correct) {
        document.getElementById("i").innerHTML = "Correct!";
    }
    else {
        document.getElementById("i").innerHTML = "Incorrect. Correct answer: "+correct;
    }
}

function update(section) {
    if (section.match(/[abi]2/)) {
        document.getElementById(section).value = new String(document.getElementById(section).value).replace(/[^01]/, "");
    }
    else if (section.match(/[abi]10/)) {
        document.getElementById(section).value = new String(document.getElementById(section).value).replace(/[^0123456789]/, "");
    }

    if (currentPage == "Explore") {
        var value = document.getElementById(section).value;
        if (value == "") value = "0";
        value = parseInt(value, parseInt(section.substring(1)));
        document.getElementById(section.substring(0, 1) + "2").value = value.toString(2);
        document.getElementById(section.substring(0, 1) + "10").value = value.toString();
        //console.log("Calling " + section);
        updateAns();
    }
    else if (currentPage.match(/Worksheet \d+/)) {
        //document.getElementById("i" + section).value = "";
    }
}

function updateAns() {
    //console.log("Update");
        var a = parseInt(document.getElementById("a10").value);
        var b = parseInt(document.getElementById("b10").value);
        var value = 0;

        document.getElementById("a10").disabled = false;
        document.getElementById("a2").disabled = false;

        switch(document.getElementById("select").value){
            case "or":
                value = a | b;
                break;
            case "and":
                value = a & b;
                break;
            case "xor":
                value = a ^ b;
                break;
            case "not":
                document.getElementById("a10").disabled = true;
                document.getElementById("a2").disabled = true;
                var temp = "";
                var bin = b.toString(2);
                for (var i = 0; i < bin.length; i++) {
                    temp += bin.substring(i,i+1) == "0" ? "1" : "0";
                }
                value = parseInt(temp,2);
                break;
            case "ls":
                value = a << b;
                break;
            case "rs":
                value = a >> b;
                break;
        }
        document.getElementById("i10").value = value;
        document.getElementById("i2").value = value.toString(2);
}