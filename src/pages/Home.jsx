import About from "../components/About";
import Amenities from "../components/Amenities";
import Card1 from "../components/Card1";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Card1 />
            <About />
            <Amenities />


        </>
    )
}