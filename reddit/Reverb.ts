import * as fetch from 'isomorphic-fetch';

const dataSet = [];

class Reverb {
    public constructor(
       protected value: string = '', 
       protected data?: any,
       protected headers?: any
     ) {
        this.fetchJSON();
    }
    
    public fetchJSON(value?: string, syncState?: any) {
        let context = this;
        fetch(this.value)
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function(data) {
            context.data = data;
        });
       
    }
    
    public syncState(options? : any) {
        
        let data.children = 'bob';
             
        let dataSet = options.dataSet;
        let toState  = options.toState;
        let d = dataSet.split('.');
        console.log(d);
        console.log(eval(d[0][d[1]]))
    }
    
}

export default Reverb;