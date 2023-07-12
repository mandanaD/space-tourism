import "./Crew.css"
import {useState} from "react";
import Commander from "../../assets/crew/image-douglas-hurley.png"
import pilot from "../../assets/crew/image-victor-glover.png"
import Specialist from "../../assets/crew/image-mark-shuttleworth.png"
import Engineer from "../../assets/crew/image-anousheh-ansari.png"

const Crew = () => {
    const [sel, setSel] = useState(0)
    const state = [
        {
            id: 0,
            name: "Douglas Hurley",
            title: "Commander",
            img: Commander,
            des: ` Douglas Gerald Hurley is an American engineer, former
            Marine Corps pilot
            and former NASA astronaut. He launched into space for the third time as
            commander of Crew Dragon Demo-2.`,
        },
        {
            id: 1,
            name: "Mark Shuttleworth",
            title: "Mission Specialist",
            img: Specialist,
            des: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
            the Linux-based Ubuntu operating system. Shuttleworth became the first South 
            African to travel to space as a space tourist.`,
        },
        {
            id: 2,
            name: "Victor Glover",
            title: "Pilot",
            img: pilot,
            des: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
            International Space Station. Glover is a commander in the U.S. Navy where 
            he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
            station systems flight engineer. `,
        },
        {
            id: 3,
            name: "Anousheh Ansari",
            title: "Flight Engineer",
            img: Engineer,
            des: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
            Ansari was the fourth self-funded space tourist, the first self-funded woman to 
            fly to the ISS, and the first Iranian in space.`,
        },
    ]
    let item = state.find((item) => item.id === sel)
    return (
        <div className="crew">
            <div className="crew-container">
                <div className={"up ff-sans-cond fs-500 letter-spacing-1 text-white uppercase"}>
                    <span>02</span>
                    Meet your crew
                </div>
                <div className="sec">
                    <div className="txt">
                        <div className={"title ff-serif uppercase fs-600 "}>{item.title}</div>
                        <div className={"crew-name uppercase ff-serif fs-700 "}>{item.name}</div>
                        <div className={"c-des text-light fs-400"}>
                            {item.des}
                        </div>
                    </div>
                    <div className="dot">
                        <p className={sel===0?"sel":"not-sel"} onClick={() => setSel(0)}>.</p>
                        <p className={sel===1?"sel":"not-sel"} onClick={() => setSel(1)}>.</p>
                        <p className={sel===2?"sel":"not-sel"} onClick={() => setSel(2)}>.</p>
                        <p className={sel===3?"sel":"not-sel"} onClick={() => setSel(3)}>.</p>
                    </div>
                    <img src={item.img} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Crew;