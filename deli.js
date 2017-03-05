

function takeANumber(katzDeliLine,personName){
	
	katzDeliLine.push(personName)
	return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`
};

function nowServing(katzDeliLine){
	
	if (katzDeliLine.length==0){
		return "There is nobody waiting to be served!";	
	};
	var personName=katzDeliLine.shift();
	return `Currently serving ${personName}.`;
};

function currentLine(katzDeliLine){
	if(katzDeliLine.length==0){
		return"The line is currently empty."
	}
	var str ="The line is currently: "
	for(var i=0;i<katzDeliLine.length;i++){
		str+= `${i+1}. ${katzDeliLine[i]}, `
	}

	return str.slice(0,-2);
}