import { Button } from "../button/Button";
import "./home.scss";

export const Home = () => {
    return (
        <section id="home" className="home">
            <img className="home__desktop-img" src="./site-preview.png" />
            <div className="home__description">
                <h1>We focus on ergonomics</h1>
                <p>
                    Most calendars are designed for teams. Slate is designed for
                    freelancers.
                </p>
                <img className="home__mobile-img" src="./site-preview.png" />
                <Button width="250px">Try For Free</Button>
            </div>
        </section>
    );
};
