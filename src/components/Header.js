import './header.css'
import Icon from '../assets/icon.js'
import React from 'react';

 
import { format, utcToZonedTime,zonedTimeToUtc} from 'date-fns-tz'



function time(){
    const date = new Date()
    const nyDate = utcToZonedTime(date)
    return <p>{format(nyDate, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: 'America/New_York' })} </p>
}


function Header(){
//         function time(){
//     const date = new Date()
//     const nyDate = utcToZonedTime(date)
//     return (useEffect(()=>{
//         setInterval(
//             <p>{format(nyDate, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: 'America/New_York' })} </p>
//             ,1000)
//     }))
// }
return(
    <div className='head'>
        <div className='toolBar'>
        <Icon/>
        <input className='inp'></input>
        </div>
        <div>
        <p>{time()}</p>
        </div>
            
    </div>
    
)
}


export default Header;