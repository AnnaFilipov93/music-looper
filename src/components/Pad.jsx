import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import IconButton from '@mui/material/IconButton';


const Pad = (props) => {

    //will be removed to other place
    const [toggle,setToggle] = useState(false);
    

    return(
        <div toggle={toggle} className="box-border h-32 w-32 p-4 border-4 bg-red-700"> 
        <div className='items-center justify-center'>
        <IconButton onClick={() => setToggle(!toggle)}>
                {toggle ? <PlayArrowIcon sx={{ fontSize: 70 }}/> : <StopIcon sx={{ fontSize: 70 }}/>  }
            </IconButton>
        </div>
        </div>
    )
}

export default Pad;