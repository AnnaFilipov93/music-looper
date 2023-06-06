import React, { useState } from 'react';

import Pad from './Pad';

const Team = ({team}) => {
    
    console.log("name: " , team[0])
    const [teamToggle,setTeamToggle] = useState(false);

    return (
        <div>
            {
                team.map((item) => {
                    return (
                        <Pad key={item.title} name={item.title} teamToggle={teamToggle} setToggle={setTeamToggle}></Pad>
                    )
                })
            }
        </div>
    )
}
export default Team;