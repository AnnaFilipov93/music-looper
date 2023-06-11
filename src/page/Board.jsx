import Pads from "../components/Pads";

const Board = () => {
    //text-center items-center justify-center
    return (
        <div className="flex flex-col box-border h-full p-4 border-4 divide-y">

            {/* Header */}
            <div className="flex flex-row pb-4 pr-1 pl-1 basis-1/6 w-full justify-between">
                <div className="order-first">icon</div>
                <div className="order-last">menu</div>
            </div>

            {/* Pads */}
            <div className="p-4 basis-5/6 w-full">
                <Pads></Pads>
            </div>


        </div>
    )
}

export default Board;