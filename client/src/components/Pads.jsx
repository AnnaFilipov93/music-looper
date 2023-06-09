import React, { useState,useEffect } from 'react';

import {tracks} from "../data/tracks.js"
import Team from "./Team";

const colorStyle = ["indigo-300", "sky-400","emerald-400","yellow-200"]

const Pads = (props) => {

    // const colorStyle = ["#d7b3fd","#72c8fd","#0ed0be","#fcd448"];

    return (
        <div className="flex flex-col h-full w-full pb-4 divide-y divide-[#5e6267]">
            
            <div className="flex flex-row pb-4 items-center justify-center basis-3/6">
                { Object.values(tracks).map((item,i) => {return(< Team key={i} team={item} color={colorStyle[i]}></Team>)})}
            </div>

            {/* Controller */}
            <div className="pt-4 basis-2/6 w-full">
                <div>all the controllers</div>
            </div>
       </div> 
    )
}
export default Pads;