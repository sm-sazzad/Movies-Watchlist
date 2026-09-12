import { useState } from "react";
import Movies from "./Componenet/Movies"
import Navbar from "./Componenet/Navbar"
import type { IDataType } from "./DaraType";
import Footer from "./Componenet/Footer";


const dataFetch = async (): Promise<IDataType[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

const PromiseData = dataFetch();

function App() {

  const [selectedBtn, setSelectedBtn] = useState<"home" | "movie" | "series" | "watchlist">("home")
  const [selected, setSelected] = useState<IDataType[]>([]);

  return (
    <>
      <Navbar selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn} selected={selected} />
      <Movies PromiseData={PromiseData} selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn} selected={selected} setSelected={setSelected} />
      <Footer />
    </>
  )
}

export default App
