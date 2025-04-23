import img from '../assets/react.svg';
import { useState, useEffect } from 'react';

export default function Header() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "gTwo"
    );

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <header>
            <div className="logo">
                <img src={img} alt="logo" />
                <h1>TASKEFY</h1>
            </div>
            
            <div className="themeSelector">
                <span 
                    className={`light ${theme === "light" ? "activeTheme" : ""}`} 
                    onClick={() => setTheme("light")}
                ></span>
                <span 
                    className={`medium ${theme === "medium" ? "activeTheme" : ""}`} 
                    onClick={() => setTheme("medium")}
                ></span>
                <span 
                    className={`dark ${theme === "dark" ? "activeTheme" : ""}`} 
                    onClick={() => setTheme("dark")}
                ></span>
                <span 
                    className={`gOne ${theme === "gOne" ? "activeTheme" : ""}`} 
                    onClick={() => setTheme("gOne")}
                ></span>
                <span 
                    className={`gTwo ${theme === "gTwo" ? "activeTheme" : ""}`} 
                    onClick={() => setTheme("gTwo")}
                ></span>
                <span 
                    className={`gThree ${theme === "gThree" ? "activeTheme" : ""}`} 
                    onClick={() => setTheme("gThree")}
                ></span>
            </div>
        </header>
    );
}
