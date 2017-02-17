

function currentLine(line) {
    if (line.length == 0) {
	    return "The line is currently empty.";
    }
    else {
      var numAndPersons = []
	  line.forEach(function(name, index) {
	  	var number = index+1
      numAndPersons.push(`${number}. ${name}`)
    });
	return `The line is currently: ${numAndPersons.join(", ")}`;
    }
}

function nowServing(line) {
	if (line.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${line.splice(0,1)}.`
  }
}

function takeANumber(line, person) {
	line.push(person)
	return `Welcome, ${person}. You are number ${line.length} in line.`
}