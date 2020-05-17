

let label = ["second", "minute", "hour", "day", "seconds", "minutes", "hours", "days"];
let isSingularV = [];
let isSingularL = [];
let flagSwitch = [];
let value3=0, label3 = "minutes";

let minutesConvert = (timeV, timeL) => {

    for (let j = 0; j < timeL.length; j++) {

        switch (timeL[j]) {
            case "second":
                value3  += timeV[j] / 60;
                break;
            case "minute":
                value3 += timeV[j];
                break;
            case "hour":
                value3 += timeV[j] * 60;
                break;
            case "day":
                value3 += timeV[j] * 1440;
                break;
            case "seconds":
                value3 += timeV[j] / 60;
                break;
            case "minutes":
                value3 += timeV[j];
                break;
            case "hours":
                value3 += timeV[j] * 60;
                break;
            case "days":
                value3 += timeV[j] * 1440;
                break;
        }
        
    }
    return [value3,label3];
}

let timeAdder = (a, b, c, d) => {

    const values = [a, c];
    const labels = [b, d];
    let vl = 0;
    let vv = 0;

    const validateLabels = () => {
        labels.forEach(x => {
            label.forEach(y => {
                x === y ? ++vl : false;
            })
        });
        return vl === 2 ? true : false
    }

    const validateValues = () => {
        values.forEach(x => {
            Number.isInteger(x) ? x > 0 ? ++vv : false : false
        })
        return vv == 2 ? true : false
    }

    const isValueSingular = x => {
        return x === 1 ? true : false;
    }
    const isLabelSingular = y => {
        switch (y) {
            case "second":
                return true;
                break;
            case "minute":
                return true;
                break;
            case "hour":
                return true;
                break;
            case "day":
                return true;
                break;
            default:
                return false;
                break;
        }
    }



    if (validateValues() === validateLabels()) {

        for (let i = 0; i < values.length; i++) {
            isSingularV[i] = isValueSingular(values[i]);
        }

        for (let i = 0; i < labels.length; i++) {
            isSingularL[i] = isLabelSingular(labels[i]);
        }

        if (isSingularV[0] === isSingularL[0]) {
            flagSwitch[0] = true;
        } else {
            console.log(`${values[0]} & ${labels[0]} impossible combined`);

        }
        if (isSingularV[1] === isSingularL[1]) {
            flagSwitch[1] = true;
        } else {
            console.log(`${values[1]} & ${labels[1]} impossible combined`);
        }


        if (flagSwitch[0] === flagSwitch[1]) {

            console.log(minutesConvert(values,labels));
             
        }


    } else {
        console.log("Invalid values or labels");

    }

    //validateValues() === validateLabels() ? console.log("true") : console.log('Invalid values or labels');


}
timeAdder(5, "hours", 5, "days");