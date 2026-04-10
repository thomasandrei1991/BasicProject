var _name = window.prompt("Enter your name: ");
var _age = window.prompt("Enter your age: ");

if(_age < 18){
    alert("Sorry " + _name + ", you are not qualified to vote!.");
    console.log("Unable to vote because of the age restriction.");
}
else if(_age >= 18){
    alert("Congratulations " + _name + ", you are qualified to vote!");
    console.log("Eligible to vote.");
}