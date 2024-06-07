import { useEffect, useState } from "react";
import styles from "./countrycard.module.css"
import axios from "axios";
const CountryCard=({name,flagImage,flagAltImage})=>{
    return (
        <div className={styles.countryCard}>
          <img src={flagImage}alt={flagAltImage}/>
          <h2>{name}</h2>
        </div>
    )
}










function Countries(){
     const apiEndpoint="https://restcountries.com/v3.1/all";
    // const tempArr=[1,2,3,4,5,6,7,8,9];
// console.log(apiEndpoint)
 const[countries,setCountries]=useState([]);

async function fetchData(){
    try{
        const res=await fetch(apiEndpoint);
         const data= res.json();
       
    console.log("data:",data);
    setCountries(data);
    return data;

    }catch(err){
console.log(err)
    }
}
useEffect(()=>{
    fetchData();
},[])







    return (
        <div style={{display:"flex",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"center",
        height:"100vh"
        
        
        }}>
            
        
      
        {countries.map((country)=>(<CountryCard name={country.name.common} flagImage={country.flags.png} flagaltimage={country.flags.alt}/>))}
</div>



    )
};
export default Countries;