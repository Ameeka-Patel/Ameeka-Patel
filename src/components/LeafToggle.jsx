import {useEffect, useState } from "react";
import {Wheat, WheatOff} from "lucide-react";
import {cn} from "@/lib/utils"; // 

export const LeafToggle = () => {

    const [isLeafMode, setIsLeafMode] = useState(false);

    
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "leaf") {
            setIsLeafMode(true);
            document.documentElement.classList.add("leaf-bg");
        } else {
            setIsLeafMode(false);
            document.documentElement.classList.remove("leaf-bg");
        }
    }, []);

    //to switch from leaf mode to plain view and vice versa
    const toggleTheme = () => {
        if (isLeafMode) {
            // leaf -> no leaf
            localStorage.setItem("theme", "noLeaf");
            setIsLeafMode(false);
            document.documentElement.classList.remove("leaf-bg");
        } else {
            //no leaf -> leaf
            localStorage.setItem("theme", "leaf");
            setIsLeafMode(true)
            document.documentElement.classList.add("leaf-bg");
        }
    }


    return (
    <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-9 right-3 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )}>
        {isLeafMode ? (
            <WheatOff className="h-6 w-6 text-orange-300"/>
        ) : (
            <Wheat className="h-6 w-6 text-yellow-500" /> 
        )}
    </button>
    );
};