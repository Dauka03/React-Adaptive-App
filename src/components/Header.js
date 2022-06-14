import './header.css'
import Icon from '../assets/icon.js'
import React from 'react';

import { useEffect,useState } from 'react';
 
import { format, utcToZonedTime} from 'date-fns-tz'



// function time(){
//     const date = new Date()
//     const nyDate = utcToZonedTime(date)
//     const [format2,setFormat] = useState(format(nyDate, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: 'America/New_York' }))
//     return setInterval(format2,1000)
// }
        

function Header(){
    const [myTime,setMyTime] = useState("");

    useEffect(()=>{
        setInterval(()=>{
        setMyTime(format(utcToZonedTime(new Date()), 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: 'America/New_York' }))})
    },[myTime])

 
return(
    <div className='head'>
        <div className='toolBar'>
        <Icon/>
        <input className='inp'></input>
        </div>
        <div>
        <p>{myTime}</p>
        <p>{
        }</p>
        </div>
            
    </div>
    
)
}


export default Header;