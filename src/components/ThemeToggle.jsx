import { use, useEffect, useState } from "react";
import {Sun, Moon} from "lucide-react";

export const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    //to switch from dark to light mode and vice versa
    const toggleTheme = () => {
        if (isDarkMode) {
            // dark -> light
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            //light -> dark
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true)
        }
    }


    return (
    <button onClick={toggleTheme}>
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300" /> 
        ) : (
            <Moon className="h-6 w-6 text-blue-300"/>
        )}
    </button>
    );
};