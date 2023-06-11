import React, { useEffect, useState, useRef } from 'react';
import ReactHowler from 'react-howler'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import IconButton from '@mui/material/IconButton';


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
            {team[0].title.split("-")[0]}
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

                            {/* <IconButton id={item.index} onClick={handlePlay}>
                                {array[item.index] ?  <StopIcon sx={{ fontSize: 70 }}/> : <PlayArrowIcon sx={{ fontSize: 70 }}/>  }
                            </IconButton> */}
                        </Pad>
                    )
                })

               
            }
        </div>
    )
}
export default Team;