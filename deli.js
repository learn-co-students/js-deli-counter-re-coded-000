var katzDeli = [];
function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}


function nowServing(katzDeli) {
  // return "hi";
  return katzDeli.length > 0 ? `Currently serving ${katzDeli.shift()}.` : "There is nobody waiting to be served!";
}

function currentLine(katzDeli) {
  if (katzDeli.length == 0) {
    return "The line is currently empty.";
  } else {
    var numAndNames = []
    katzDeli.forEach(function(name, index) {
      var number = index+1
      numAndNames.push(`${number}. ${name}`)
    });
 	  return `The line is currently: ${numAndNames.join(", ")}`;
  }
}
