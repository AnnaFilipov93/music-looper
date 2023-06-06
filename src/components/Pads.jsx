import {tracks} from "../data/tracks.js"
import Team from "./Team";

const Pads = (props) => {


    return (
        <div className="flex flex-row p-0 items-center justify-center">
            <Team team={tracks.bass}></Team>
            <Team team={tracks.chords}></Team>
            <Team team={tracks.drums}></Team>
            <Team team={tracks.melodies}></Team>
        </div>
    )
}
export default Pads;