function takeANumber(katzDeliLine,name)
{
    return "Welcome, "+name+". You are number "+katzDeliLine.push(name)+" in line."

}
function currentLine(line)
{

	if (line.length==0)
	{
      return "The line is currently empty.";
	}
	else
	{
		var str="The line is currently:";

		line.forEach(function(name,index){
			str+=" "+(index+1)+". "+name+",";
		});
		str = str.substring(0, str.length - 1);
		return str;
	}
}
function nowServing(line)
{
	if(line.length==0)
	{
		return "There is nobody waiting to be served!";
	}
	else
	{
      var first=line[0];
      line.splice(0,1);
      return "Currently serving "+first+".";
	}
}