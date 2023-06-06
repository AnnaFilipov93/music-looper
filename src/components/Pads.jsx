import React, { useState,useEffect } from 'react';

import {tracks} from "../data/tracks.js"
import Team from "./Team";

const Pads = (props) => {


    return (
        <div className="flex flex-row p-0 items-center justify-center">
            { Object.values(tracks).map((item) => {return(<Team team={item}></Team>)})}
        </div>
    )
}
export default Pads;