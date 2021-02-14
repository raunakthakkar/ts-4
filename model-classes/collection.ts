import axios,{AxiosResponse} from 'axios'
import {eventing} from './eventing'
export class collection<T,K>{
    models:T[]=[]
    collectionEvents:eventing
    constructor(private baseUrl:string,
        public deserialize:(collectionItem :K)=> T
        ){
        this.collectionEvents= new eventing()
    }

    fetch=()=>{
        axios.get(this.baseUrl).then((res:AxiosResponse)=>{
            res.data.forEach((itm :K)=>{
        
                this.models.push(this.deserialize(itm))
            })

         this.collectionEvents.trigger("change")   
        })
    }
}