import type { Dispatch, SetStateAction } from "react";
import type { IDataType } from "../DaraType";
import MoviesCard from "./MoviesCard";

export interface movieProps {
    movies: IDataType[],
    selected: IDataType[],
    setSelected: Dispatch<SetStateAction<IDataType[]>>
}


const Movie = ({ movies, selected, setSelected }: movieProps) => {
    return (
        <div id="movie" className=" scroll-mt-20">
            <h1 className="text-center text-4xl font-bold bg-linear-to-r from-purple-600 via-pink-500 to-red-800 bg-clip-text text-transparent py-3 pb-9">
                All Movies
            </h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    movies.map((movie, indx) => (
                        movie.Category === "Movie" ?
                            (<MoviesCard movie={movie} key={indx} selected={selected} setSelected={setSelected} />) : null)
                    )
                }
            </div>
        </div>
    );
};

export default Movie;