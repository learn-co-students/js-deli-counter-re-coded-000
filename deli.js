
function takeANumber(katzDeli,name){

  katzDeli.push(name)

  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(line){

  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

function currentLine(line){

  if(!line.length) {
  	return "The line is currently empty."
  }
  var nameandnumbers = []
  line.forEach(function(name, index){
  	nameandnumbers.push(`${index+1}. ${name}`)
  });
return `The line is currently: ${nameandnumbers.join(', ')}`
}