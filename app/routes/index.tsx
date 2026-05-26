import Hero from "../component/hero";
import Services from "../routes/services";
import Testimonials from "./Testimonials";
import Team from "./Team";
import Newsletter from "./Newsletter";

export default function Index() {
    return (
        <div>
            <Hero />
            <Services />
            <Testimonials />
            <Team />
            <Newsletter />
        </div>
    );
}