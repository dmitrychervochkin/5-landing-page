import { Button } from "../button/Button";
import "./testimonials.scss";

export const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials">
            <h2 className="testimonials__title">Testimonials</h2>
            <img className="dropbox-logo" src="./dropbox-logo.png" />
            <p className="testimonials__info">
                Most calendars are designed for teams. Slate is designed for
                freelancers who want a simple way to plan their chedule.
            </p>
            <div className="testimonials__user-card">
                <img
                    className="testimonials__user-card--logo"
                    src="user-img.jpg"
                />
                <div className="testimonials__user-card--info">
                    <h4>Organize across</h4>
                    <p>Ui designer</p>
                </div>
            </div>
            <Button width="250px" type="reverse">
                More Testimonials
            </Button>
        </section>
    );
};
