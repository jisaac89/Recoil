let shorcut = {
    'w' : 'width',
    'h' : 'height',
    'm' : 'margin',
    'l' : 'left',
    't' : 'top'
}

class _$ {

    currentClass : string;
    styleObject : any;

    key: any;
    value: any;
    measure: any;

    constructor(className : string) {
        
        this.currentClass = className;
        this.styleObject = {}

        this.key = '';
        this.value = 0;
        this.measure = ''
    }
    // Save the context
    
    // methods...
    shiftKey = function(keys, func?: any) {

        // cut out numbers from class
        let prefixClass = this.currentClass.split(/[0-9]/)[0];
        let keysExistinClass = [];

        keys.forEach(key => {
            if (prefixClass.indexOf(key) > -1) {
                keysExistinClass.push(key);
            }
        });

        let strongest = this.returnStrongestMatch(keysExistinClass);
        
        this.key = shorcut[strongest];
        this.styleObject[this.key] = 0;
        this.currentClass = this.currentClass.replace(strongest, '');
        
        func ? func(this.styleObject) : null;

        return this;
    }

    shiftValue = function(allowedValues, func ?: any) {
        //check if string contains numbers
        //if so cut numbers
        //
        let thenum = this.currentClass.replace( /^\D+/g, '');
        let withNoDigits = this.currentClass.replace(/[0-9]/g, '');

        this.currentClass = withNoDigits;

        this.styleObject[this.key] = thenum;

        func ? func(this.styleObject) : null;
        
        return this;
    }

    shiftMeasurement = function(measurements) {
        // console.log(this);
    }
    // m, mr
    returnStrongestMatch = function(keysExistinClass: string[], idx ?: number, currentStrongest?: string) {

        let strongest = currentStrongest || keysExistinClass[0];
        let currentIndex = idx || 0;
        let currentKey = keysExistinClass[currentIndex];

        if (idx < keysExistinClass.length) {
            if (strongest.length < currentKey.length) {
                strongest = currentKey;
            }
            return this.returnStrongestMatch(keysExistinClass, currentIndex + 1, strongest);
        } else {
            return strongest;
        }
    }
};

export const stepThrough = function(b) {
    return new _$(b);
}

function classContainsValue(className : string){
    let bool : boolean;

    if (stringHasNumber(className)) {
        bool = true;
    } else if (stringHasValues(className)) {

    }
}

function stringHasNumber(string : string){
    return /\d/.test(string);
}

function stringHasValues(string : string){
    
    let valuesArray = [
        'px',
        'em',
        'rem', 
        'rel', 
        'abs', 
        'none', 
        'block', 
        'inblock',
        'r',
        'l',
    ]

    return valuesArray.indexOf(string) > -1;
}
