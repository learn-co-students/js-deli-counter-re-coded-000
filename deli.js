
function takeANumber(line, name) { //tell the person his turn
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${line.splice(0,1)}.`
  }
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty.";
  }
  else {
    var numAndNames = []
  line.forEach(function(p, index) {
    numAndNames.push(`${index+1}. ${p}`)
  });
  return `The line is currently: ${numAndNames.join(", ")}`;
  }
}
