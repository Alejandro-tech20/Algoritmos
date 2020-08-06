function betweenMarkers(line, left, right){
  // your code here
  return (line.match(`\\${left}(.*?)\\${right}`)[1]);
  
}

console.log('Example:');
console.log(betweenMarkers('What is >apple on<', '>', '<'));