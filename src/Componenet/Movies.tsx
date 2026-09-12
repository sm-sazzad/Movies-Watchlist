import { use, type Dispatch, type SetStateAction } from "react";
import type { IDataType } from "../DaraType";
import Movie from "./Movie";
import Series from "./Series";
import SelectedItem from "./SelectedItem";
import Home from "./Home";

interface PromiseDataProps {
    PromiseData: Promise<IDataType[]>,
    selectedBtn: "home" | "movie" | "series" | "watchlist",
    setSelectedBtn: Dispatch<SetStateAction<"home" | "movie" | "series" | "watchlist">>,
    selected: IDataType[],
    setSelected: Dispatch<SetStateAction<IDataType[]>>
}


const Movies = ({ PromiseData, selectedBtn, setSelectedBtn, selected, setSelected }: PromiseDataProps) => {

    const movies = use(PromiseData);

    return (
        <div id="home" className="w-[90%] mx-auto px-10 scroll-mt-20">
            <div className="mb-15">
                {
                    selectedBtn === 'watchlist' ? (
                        <h1 className="mt-10 text-6xl font-bold bg-linear-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            My Personal Watchlist
                        </h1>
                    ) :
                        (
                            <div>
                                <h1 className=" text-6xl font-bold bg-linear-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                                    Build Your Personal Watchlist</h1>
                                <p className="text-gray-600 mt-2 text-2xl">Discover movies & series you want to watch later.</p>
                            </div>
                        )
                }
            </div>
            <div className="">
                {
                    selectedBtn === "home" ? (<Home movies={movies} selected={selected} setSelected={setSelected} />) : selectedBtn === "movie" ? (<Movie movies={movies} selected={selected} setSelected={setSelected} />) : selectedBtn === "series" ? (<Series movies={movies} selected={selected} setSelected={setSelected} />) : (<SelectedItem movies={movies} selected={selected} setSelected={setSelected} setSelectedBtn={setSelectedBtn} />)
                }
            </div>
        </div>
    );
};

export default Movies;