import type { Dispatch, SetStateAction } from "react";
import type { IDataType } from "../DaraType";
import MoviesCard from "./MoviesCard";

interface homeDataProps {
    movies: IDataType[],
    selected: IDataType[],
    setSelected: Dispatch<SetStateAction<IDataType[]>>
}


const Home = ({ movies, selected, setSelected }: homeDataProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {
                movies.map((movie, indx) => (
                    <MoviesCard
                        movie={movie}
                        key={indx}
                        selected={selected}
                        setSelected={setSelected}
                    />
                ))
            }
        </div>
    );
};

export default Home;