import type { Dispatch, SetStateAction } from "react";
import type { IDataType } from "../DaraType";
import MoviesCard from "./MoviesCard";

interface SeriesDataProps {
    movies: IDataType[],
    selected: IDataType[],
    setSelected: Dispatch<SetStateAction<IDataType[]>>
}

const Series = ({ movies, selected, setSelected }: SeriesDataProps) => {
    return (
        <div id="series" className="scroll-mt-20">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-pink-500 to-red-600 bg-clip-text text-transparent py-3 pb-6 sm:pb-9">
                All Series
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                {
                    movies.map((movie, indx) =>
                    (
                        movie.Category === "Series" &&
                        <MoviesCard movie={movie} key={indx} selected={selected} setSelected={setSelected} />
                    )
                    )
                }
            </div>
        </div>
    );
};

export default Series;