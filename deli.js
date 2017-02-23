
function currentLine(line) {
    if (line.length == 0) {
	    return "The line is currently empty."
    }
    else {
      var people = []
	  line.forEach(function(name, item) {
	  	var index = item+1
      people.push(`${index}. ${name}`)
    });
	return `The line is currently: ${people.join(", ")}`;
    }
}
function nowServing(line){
	if (line.length == 0){
		return "There is nobody waiting to be served!" 
	}else{
		return `Currently serving ${line.shift()}.`
	}
}
function takeANumber(katzDeli, name){
          katzDeli.push(name)
          return `Welcome, ${name}. You are number ${katzDeli.indexOf(name) + 1} in line.`
}
