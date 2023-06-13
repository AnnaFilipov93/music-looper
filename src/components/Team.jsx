import React, { useEffect, useState, useRef } from 'react';


import Pad from './Pad';
import { colors } from '@mui/material';


const Team = ({team,color}) => {
    //[0,1,2,3]
    
    
    const [teamPlaying,setTeamPlaying] = useState(false);
    // const [playing,setPlaying] = useState(false);

    const [activeIndex, setActiveIndex] = useState(null);
    const [array, setArray] = useState([]);


    // const handlePlay = (e) => {
    //     console.log(e.currentTarget.id);
        

    //     const newArray = array.map((value,index) => {
    //         console.log(index)
    //         if(index == e.currentTarget.id){
    //             return !value;
    //         }
    //         else{
    //             return value;
    //         }
    //     });
        
    //     setArray(newArray);  
          
    // }

    useEffect(() => {
        if(team){
            let temp = team.map(() => false)
            setArray(temp);
        }
    },[]);


    useEffect(() => {
        console.log(team[0].title.split("-")[0],"team: " , team)
    },[])


    return (
        <div>
            <div className='pb-1 text-[#5e6267] font-semibold'>{team[0].title.split("-")[0]}</div>
            {
                team.map((item) => {
                    return (
                        <Pad 
                            key={item.title} 
                            name={item.title} 
                            src={item.src} 
                            currentIndex={array}
                            play={array[item.index]}
                            index={item.index} 
                            teamPlaying={teamPlaying} 
                            setTeamPlaying={setTeamPlaying}
                            color={color}
                        > 
                        </Pad>
                    )
                })

               
            }
        </div>
    )
}
export default Team;