module.exports = function check(str, bracketsConfig) {
  let brackets=str.split("");
  let open_bracket, close_bracket,find=0,same=0,all=0, same_bracket;;
  for (let i=brackets.length-1;i>=0;i--)
  {
    for(let j=0;j<bracketsConfig.length;j++)
    {               
      if(brackets[i]==bracketsConfig[j][0])
      {
        if(same_bracket!==bracketsConfig[j][0])
          same=0;
        if(same==1)
          same=0;
        else
          if(bracketsConfig[j][0]==bracketsConfig[j][1])
          {
            same=1;
            same_bracket=bracketsConfig[j][0];
          } 
        open_bracket=bracketsConfig[j][0];
        close_bracket=bracketsConfig[j][1];
        find=1;
        break;
      }
    }
    if(same==1)      
      continue;
    else
    {
      if(find==1)
      {      
          if(brackets[i]==open_bracket && brackets[i+1]==close_bracket)
          {            
            brackets.splice(i,2);
            console.log(brackets.join(''));          
            find=0;
            all=0;
            i=brackets.length;
          }
          else
            return false;
      }
    }
  } 
  if(brackets.length==0)
    return true;
  else
    return false;
}