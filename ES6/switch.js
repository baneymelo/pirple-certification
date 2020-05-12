/* const myFruit = "apple";

switch(myFruit){
    case "apple":
        console.log('Apple!');
        break;
    case "orange":
        console.log('Im orange');
        break;
    case "banana":
        console.log('banana');;
        break;
    default:
        console.log("I didn't understand");       

}

 */

 const timeAdder = (value1,label1,value2,label2) => {

    const values = [value1,value2];
    const labels = [label1,label2];
    const validValues = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"];
    let matches = 0;

        const validateLabels = () => {
        labels.forEach(function (element){
            for(let i=0;i<validValues.length;i++){
                element === validValues[i] ? ++matches : matches;
            }
            
        })

        matches == 2 ? matches : console.log("Incorrect: Verify labels's values");
        
    }

validateLabels();

    /*const dataValidate = (originalArray,compareArray) => {
        
        originalArray[1] === compareArray.forEach((element => element) ? console.log("Hay match") : console.log("no hay match")
        //originalArray[3] === compareArray[i] ? matches++ : console.log(`${originArray[3]} is invalid`);
            
    }
    
    dataValidate(valueorlabel,validValues);
     /*
    const isPlural = valueorlabel => {
        let isNumber, isString;
        Number.isInteger(valueorlabel) ? isNumber = true : isString = true;

        
    }

       
     label1.charAt(label1.length-1) === "s" || label2.charAt(label2.length-1) === "s" ? labelPlural = ["seconds","minutes","hours","days"]:labelSingular = ["second","minute","hour","day"];
     
     switch(labelPlural){

     }
     
     console.log(labelPlural[1]);
     */
 }

 timeAdder(1,"minutes",3,"minutes");