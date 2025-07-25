import {
    Facebook,
    Linkedin,
    Mail,
    MapPin,
    Smartphone,
    Twitter,
} from "lucide-react";
import "./footer.scss";

export const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer__pages">
                <h2>Pages</h2>
                <p>Eleanor Edwards</p>
                <p>Ted Robertson</p>
                <p>Annette Russell</p>
                <p>Jennie Makinney</p>
                <p>Gloria Richards</p>
            </div>
            <img className="footer__map" src="map.png" />
            <div className="footer__contacts">
                <div>
                    <MapPin color="#ED2878" size="50px" strokeWidth="3px" />
                    <p>
                        6386 Spring St. undefined Anchorage, Georgia 12473
                        United States
                    </p>
                </div>
                <div>
                    <Smartphone color="#ED2878" size="30px" strokeWidth="3px" />
                    <p>(843) 555-0130</p>
                </div>
                <div>
                    <Mail color="#ED2878" size="30px" strokeWidth="3px" />
                    <p>willie.jennings@example.com</p>
                </div>
                <div>
                    <Twitter color="#ED2878" size="40px" strokeWidth="3px" />
                    <Facebook color="#ED2878" size="40px" strokeWidth="3px" />
                    <Linkedin color="#ED2878" size="40px" strokeWidth="3px" />
                </div>
            </div>
        </footer>
    );
};
