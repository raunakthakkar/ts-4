import axios,{AxiosPromise, AxiosResponse} from 'axios'
interface hasId{
    id?:number
    name?:string
}
export class sync<T extends hasId>{

    constructor(public baseUrl:string){

    }
    fetch(id :number):AxiosPromise{
        return axios.get(`${this.baseUrl}/${id}`)

    }
    save(data:T):AxiosPromise{
        const {id}=data
        if(id){
            
            return axios.put(`${this.baseUrl}/${id}`,
                data
            )
        }else{
            return axios.post(this.baseUrl,
                data
            )
        }


    }
}