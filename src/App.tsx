import "./App.scss";
import {
    Header,
    SvgBackground,
    Home,
    Features,
    Partners,
    Testimonials,
    Pricing,
    Contact,
    Footer,
} from "./components";

function App() {
    return (
        <div className="app">
            <SvgBackground />
            <Header />
            <Home />
            <Features />
            <Partners />
            <Testimonials />
            <Pricing />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
