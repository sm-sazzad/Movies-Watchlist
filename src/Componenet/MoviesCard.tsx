import { GoHeartFill } from "react-icons/go";
import type { IDataType } from "../DaraType";
import type { Dispatch, SetStateAction } from "react";

interface movieDataProps {
    movie: IDataType,
    selected: IDataType[],
    setSelected: Dispatch<SetStateAction<IDataType[]>>
}


const MoviesCard = ({ movie, selected, setSelected }: movieDataProps) => {

    const isSelected = selected.some(n => n.Title === movie.Title);

    const handleAddBtn = (movie: IDataType) => {
        const newSelected = [...selected, movie];
        setSelected(newSelected);
    }


    return (
        <div className="z-11 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">

            {/* Poster */}
            <div className="relative overflow-hidden">
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Category badge – top left */}
                <span className="absolute top-3 left-3 bg-pink-500/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {movie.Category}
                </span>

                {/* Rating badge – top right */}
                <span className="absolute top-3 right-3 bg-black/70 text-yellow-400 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
                    ⭐ {movie.Rating}
                </span>
            </div>

            {/* Info */}
            <div className="p-4 space-y-2">
                <h1 className="text-lg font-bold text-gray-900 truncate">{movie.Title}</h1>
                <h3 className="text-sm text-gray-500">{movie.Genre}</h3>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="bg-gray-100 px-2 py-0.5 rounded-md">{movie.Year}</span>
                </div>

                {/* Button */}
                <button
                    disabled={isSelected}
                    onClick={() => handleAddBtn(movie)}
                    className={` w-full flex items-center justify-center gap-2 mt-2 py-3 
                   bg-linear-to-r 
                   active:scale-95 transition-all duration-200 ${isSelected ? "cursor-not-allowed from-purple-500 to-indigo-500 text-white text-sm font-medium rounded-xl" : 'cursor-pointer from-pink-500 to-red-500 text-white text-sm font-medium rounded-xl hover:from-pink-600 hover:to-red-600 '}`}>
                    <GoHeartFill className={`text-base ${isSelected ? "text-red-600" : "text-white"}`} />
                    {
                        isSelected ? `Added to Watchlist` : "Add to Watchlist"

                    }
                </button>
            </div>
        </div>
    );
};

export default MoviesCard;