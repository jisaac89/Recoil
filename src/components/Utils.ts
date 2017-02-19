// simple flat search

export function branchIn(value : Array<any>, key : string, step?: number) : any {

    let result = key.split('.'),
        stepLength = result.length,
        currentStep = step || 0,
        letCurrentValue = value[result[currentStep]];

    if (currentStep !== stepLength - 1) {
        return branchIn(letCurrentValue, key, currentStep + 1);
    } else {
        return letCurrentValue;
    }

}

// export function setValue(object : Array<any>, key : string, value , step?: number, currentBranch? : any, evalString?: any) : any {

//     let currentEvalString = evalString || '';

//     let result = key.split('.'),
//         stepLength = result.length,
//         currentStep = step || 0,
//         currentValue = currentBranch ? currentBranch[result[currentStep]] : object[result[currentStep]];

//     if (currentStep !== stepLength - 1) {

        
//         if (currentStep === 0) {
//             currentEvalString += "object['" + result[currentStep] + "']";
//         } else {
//             currentEvalString += "['" + result[currentStep] + "']";
//         }
//         return setValue(object, key, value, currentStep + 1, currentValue, currentEvalString);
//     } else {
//         let a = value;
//         eval(currentEvalString + " = " + a);

//         return object;
//     }

// }

export function search(dataSource: Array<any>, term: string, keys: Array<any>) {
    let queryResult : Array<any> = [];
    if (term.length > 0) {
        dataSource.forEach(function (item) {
            keys.forEach((key, index) => {
                if (branchIn(item, key) ? branchIn(item, key).toString().toLowerCase().indexOf(term.toString().toLowerCase()) != -1 : false) {
                    if (queryResult[index] !== item) {
                        queryResult.push(item);
                    }
                }
            });
        });
    }
    return queryResult;
}

export function isType(value: any) {
    var type;

    if (value instanceof Array) {
        type = 'array';
    } else {
        switch (typeof value) {
            case 'object':
                type = 'object';
                break;
            case 'string':
                type = 'string';
                break;
            default:
                type = 'value';
                break;
        }
    }

    return type;
}

export function getType(value : any) {
    var type = typeof value;
    if (type === 'object' && value instanceof Array) {
        type = 'array';
    }
    return type;
}

export function arraysEqual(arr1 : any, arr2 : any) {
    if (arr1.length !== arr2.length)
        return false;
    for (var i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
            return false;
    }

    return true;
}