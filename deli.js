
function currentLine(array){
	var nameAndNumber=[];
	if (array.length > 0)
		{array.forEach(function(item,index){nameAndNumber.push(`${index+1}. ${item}`)});
          
  return `The line is currently: ${nameAndNumber.join(', ')}`
		 }
	else{return "The line is currently empty.";}
}

function nowServing(line){
	if (!line.length){return "There is nobody waiting to be served!";}
	else {
	  var string="Currently serving "+line[0]+"."
	  line.splice(0,1);
	  return string
	}
}

function takeANumber(katzDeli,personName){
katzDeli[katzDeli.length]=personName;
return `Welcome, ${personName}. You are number ${katzDeli.length} in line.`
}