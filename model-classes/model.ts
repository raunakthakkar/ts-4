import { AxiosPromise,AxiosResponse } from "axios";

interface eventing{
    on(eventname:string,callback:()=>void);
    trigger(eventName:string)

}
interface sync<T>{
fetch(id:number):AxiosPromise
save(data:T):AxiosPromise
}

interface attributes<T>{
    set(dataObj:T):void 
    getAll():T
    get<K extends keyof T>(key:K):T[K];
}

interface hasID{
    id?:number
}
export class model<T extends hasID>{

    constructor(
    public eventing:eventing,
    public attribute:attributes<T>,
    public sync:sync<T>   
    ){
        
    }

    get on(){
        return this.eventing.on
            }
            get get(){
               return this.attribute.get
            }
        
             set(updateObj:T):void{
                 this.attribute.set(updateObj)
                 this.eventing.trigger("change")
            }
            fetch():void{
                const id=this.get("id")
                if(typeof(id)!== 'number'){
        throw new Error("cannot fetch ")
                }
        
                this.sync.fetch(id).then((resp:AxiosResponse)=>{
                    this.set(resp.data)
                })
            }
            save():void{
                this.sync.save(this.attribute.getAll()).then(
                    (resp)=>{
                        this.eventing.trigger("change")
                    }
                )
            }
}