function currentLine(line) {
    if (line==0) {
	    return "The line is currently empty.";
    }
    else {
      var Persons = []
	  line.forEach(function(name, index) {
	  	var number = index+1
      Persons.push(`${number}. ${name}`)
    });
	return `The line is currently: ${Persons.join(", ")}`;
    }
}


function nowServing(line) {
  if (line== 0) {
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
