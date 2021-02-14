import { User } from "../model-classes/userModel"

export class userForm{
    constructor(public parent:Element,public user:User){
        this.bindModel()
    }
    
bindModel(){
    this.user.on("change",()=>{
        console.log("changing")
        this.render()
    })
}
    eventsMap():{[key:string]:()=>void} {
        return  {

                "click:.set-age":this.setAge,
                "click:.set-Name":this.setName
            }
        }
       
     setName=()=>{
         const val=document.getElementsByTagName("input")[0].value;
         this.user.set({name:val})

     }   
     setAge=()=>{
         console.log("setting age")
         this.user.set({"age":Math.round(Math.random() *100 )})
        
     }   
   
    attachEvents(frag:DocumentFragment){
        const eventsMap=this.eventsMap()
        for (let eventKey in eventsMap){
            const[event,selector]=eventKey.split(":")
            frag.querySelectorAll(selector).forEach((frag)=>{
frag.addEventListener(event,eventsMap[eventKey])
            })
        }
    }
    template(){
        return`
        <div>
   <h1></h1>
   <div>Name : ${this.user.get("name")}</div>
   <div>Age :${this.user.get("age")}</div>
   <input id="newName"/>
   <button class="set-Name">change Name</button>
   <button class="set-age">Set Random Age</button>
        </div>
        `
    }
    render(){
        this.parent.innerHTML=""
        const temp=document.createElement("template")
        temp.innerHTML=this.template();
        this.attachEvents(temp.content)
        this.parent.append(temp.content)
    }

}