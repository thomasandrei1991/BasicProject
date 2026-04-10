
function sum(num1, num2){
    return num1 + num2;
}
function difference(num1, num2){
    return num1 - num2;
}
function product(num1, num2){
    return num1 * num2;
}
function quotient(num1, num2){
    return num1 / num2;
}

num1 = window.prompt("Enter the first number");
op = window.prompt("Enter the operator");
num2 = window.prompt("Enter the second number");

if(op == "+"){
    result = sum(num1, num2);
    alert("The result is: " + result);
}
else if(op == "-"){
    result = difference(num1, num2);
    alert("The result is: " + result);
}
else if(op == "*"){
    result = product(num1, num2);
    alert("The result is: " + result);
}
else if(op == "/"){
    if(num2 == 0){
        alert("Cannot divide by zero");
    }
    else{
        result = quotient(num1, num2);
        alert("The result is: " + result);
    }
}
