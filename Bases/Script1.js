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

    document.getElementById("b2").style.visibility = "visible";
    document.getElementById("b8").style.visibility = "visible";
    document.getElementById("b10").style.visibility = "visible";
    document.getElementById("b16").style.visibility = "visible";
    document.getElementById("i2").innerHTML = "";
    document.getElementById("i8").innerHTML = "";
    document.getElementById("i10").innerHTML = "";
    document.getElementById("i16").innerHTML = "";

    document.getElementById("in2").readOnly= false;
    document.getElementById("in8").readOnly = false;
    document.getElementById("in10").readOnly = false;
    document.getElementById("in16").readOnly = false;

    switch (page) {
        case "Explore":
            visible2 = false;
            toggle("2");
            visible8 = false;
            toggle("8");
            visible10 = false;
            toggle("10");
            visible16 = false;
            toggle("16");
            document.getElementById("in2").value = "0";
            update("2");
            break;
        case "Worksheet 1":
            correct = 73;

            document.getElementById("b2").innerHTML = "Check";
            document.getElementById("in2").style.visibility = "visible";
            document.getElementById("in2").value = "";

            document.getElementById("b8").innerHTML = "Check";
            document.getElementById("in8").style.visibility = "visible";
            document.getElementById("in8").value = "";

            document.getElementById("in10").readOnly = true;
            document.getElementById("b10").style.visibility = "hidden";
            document.getElementById("in10").style.visibility = "visible";
            document.getElementById("in10").value = "73";

            document.getElementById("b16").innerHTML = "Check";
            document.getElementById("in16").style.visibility = "visible";
            document.getElementById("in16").value = "";
            break;

        case "Worksheet 2":
            correct = 179;

            document.getElementById("in2").readOnly = true;
            document.getElementById("b2").style.visibility = "hidden";
            document.getElementById("in2").style.visibility = "visible";
            document.getElementById("in2").value = "10110011";

            document.getElementById("b8").innerHTML = "Check";
            document.getElementById("in8").style.visibility = "visible";
            document.getElementById("in8").value = "";

            document.getElementById("b10").innerHTML = "Check";
            document.getElementById("in10").style.visibility = "visible";
            document.getElementById("in10").value = "";

            document.getElementById("b16").innerHTML = "Check";
            document.getElementById("in16").style.visibility = "visible";
            document.getElementById("in16").value = "";
            break;
        case "Worksheet 3":
            correct = 38;

            
            document.getElementById("b2").innerHTML = "Check";
            document.getElementById("in2").style.visibility = "visible";
            document.getElementById("in2").value = "";

            document.getElementById("b8").innerHTML = "Check";
            document.getElementById("in8").style.visibility = "visible";
            document.getElementById("in8").value = "";

            document.getElementById("b10").innerHTML = "Check";
            document.getElementById("in10").style.visibility = "visible";
            document.getElementById("in10").value = "";

            document.getElementById("in16").readOnly = true;
            document.getElementById("b16").style.visibility = "hidden";
            document.getElementById("in16").style.visibility = "visible";
            document.getElementById("in16").value = "26";
            break;
    }
}

function toggle(section) {
    if (currentPage == "Explore") {
        var bool = false;
        switch (section) {
            case "2":
                visible2 = !visible2;
                bool = visible2;
                break;
        }
        switch (section) {
            case "8":
                visible8 = !visible8;
                bool = visible8;
                break;
        }
        switch (section) {
            case "10":
                visible10 = !visible10;
                bool = visible10;
                break;
        }
        switch (section) {
            case "16":
                visible16 = !visible16;
                bool = visible16;
                break;
        }
        document.getElementById("in" + section).style.visibility = bool ? "visible" : "hidden";
        document.getElementById("b" + section).innerHTML = bool ? "Hide" : "Show";
    }
    else if(currentPage.match(/Worksheet \d+/)){
        var value = document.getElementById("in" + section).value;
        if (value == "") value = "0";
        value = parseInt(value, parseInt(section));
        document.getElementById("i"+section).innerHTML = (value == correct) ? "Correct!" : "Incorrect. Correct answer: " + correct.toString(parseInt(section));
    }
}

function update(section) {
    switch (section) {
        case "2":
            document.getElementById("in" + section).value = new String(document.getElementById("in" + section).value).replace(/[^01]/, "");
            break;
        case "8":
            document.getElementById("in" + section).value = new String(document.getElementById("in" + section).value).replace(/[^01234567]/, "");
            break;
        case "10":
            document.getElementById("in" + section).value = new String(document.getElementById("in" + section).value).replace(/[^0123456789]/, "");
            break;
        case "16":
            document.getElementById("in" + section).value = new String(document.getElementById("in" + section).value).replace(/[^0123456789abcdefABCDEF]/, "");
            break;
    }

    if (currentPage == "Explore") {
        var value = document.getElementById("in" + section).value;
        if(value == "") value = "0";
        value = parseInt(value, parseInt(section));

        document.getElementById("in2").value = value.toString(2);
        document.getElementById("in8").value = value.toString(8);
        document.getElementById("in10").value = value.toString();
        document.getElementById("in16").value = value.toString(16);
    }
    else if (currentPage.match(/Worksheet \d+/)) {
        document.getElementById("i" + section).innerHTML = "";
    }
}