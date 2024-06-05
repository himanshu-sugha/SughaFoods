import { useEffect } from "react"
import { resapi } from "./constants";
const ResMenu=()=>{
    useEffect(()=>{
     fetchData();
    },[])

   const fetchData= async ()=>{
   const data = await(fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=30.7333148&lng=76.7794179"));
   const json=data.json();
   
   }
   const[]=json?.data?.success?.card[2]?.gridWidget?.gridElements?.infoWithStyle?.info;
    return(
        {

        }
    )
}