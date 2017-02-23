function currentLine(katzDeliLine){
if(katzDeliLine.length==0){
  return "The line is currently empty.";
}
else  {
var str="The line is currently:";
katzDeliLine.forEach(function(name,index){
str+=` ${index+1}. ${name},`;
 
}
);
str=str.slice(0,str.length-1);//remove the last ,
return str;
}
}
function nowServing(katzDeliLine){
if (katzDeliLine.length!=0){
	return  "Currently serving "+ katzDeliLine.splice(0,1)[0]+".";
	
}
else{
	return "There is nobody waiting to be served!";
}
}
function takeANumber(katzDeliLine,name){

	
	katzDeliLine.push(name);

    return 'Welcome, ' + name +'. You are number '+ katzDeliLine.length+   ' in line.';

}