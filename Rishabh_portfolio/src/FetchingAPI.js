import "./main.css";
import { StoreInformation } from "./StoreInformation";

export let FetchCall = async(type="MinorProject")=>{

    let StoreContent= await fetch(`./Images/Api/${type}.json`,{

        headers:{
            Accept:"application/json"
        
        }
    })

   let Data= await StoreContent.json();
   console.log(Data)

   

   StoreInformation(Data);  
   
                                 

}


FetchCall("MinorProject") 