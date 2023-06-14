import Pads from "../components/Pads";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import icon from "../icon2.png"

const Board = () => {
    //text-center items-center justify-center
    return (
        <div className="flex flex-col box-border h-full pl-4 pr-4 border-4 divide-y divide-[#5e6267] bg-[#e5e7eb]">

            {/* Header */}
            <div className="flex flex-row pb-3 pr-1 pl-1 pt-3 basis-1/6 w-full justify-between items-center">
                <div className="order-first w-16">
                    <img src={icon}/>
                </div>
                <div className="box-border order-last">
                    <IconButton onClick={()=> console.log("hi")} >
                        <MenuIcon size={'large'}/>
                    </IconButton>
                </div>
            </div>

            {/* Pads */}
            <div className="p-4 basis-5/6 w-full">
                <Pads></Pads>
            </div>


        </div>
    )
}

export default Board;