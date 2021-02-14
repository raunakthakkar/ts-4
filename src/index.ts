import {User} from '../model-classes/userModel'
import {userForm} from '../views/userForm'
// let userCollection=User.buildUserCollection()
// userCollection.collectionEvents.on("change",()=>{
//     console.log(userCollection)
// })
// userCollection.fetch()


let myUser= User.UserInstantiate({"name":"krupa",age:13})
const root=document.getElementById("root")
if(root){
let myUserForm= new userForm(root,myUser)
myUserForm.render()
}
else{
   throw new Error("no root element") 
}