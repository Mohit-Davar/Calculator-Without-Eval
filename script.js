// Starting and Ending Commands
var index=1;
const start = document.querySelector('#start');
start.addEventListener('click', function () {
    if(index==1){
    document    .getElementById("screen").innerHTML = "WELCOME";
    index=0;
    }
    else{
        location.reload();
        index=1;
    }
});
var bool = 1;

//Getting First Operand
var operand_one = "";
function addClickEventListener(elementId) {
    
    document.getElementById(elementId).addEventListener('click', function () {
        if (bool == 1) {
            operand1(elementId);
        }
        else {
            operand2(elementId);
        }
    });
}
addClickEventListener('one');
addClickEventListener('two');
addClickEventListener('three');
addClickEventListener('four');
addClickEventListener('five');
addClickEventListener('six');
addClickEventListener('seven');
addClickEventListener('eight');
addClickEventListener('nine');
addClickEventListener('zero');
addClickEventListener('double');
addClickEventListener('dot');
function operand1(elementid) {
    operand_one = `${operand_one}` + document.getElementById(elementid).textContent;
    document.getElementById("screen").innerHTML =operand_one;
    index=0;
}

// Getting Operator
var operator;
function addClickEventListener1(elementId) {
    document.getElementById(elementId).addEventListener('click', function () {
        operator = document.getElementById(elementId).textContent;
        document.getElementById("screen").innerHTML = operand_one+operator;
        bool=0;
    });
}
addClickEventListener1("subtract");
addClickEventListener1("multiply");
addClickEventListener1("divide");
addClickEventListener1("addition");
addClickEventListener1("percentage");

// Getting Second Operand
var operand_two = "";
function operand2(elementid) {
    operand_two = `${operand_two}` + document.getElementById(elementid).textContent;
    document.getElementById("screen").innerHTML = operand_one+operator+operand_two;
}

//Caclulator Operation
var q;
var w;
document.getElementById('answer').addEventListener('click', function(){
    switch (operator) {
        case '+':
            q=+`${operand_one}`;
            w=+`${operand_two}`;
            operand_one=q+w;
            operand_two="";
            document.getElementById("screen").innerHTML = operand_one;  
            document.getElementById('upperscreen').innerHTML=`${q}`+`+`+`${w}`+`=`;
            break;
        case '-':
            q=+`${operand_one}`;
            w=+`${operand_two}`;
            operand_one=q-w;
            operand_two="";
            document.getElementById("screen").innerHTML = operand_one;
            document.getElementById('upperscreen').innerHTML=`${q}`+`-`+`${w}`+`=`;  
            break;
        case '/':
            q=+`${operand_one}`;
            w=+`${operand_two}`;
            operand_one=q/w;
            operand_two="";
            document.getElementById("screen").innerHTML = operand_one;  
            document.getElementById('upperscreen').innerHTML=`${q}`+`/`+`${w}`+`=`;
            break;
        case 'x':
            q=+`${operand_one}`;
            w=+`${operand_two}`;
            operand_one=q*w;
            document.getElementById("screen").innerHTML = operand_one;  
            operand_two=""
            document.getElementById('upperscreen').innerHTML=`${q}`+`x`+`${w}`+`=`;
            break;
        case '%':
            q=+`${operand_one}`;
            w=+`${operand_two}`;
            operand_one=q/w*100;
            operand_two="";
            document.getElementById("screen").innerHTML = operand_one; 
            document.getElementById('upperscreen').innerHTML=`${q}`+`%`+`${w}`+`=`; 
            break;
        default:
            document.getElementById("screen").innerHTML = "Enter a Valid Argument";
            break;
    }
});