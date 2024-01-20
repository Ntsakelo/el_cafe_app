import { Hero } from "../components/hero/Hero"
import { Content } from "../components/home/Content"
import { Navbar } from "../components/navigation/Navbar"

export const Home = () => {
    return (
        <div className="main-container">
            <Navbar />
            <Hero />
            <Content />
        </div>
    )
}