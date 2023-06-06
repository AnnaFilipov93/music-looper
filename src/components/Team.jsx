import React, { useState } from 'react';

import Pad from './Pad';

const Team = ({team,children}) => {
    
    const [teamToggle,setTeamToggle] = useState(false);

    return (
        <div>
            {children}
            {team[0].title.split("-")[0]}
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