import Pad from "./Pad";
import {tracks} from "../data/tracks.js"

const Pads = (props) => {


    const bass = tracks.bass.map((item) => {
       return <Pad key={item.title} name={item.title} toggle={false}></Pad>
    });
    const chords = tracks.bass.map(() => {
        return <Pad></Pad>
    });
    const drums = tracks.bass.map(() => {
        return <Pad></Pad>
    });
    const melodies = tracks.bass.map(() => {
        return <Pad></Pad>
    });

    return (
        <div className="flex flex-row p-0 items-center justify-center">
            <div>Bass{bass}</div>
            <div>Chords{chords}</div>
            <div>Drums{drums}</div>
            <div>Melodies{melodies}</div>
        </div>
    )
}
export default Pads;