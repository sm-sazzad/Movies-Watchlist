import { Suspense, useEffect, useState } from "react";
import Movies from "./Componenet/Movies"
import Navbar from "./Componenet/Navbar"
import type { IDataType } from "./DaraType";
import Footer from "./Componenet/Footer";
import { ToastContainer } from "react-toastify";
import { Spiral } from '../components/spiral';


const dataFetch = async (): Promise<IDataType[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

const PromiseData = dataFetch();

function App() {

  const [selectedBtn, setSelectedBtn] = useState<"home" | "movie" | "series" | "watchlist">("home")

  const [selected, setSelected] = useState<IDataType[]>(() => {
    const savedData = localStorage.getItem("selected");

    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(selected));
  }, [selected]);



  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar
          selectedBtn={selectedBtn}
          setSelectedBtn={setSelectedBtn}
          selected={selected}
        />


        <Suspense fallback={
          <div className="flex min-h-75 items-center justify-center">
            <Spiral className="size-20" />
          </div>
        }>
          <Movies
            PromiseData={PromiseData}
            selectedBtn={selectedBtn}
            setSelectedBtn={setSelectedBtn}
            selected={selected}
            setSelected={setSelected}
          />
        </Suspense>

        <Footer
          setSelectedBtn={setSelectedBtn}
        />
        <ToastContainer />

      </div>
    </>
  )
}

export default App
