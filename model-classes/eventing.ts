
type callBack=()=>void
type Events={[eventName:string]:callBack[]}

export class eventing{
    events:Events={}

    on=(eventName:string,callback:callBack)=>{
        this.events[eventName]=[...this.events[eventName]||[],callback]
    }

    trigger=(eventName:string):void=>{
        if (this.events[eventName]&&this.events[eventName].length>0){
            this.events[eventName].forEach((callback)=>{
                callback()
            })
        }else{
            return
        }
    }
}