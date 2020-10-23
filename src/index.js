module.exports = function check(str, bracketsConfig) {
  let config = '';
  let stack = [];

  bracketsConfig.map(index => {
    config += index.join('');    
  })
  
  for (let bracket of str) {
    let configIndex = config.indexOf(bracket);    
    if (configIndex == -1) {continue};

    if (bracket === config[configIndex+1]){
      stack[stack.length-1] == configIndex ? stack.pop() : stack.push(configIndex)
    }else if (configIndex % 2 == 0) {
      stack.push(configIndex + 1)
    } else{
      if (stack.pop() !== configIndex){
        return false
      }
    }
  }
  return stack.length == 0;
}
