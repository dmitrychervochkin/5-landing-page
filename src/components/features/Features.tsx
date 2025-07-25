import { Group, Rabbit, Utensils } from "lucide-react";
import "./features.scss";
import { Button } from "../button/Button";

const INITIAL_STATE = [
    {
        id: 1,
        title: "The best products start with Sketch",
        description:
            "Slate helps you see how many more days you need to work to reach your financial goal.",
        icon: <Group size="18px" />,
    },
    {
        id: 1,
        title: "Fastest way to organize",
        description:
            "Slate helps you see how many more days you need to work to reach your financial goal.",
        icon: <Rabbit size="18px" />,
    },
    {
        id: 1,
        title: "Work better together",
        description:
            "Slate helps you see how many more days you need to work to reach your financial goal.",
        icon: <Utensils size="18px" />,
    },
];

export const Features = () => {
    return (
        <section id="features" className="features">
            <div className="features__header">
                <h4>At your fingertips</h4>
                <h2>Features</h2>
                <p>
                    Most calendars are designed for teams. Slate is designed for
                    freelancers.
                </p>
            </div>
            <div className="features__main">
                {INITIAL_STATE.map(({ id, title, description, icon }) => (
                    <div key={id} className="features__main--item">
                        <div className="main-item-header">
                            <div>{icon}</div>
                            <p>{title}</p>
                        </div>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
            <div className="features__lightning">
                <h2>Lightning fast prototyping</h2>
                <p>
                    Most calendars are designed for teams. Slate is designed for
                    freelancers.
                </p>
            </div>
            <Button width="250px" type="reverse">
                Try For Free
            </Button>
            <img className="features__img" src="./laptop-img.png" />
            <div className="features__more-info">
                <p>At your fingertips</p>
                <h2>Lightning fast prototyping</h2>
            </div>
            <div className="features__footer">
                <h3>Subscribe to our Newsletter</h3>
                <p>Available exclusivery on Figmaland</p>
                <input placeholder="Your Email" />
                <Button type="submit">Subscribe</Button>
            </div>
        </section>
    );
};
