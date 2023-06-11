import React, { useEffect, useState, useRef } from 'react';

import ReactHowler from 'react-howler'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import IconButton from '@mui/material/IconButton';




const Pad = ({children,index,name,src,currentIndex,play,color}) => {
    

    const [playing, setPlaying] = useState(false);
    const [onLoop, setOnLoop] = useState(false);
    const [onEnd, setOnEnd] = useState(false);

    const padStyle = `box-border h-32 w-32 p-4 border-4 bg-[${playing? color : null}]`


    const handleOnEnd = () => {
        if(!onLoop){
            setOnEnd(true);
        }
        return console.log("Ended");
    }

    const handlePlay = () => {
        setOnLoop(!onLoop);
    }

    useEffect(() => {
        if(!onLoop){
            if(onEnd){
                setPlaying(false); 
                setOnEnd(false);
            }
        }
        else{
            setPlaying(true);
        }
    },[onLoop,onEnd])


    return(
        <div className={padStyle}> 
            <div className='items-center justify-center'>

                <ReactHowler
                    src={src}
                    playing={playing}
                    onEnd={handleOnEnd}
                    loop={onLoop}
                />

                <IconButton id={index} onClick={handlePlay}>
                    {playing ?  <StopIcon sx={{ fontSize: 70 }}/> : <PlayArrowIcon sx={{ fontSize: 70 }}/>  }
                </IconButton>

                {children}
            </div>
        </div>
    )
}

export default Pad;