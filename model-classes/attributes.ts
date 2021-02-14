
export class attributes<T>{
    constructor(private data:T){}

    get=<K extends keyof T>(key :K):T[K]=> {
        return this.data[key]
    }
    set=(newuserData:T): void=>{
        Object.assign(this.data,newuserData)
    }
    getAll=():T=>{
        return this.data
    }
}