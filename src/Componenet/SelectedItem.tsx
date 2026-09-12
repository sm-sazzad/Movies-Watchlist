import type { Dispatch, SetStateAction } from "react";
import type { IDataType } from "../DaraType";
import { GrAddCircle } from "react-icons/gr";

interface SelectedDataProps {
    movies: IDataType[],
    selected: IDataType[],
    setSelected: Dispatch<SetStateAction<IDataType[]>>,
    setSelectedBtn: Dispatch<SetStateAction<"home" | "movie" | "series" | "watchlist">>,
}

const SelectedItem = ({ selected, setSelected, setSelectedBtn }: SelectedDataProps) => {

    const handleRemoveBtn = (select: IDataType) => {
        const newList = selected.filter(n => n.Title !== select.Title);
        setSelected(newList);
    }

    return (
        <div id="cart" className="">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 ">
                {
                    selected.length === 0 ? (
                        <div className="mx-auto text-center flex flex-col items-center justify-center py-16 px-6">

                            {/* Icon */}
                            <div className="mb-6">
                                <GrAddCircle className="text-6xl text-gray-300" />
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                                No item selected
                            </h1>

                            {/* Subtitle (optional) */}
                            <p className="text-gray-500 mt-2 text-sm">
                                Add items to see them here.
                            </p>

                            {/* Button */}
                            <button onClick={() => setSelectedBtn("home")}
                                className="cursor-pointer mt-6 flex items-center gap-2 px-6 py-3 
                       bg-linear-to-r from-pink-500 to-red-500 
                       text-white font-medium text-sm rounded-xl 
                       hover:from-pink-600 hover:to-red-600 
                       active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md">
                                <GrAddCircle className="text-lg" />
                                Add item
                            </button>
                        </div>
                    ) :
                        (
                            selected.map((select, indx) =>
                                <div key={indx} className="w-40 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">

                                    {/* Poster */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={select.Poster}
                                            alt={select.Title}
                                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />

                                        {/* Category – top left */}
                                        <span className="absolute top-2 left-2 bg-pink-500/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm">
                                            {select.Category}
                                        </span>

                                        {/* Rating – top right */}
                                        <span className="absolute top-2 right-2 bg-black/70 text-yellow-400 text-[10px] font-semibold px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                                            ⭐ {select.Rating}
                                        </span>
                                    </div>

                                    {/* Info */}
                                    <div className="p-2.5 space-y-1">
                                        <h1 className="text-sm font-bold text-gray-900 truncate">{select.Title}</h1>
                                        <h2 className="text-xs text-gray-500 truncate">{select.Genre}</h2>

                                        {/* Remove button */}
                                        <button onClick={() => handleRemoveBtn(select)}
                                            className="cursor-pointer w-full mt-1 py-1.5 text-xs font-medium text-red-500 
                   border border-red-400 rounded-lg 
                   hover:bg-red-500 hover:text-white 
                   active:scale-95 transition-all duration-200">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            )
                        )
                }
            </div>
        </div>
    );
};

export default SelectedItem;