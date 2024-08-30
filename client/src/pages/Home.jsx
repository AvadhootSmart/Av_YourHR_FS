import { TestTubeIcon } from "lucide-react";
import Footer from "../components/Footer";
import Features from "../sections/Features";
import Hero from "../sections/Hero";
import Testimonials from "../sections/Testimonials";

export default function Home() {
    return (
        <>
            <Hero />
            <Testimonials />
            <Features />
            <Footer />
        </>
    );
}
