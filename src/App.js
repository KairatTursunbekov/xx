import { useState } from "react"
import { User } from "./Components"
import { employes } from "./data"



export function App(){
    const [status, setStatus] = useState("EMPLOYES")

    const renderUser =()=> {
        switch(status){
          case "EMPLOYES":
            let arr = employes.filter((el)=> {
              return el.status =="EMPLOYES"
            })
            return arr.map((el,id)=> {
              return<User el={el} key={id}/>
            })
      
            case "MANEGERS":
              let arr2 = employes.filter((el)=> {
                return el.status =="MANEGERS"
              })
              return arr2.map((el,id)=> {
                return<User el={el} key={id}/>
              })
              case "ADMINS":
              let arr3 = employes.filter((el)=> {
                return el.status =="ADMINS"
              })
              return arr3.map((el,id)=> {
                return<User el={el} key={id}/>
              })
        }
      }

    return(
        <div className="App">
            <div className="btns-group">
            <button className="btn" onClick={()=> setStatus("EMPLOYES")}>show employes</button>
            <button className="btn" onClick={()=> setStatus("MANEGERS")}>show manager</button>
            <button className="btn" onClick={()=> setStatus("ADMINS")}>show admins</button>
            </div>
            
            <div className="container">
                {renderUser()}
            </div>
            
        </div>
    )
}