const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  if( !members) {
    return false;
  }
  for (let i =0; i<members.length; i++) {
   
    if(typeof members[i] === 'string') {
      let str = members[i].trim();
      str = str[0].toUpperCase();
      arr.push(str);
    } 
  
  }
  arr.sort();
  return (arr.join(''));
};
