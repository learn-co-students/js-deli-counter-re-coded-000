function currentLine(line) {
  if (line.length==0){return "The line is currently empty.";}
  else{
      return "The line is currently: " + iterateArray(line).join(", ");
  }
}
function iterateArray(arr) {
  var new_arr=[];
  arr.forEach(function(v,i){
      new_arr.push(i+1 +". "+v);
  });
  return new_arr.sort(function(a, b){return a-b});
}
function nowServing(deliLine) {

    return  deliLine.length > 0 ? "Currently serving " + deliLine.slice(0,1) + "."  : "There is nobody waiting to be served!" ;

}
function takeANumber(line, name) {
  line.push(name)
  return 'Welcome, ${name}. You are number ${line.length} in line.';
}
