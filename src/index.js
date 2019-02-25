module.exports = function check(str, bracketsConfig) {
  let brackets=str.split("");
  console.log(brackets, bracketsConfig);
  let open_bracket, close_bracket,find=0;
  for (let i=brackets.length-1;i>=0;i--)
  {
    for(let j=0;j<bracketsConfig.length;j++)
    {
      if(brackets[i]==bracketsConfig[j][0])
      {
        open_bracket=bracketsConfig[j][0];
        close_bracket=bracketsConfig[j][1];
        console.log(open_bracket, close_bracket);
        find=1;
        break;
      }
    }
    if(find==1)
    {
      if(brackets[i]==open_bracket && brackets[i+1]==close_bracket)
      {
        brackets=brackets.slice(i,i+2);
        console.log(brackets);
        find=0;
      }
      else
        break;
    }
  }
  return true;
}