import {
    Facebook,
    Linkedin,
    Mail,
    MapPin,
    Smartphone,
    Twitter,
} from "lucide-react";
import "./contact.scss";
import { Button } from "../button/Button";

export const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact__header">
                <h2>Contact Us</h2>
                <p>
                    Most calendars are designed for teams. Slate is designed for
                    freelancers.
                </p>
            </div>
            <div className="contact__main">
                <div className="contact__main--form">
                    <h4>Contact Us</h4>
                    <input placeholder="Your Name" />
                    <input placeholder="Your Email" />
                    <textarea placeholder="Your Message" />
                    <Button type="submit">Send</Button>
                </div>
                <div className="contact__main--social">
                    <div>
                        <MapPin size="50px" strokeWidth="3px" />
                        <p>
                            6386 Spring St. undefined Anchorage, Georgia 12473
                            United States
                        </p>
                    </div>
                    <div>
                        <Smartphone size="30px" strokeWidth="3px" />
                        <p>(843) 555-0130</p>
                    </div>
                    <div>
                        <Mail size="30px" strokeWidth="3px" />
                        <p>willie.jennings@example.com</p>
                    </div>
                    <div>
                        <Twitter size="40px" strokeWidth="3px" />
                        <Facebook size="40px" strokeWidth="3px" />
                        <Linkedin size="40px" strokeWidth="3px" />
                    </div>
                </div>
            </div>
        </section>
    );
};
