import { Button } from "../button/Button";
import "./pricing.scss";

const PRICING_DATA = [
    {
        id: 1,
        title: "Free",
        description: "Organize across all apps by hand.",
        price: 0,
    },
    {
        id: 1,
        title: "STANDARD",
        description: "Organize across all apps by hand.",
        price: 10,
    },
    {
        id: 1,
        title: "BUSINESS",
        description: "Organize across all apps by hand.",
        price: 99,
    },
];

export const Pricing = () => {
    return (
        <section id="pricing" className="pricing">
            <div className="pricing__header">
                <h2>Pricing</h2>
                <p>
                    Most calendars are designed for teams. Slate is designed for
                    freelancers.
                </p>
            </div>
            <div className="pricing__container">
                {PRICING_DATA.map(({ id, title, description, price }) => (
                    <div key={id} className="pricing-item">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <div className="pricing-item-price">
                            <h2>{price}</h2>
                            <div>
                                <h5>$</h5>
                                <p>Per Month</p>
                            </div>
                        </div>
                        <Button
                            type={title === "BUSINESS" ? "default" : "reverse"}
                            size="small"
                        >
                            Order Now
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
};
