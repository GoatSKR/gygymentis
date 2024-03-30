import About from "../components/About";
import Amenities from "../components/Amenities";
import Benefits from "../components/Benefits";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Construction from "../components/Construction";
import Floorplan from "../components/Floorplan";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HeroMobile from "../components/HeroMobile";
import Highlights from "../components/Highlights";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import Photos from "../components/Photos";
import PriceList from "../components/PriceList";
import ProjectDetails from "../components/ProjectDetails";
import ProjectHighlights from "../components/ProjectHighlights";
import Scroll from "../components/Scroll";

export default function Home() {
    return (
        <>
            <Scroll />
            <Navbar />
            <Hero />
            <HeroMobile />
            <Card1 />
            <About />
            <Amenities />
            <Benefits />
            <Card2 />
            <Highlights />
            <Photos />
            <Construction />
            <PriceList />
            <Floorplan />
            <Location />
            <ProjectDetails />
            <ProjectHighlights />
            <Footer />

        </>
    )
}