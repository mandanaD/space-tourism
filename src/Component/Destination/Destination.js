import "./Destination.css"
import Moon from "../../assets/destination/image-moon.png"
import Mars from "../../assets/destination/image-mars.png"
import Europa from "../../assets/destination/image-europa.png"
import Titan from "../../assets/destination/image-titan.png"
import {useState} from "react";

const Destination = () => {
    const state = [
        {
            name: "Moon",
            img: Moon,
            description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help
                            regain perspective and come back refreshed. While you’re there, take in some history
                            by visiting the Luna 2 and Apollo 11 landing sites.`,
            distance: "384,400 km",
            travelTime: "3 days",
        },
        {
            name: "Mars",
            img: Mars,
            description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                       the tallest planetary mountain in our solar system. It’s two and a half times 
                       the size of Everest!`,
            distance: "225 mil. km",
            travelTime: "9 months",
        }, {
            name: "Europa",
            img: Europa,
            description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                        winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                        ice skating, curling, hockey, or simple relaxation in your snug 
                        wintery cabin.`,
            distance: "628 mil. km",
            travelTime: "3 years",
        },
        {
            name: "Titan",
            img: Titan,
            description: `The only moon known to have a dense atmosphere other than Earth, Titan 
                         is a home away from home (just a few hundred degrees colder!). As a 
                         bonus, you get striking views of the Rings of Saturn.`,
            distance: "1.6 bil. km",
            travelTime: "7 years",
        }

    ]
    const [selected, setSelected] = useState("Moon")
    const selectHandler = (value) => {
        setSelected(value)
    }
    const item = state.find((item) => item.name === selected)
    return (
        <div className={"Destination"}>
            <div className="Des-container">
                <div className={"up ff-sans-cond fs-500 letter-spacing-1 text-white uppercase"}>
                    <span>
                        01
                    </span>
                    Pick your destination
                </div>
                <div className={"down"}>
                    <img src={item.img} alt=""/>
                    <div className={"text"}>
                        <div className="des text-light uppercase ff-sans-cond fs-200 letter-spacing-2">
                            <div onClick={() => selectHandler("Moon")}
                                 className={selected === "Moon" ? "uLine" : "no-uLine"}>Moon
                            </div>
                            <div onClick={() => selectHandler("Mars")}
                                 className={selected === "Mars" ? "uLine" : "no-uLine"}>Mars
                            </div>
                            <div onClick={() => selectHandler("Europa")}
                                 className={selected === "Europa" ? "uLine" : "no-uLine"}>Europa
                            </div>
                            <div onClick={() => selectHandler("Titan")}
                                 className={selected === "Titan" ? "uLine" : "no-uLine"}>Titan
                            </div>
                        </div>
                        <div className={"name uppercase ff-serif fs-800"}>
                            {item.name}
                        </div>
                        <div className={"description text-light"}>
                            {item.description}
                        </div>
                        <div className={"last"}>
                            <div className={"text-light uppercase ff-sans-cond fs-200 letter-spacing-2"}>
                                Avg. distance
                                <p className={"ff-serif fs-400 text-white"}>
                                    {item.distance}
                                </p>
                            </div>
                            <div className={"text-light uppercase ff-sans-cond fs-200 letter-spacing-2"}>
                                Est. travel time
                                <p className={"ff-serif fs-400 text-white"}>
                                    {item.travelTime}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Destination;