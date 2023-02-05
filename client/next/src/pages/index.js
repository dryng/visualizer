import Head from "next/head";
import { useSelector } from "react-redux";

const selectGrid = (state) => state.grid;

export default function Home() {

    const grid = useSelector(selectGrid);
    console.log("grid", grid);
    
    return <h1>Hello World</h1>;
}