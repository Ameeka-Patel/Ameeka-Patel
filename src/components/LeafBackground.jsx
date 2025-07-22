import { useState, useEffect } from 'react';


export const LeafBackground = () => {
    const storedTheme = localStorage.getItem("theme");

    //leaves: id, size, x, y, opacity, animationDuration
    const [leaves, setLeaves] = useState([]);


    useEffect(() => {
        generateLeaves();

        const handleResize = () => {
            generateLeaves();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);



    // leaf generation 
    const generateLeaves = () => {
        //generate 1-4px leaves based on size of display window 
        const numberOfLeaves = Math.floor(
            window.innerWidth * window.innerHeight / 100000
        );

        const newLeaves = []

        for (let i = 0; i < numberOfLeaves; i++) {
            newLeaves.push({
                id: i,
                size: Math.random() * 10 + 5,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }

        setLeaves(newLeaves);
    };


    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50">
            {/*leaves*/}
            {leaves.map((leaf) => (
                <div
                    key={leaf.id}
                    className="leaf animate-leaf"
                    style={{
                        width: leaf.size + "px",
                        height: leaf.size + 10 + "px",
                        left: leaf.x + "%",
                        top: leaf.y + "%",
                        animationDelay: leaf.delay,
                        animationDuration: leaf.animationDuration + 4 + "s",
                    }}
                />
            ))}
        </div>
    );



};