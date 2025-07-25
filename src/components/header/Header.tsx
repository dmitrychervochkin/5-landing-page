import { AlignJustify, X } from "lucide-react";
import "./header.scss";
import { useState } from "react";
import { Button } from "../button/Button";

export const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <header className="header">
            <img className="header__logo" src="./logo.png" />
            <div className="header__actions">
                <nav className="header__actions--nav">
                    <div className="nav-item">
                        <a href="#home">Home</a>
                    </div>
                    <div className="nav-item">
                        <a href="#features">Features</a>
                    </div>
                    <div className="nav-item">
                        <a href="#partners">Partners</a>
                    </div>
                    <div className="nav-item">
                        <a href="#pricing">Pricing</a>
                    </div>
                    <div className="nav-item">About</div>
                    <div className="nav-item">Contact</div>
                </nav>
                <div className="header__actions--submit">
                    <input
                        className="header-submit-input"
                        placeholder="Your Email"
                    />
                    <Button size="small" type="subscribe">
                        Subscribe
                    </Button>
                </div>
            </div>
            <AlignJustify
                className="header__menu"
                size="35px"
                strokeWidth="2.5px"
                onClick={() => setIsSidebarOpen(true)}
            />
            <nav
                className="header__sidebar"
                style={{
                    maxWidth: isSidebarOpen ? "100%" : "0",
                    padding: isSidebarOpen ? "20px" : "20px 0",
                    opacity: isSidebarOpen ? "1" : "0",
                }}
            >
                <X
                    className="header__sidebar--close-btn"
                    size="30px"
                    strokeWidth="2.5px"
                    onClick={() => setIsSidebarOpen(false)}
                />
                <div className="nav-item">
                    <a href="#home">Home</a>
                </div>
                <div className="nav-item">
                    <a href="#features">Features</a>
                </div>
                <div className="nav-item">
                    <a href="#pricing">Pricing</a>
                </div>
                <div className="nav-item">
                    <a href="#partners">Partners</a>
                </div>
                <div className="nav-item">About</div>
                <div className="nav-item">Contact</div>
                <input
                    className="header__sidebar--submit-input"
                    placeholder="Your Email"
                />
                <Button type="subscribe" size="small">
                    Subscribe
                </Button>
            </nav>
        </header>
    );
};
