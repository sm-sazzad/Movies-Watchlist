import logo from '../assets/NAv.png'
import banner from '../assets/banner2.jpg'
import type { Dispatch, SetStateAction } from 'react';
import type { IDataType } from '../DaraType';

interface selectedBtnProps {
    selectedBtn: "home" | "movie" | "series" | "watchlist",
    setSelectedBtn: Dispatch<SetStateAction<"home" | "movie" | "series" | "watchlist">>,
    selected: IDataType[],
    // setSelected: Dispatch<SetStateAction<IDataType[]>>
}

const Navbar = ({ selectedBtn, setSelectedBtn, selected }: selectedBtnProps) => {

    const handleLI = (data: "home" | "movie" | "series" | "watchlist") => {
        setSelectedBtn(data);
    }


    return (<>
        <div className='z-55 sticky top-0 bg-white'>
            <nav className='w-full md:w-[90%] mx-auto flex justify-between items-center gap-4 py-3 sm:px-6 md:px-10 '>

                <img src={logo} alt="" className='h-8 sm:h-10' />

                <ul className='flex gap-3 sm:gap-5 text-sm sm:text-base text-gray-700 font-medium'>
                    <li><a href="#home" onClick={() => handleLI("home")} className={`hover:text-black transition ${selectedBtn === "home" ? "text-violet-600 font-bold" : ""}`}>Home</a></li>
                    <li><a href="#movie" onClick={() => handleLI("movie")} className={`hover:text-black transition ${selectedBtn === "movie" ? "text-violet-600 font-bold" : ""}`}>Movies</a></li>
                    <li><a href="#series" onClick={() => handleLI("series")} className={`hover:text-black transition ${selectedBtn === "series" ? "text-violet-600 font-bold" : ""}`}>Series</a></li>
                </ul>

                <a href="#home">
                    <button onClick={() => handleLI("watchlist")} className='cursor-pointer px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 transition whitespace-nowrap'>
                        🔖 <span className='hidden sm:inline'>My Watchlist</span> <span className='ml-1'>( {selected.length} )</span>
                    </button>
                </a>
            </nav>
        </div>
        <div>
            {
                selectedBtn === "watchlist" ? '' :
                    (
                        <div className='mx-auto w-[90%] my-5 sm:my-7'>
                            <img
                                src={banner}
                                alt=""
                                className='rounded-2xl w-full h-auto sm:h-96 md:h-120 lg:h-168 mx-auto object-cover'
                            />
                        </div>
                    )
            }
        </div>
    </>
    );
};

export default Navbar;