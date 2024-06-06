import { useEffect, useState } from "react";
import styles from "./countrycard.module.css"
import axios from "axios";
const CountryCard=()=>{
    return (
        <div className={styles.countryCard}>
          <img src="Flag of india.png"alt="flagname"/>
          <h2>india</h2>
        </div>
    )
}










function Countries(){
     const apiEndpoint="https://restcountries.com/v3.1/all";
    const tempArr=[1,2,3,4,5,6,7,8,9];
// console.log(apiEndpoint)
// const[countries,setCountries]=useState([]);

async function fetchData(){
    try{
        const data=await axios.get(apiEndpoint);
        // const data=await res.json();
       
    console.log("data:",data);
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
            
        
      {tempArr.map((value)=>(<CountryCard key={value}/>))}
        {/* {countries.map((country)=>(<CountryCard name={country.name.common} flagImage={country.flags.png} flagaltimage={country.flags.alt}/>))} */}
</div>



    )
};
export default Countries;