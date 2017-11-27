class Warning {
    constructor() {
        this.text = {
            info:[]
        };
    }

    add(errorName, error) {
        if(!error){
            this.text.info.push(errorName);
        }else{
            if(!this.text.error){
                this.text.error={};
            }
            if(!this.text.error[errorName]){
                this.text.error[errorName]=[];
            }
            this.text.error[errorName].push(error);
        }
    }

    clear() {
        let {error,info}=this.text;
        info.length>0&&console.info(info);
        error&&console.error(error);
        this.text = {
            info:[]
        };
    }
}
export {Warning}
