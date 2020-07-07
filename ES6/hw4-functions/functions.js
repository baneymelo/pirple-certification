
  //const isMortal = name => true;
  
  const person = [
    {name: "Socrates", human: true},
    {name: "Zeus", human: false},
    {name: "Platon", human: true},
]   
  const isMortal = name => name === person[0].name ? true : false 

  console.log(isMortal("Socrates"));