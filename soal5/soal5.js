const ask = (question,yes ,no)=>{
  if(window.confirm(question)){
      yes()
    
  }
  else{
      no()
      
  }
}


ask(
  "Do you agree ?",
  function(){alert("You agreed.")},
  function(){alert("You canceled the execution.")},
);