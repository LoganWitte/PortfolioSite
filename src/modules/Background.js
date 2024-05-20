import { useEffect } from "react";

export default function Background() {
    
    useEffect(() => {
        //Get the background element
        const background = document.getElementById("background");

        //Function to create and animate a splotch
        function createSplotch() {
            const splotch = document.createElement("div");
            splotch.classList.add("splotch");

            //Generate random coordinates within the background container
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const width = (1 + Math.random()) * 10;
            //const height = (1 + Math.random()) * 10;
            const height = width;

            //Set splotch size & position
            splotch.style.left = `calc(${x}% - 0.5 * ${width}em)`;
            splotch.style.top = `calc(${y}% - 0.5 * ${height}em)`;
            splotch.style.width = `${width}em`;
            splotch.style.height = `${height}em`;

            background.appendChild(splotch);

            setTimeout(() => {
                splotch.remove(); 
            }, 10000); //Remove the splotch after a certain duration in ms
        }

        //Create splotches at intervals in ms
        const splotchInterval = setInterval(createSplotch, 100);

        //Cleanup function
        return () => {
            clearInterval(splotchInterval);
        };
    }, []);

    return (
        <div className="background" id="background"/>
    );
}