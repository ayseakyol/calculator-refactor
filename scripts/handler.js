function calc () {
  // read & process user input from event
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;

  // pass user input through core logic
  var calculate;
   if (op == "add"){
    calculate = a + b;
  } else if (op == "min"){
    calculate = a - b;
  } else if (op == "div"){
    calculate = a / b;
  } else if (op == "mul"){
    calculate = a * b;
  }

  // render output to DOM for user
  document.querySelector("#result").innerHTML = calculate;


  // log user action for developers
  console.log(calculate);


  // return true for the browser
return true;
}

  
  
