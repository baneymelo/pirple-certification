 men = {
   person: true,
   mortal: true
 }
 
  socrates = {
   person: true,
   mortal: true
 }
 
 
 
 if (men.person === socrates.person){
   if(men.mortal === socrates.mortal){
     console.log("Socrates is mortal");
       
     }else{
       console.log("socrates isn't mortal");
     }
     
   }else{
     console.log("socrates isn't a person");
 }