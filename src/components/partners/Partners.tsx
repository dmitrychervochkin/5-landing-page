import { Button } from "../button/Button";
import "./partners.scss";

const PARTNERS_DATA = [
    {
        id: 1,
        name: "Client Name",
        img: "./partners/partner-1.png",
        description:
            "Slate helps you see how many days you need to work to reach your financial goal for the month and year.",
    },
    {
        id: 2,
        name: "Client Name",
        img: "./partners/partner-2.png",
        description:
            "Slate helps you see how many days you need to work to reach your financial goal for the month and year.",
    },
    {
        id: 3,
        name: "Client Name",
        img: "./partners/partner-3.png",
        description:
            "Slate helps you see how many days you need to work to reach your financial goal for the month and year.",
    },
    {
        id: 4,
        name: "Client Name",
        img: "./partners/partner-4.png",
        description:
            "Slate helps you see how many days you need to work to reach your financial goal for the month and year.",
    },
    {
        id: 5,
        name: "Client Name",
        img: "./partners/partner-5.png",
        description:
            "Slate helps you see how many days you need to work to reach your financial goal for the month and year.",
    },
    {
        id: 6,
        name: "Client Name",
        img: "./partners/partner-6.png",
        description:
            "Slate helps you see how many days you need to work to reach your financial goal for the month and year.",
    },
];

export const Partners = () => {
    return (
        <section id="partners" className="partners">
            <div className="partners__header">
                <h2>Partners</h2>
                <p>
                    Most calendars are designed for teams. Slate is designed for
                    freelancers.
                </p>
            </div>
            <div className="partners__container">
                {PARTNERS_DATA.map(({ id, name, description, img }) => (
                    <div key={id} className="partners__container--item">
                        <h5>{name}</h5>
                        <img src={img} />
                        <p>{description}</p>
                    </div>
                ))}
            </div>
            <Button width="250px" type="reverse">
                Try For Free
            </Button>
        </section>
    );
};
