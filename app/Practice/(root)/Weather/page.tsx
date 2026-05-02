"use client"
import styles from "./weather.module.css"
import { Button } from "@/components/ui/button";
import { Cloud , SunMoon,SunSnow } from "lucide-react";
 
import { useState } from "react"

 
const page = () => {
     const [city, setCity] = useState('');
     const [weather, setWeather] = useState(null);
     const [error, setError] = useState( "");


     const fetchWeather =async ()=>{
      try{
        const res = await fetch('');
        const data = await res.json();
        setWeather(data);
      }catch (err){
        setError('Error fetching weather data');
        setWeather(null)
      }
     }
  return (

    <div className={styles.body}>
      <div className={styles.firstcard}>
        <b className={styles.Checkweather}>Check Weather</b>
        <input value={city}
        onChange={(e)=> setCity(e.target.value)}
        placeholder="e.g., Lagos"
        className={styles.input}/>

<Button variant={"secondary"} onClick={fetchWeather} 
className={styles.button}>Get Weather</Button>
      </div>

      <div style={{width: "50%",
         padding:"20px",
         backgroundColor: "#f5f6fa",
         display:"flex",
         flexDirection:"column",
         alignItems:"center",
         justifyContent:"center",
         borderRadius:"3rem"}}>
        
          <section  className={styles.img}>
            <SunMoon className="w-20 h-30 pl-4"/>
            <Cloud className="w-20 h-30 pl-4"/>
            <SunSnow className="w-20 h-30 pl-4"/>
          </section>
           
           
        {weather ? (
          <div style={{textAlign:"center",}}>
            <h2>{weather.name}</h2>
            <p style={{fontSize:"48px", margin:"10px, 0"}}>Temp: {weather.main.temp}</p>
            <p > {weather.Weather[0].description}</p>
          </div>
        ): error ? (
          <p style={{color: "red"}}>{error}</p>
        ): (
          <b className="text-3xl">Enter a city to get weather</b>
        )}
      </div>
       
    </div>
  )
}

export default page