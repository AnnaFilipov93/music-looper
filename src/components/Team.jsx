import Pad from "./Pad"

const Team = (props) => {

    const CreateTeam = (team) => {
        team.map((item) => {
            return (
                <Pad key={item.title} name={item.title} toggle={false}></Pad>
            )
         });
    }

    return (
        <div></div>
    )
}
export default Team;