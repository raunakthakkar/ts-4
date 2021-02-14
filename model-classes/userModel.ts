import {model} from './model'
import {eventing}from './eventing'
import {attributes} from './attributes'
import { sync } from './sync'
import { collection } from './collection'
export interface UserData{
    id?:number,
    age?:number,
    name?:string
}

const baseUrl="http://localhost:3000/user"
export class User extends model<UserData>{
   static UserInstantiate(attr:UserData){
       return new User(
           new eventing(),
           new attributes(attr),
           new sync<UserData>(baseUrl)
       )
   }
   static buildUserCollection(){
       return new collection<User,UserData>(baseUrl,(collItm:UserData)=>{return User.UserInstantiate(collItm)})
   }
   
}


// let myUser= new User()