import "./Technology.css";
import {useState,useEffect} from "react";
import vehicleDes from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import vehicleMob from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import SpaceportDes from "../../assets/technology/image-spaceport-portrait.jpg";
import SpaceportMob from "../../assets/technology/image-spaceport-landscape.jpg";
import capsuleDes from "../../assets/technology/image-space-capsule-portrait.jpg";
import capsuleMob from "../../assets/technology/image-space-capsule-landscape.jpg";
const Technology = () => {
    const [sel,setSel]=useState("Launch vehicle")
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);
    const state=[
        {
            name:'Launch vehicle',
            des:` A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
                            payload from Earth's surface to space, usually to Earth orbit or beyond. Our
                            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                            it's quite an awe-inspiring sight on the launch pad!`,
            lImg:vehicleDes,
            mImg:vehicleMob

        },
        {
            name:'Spaceport',
            des:`A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch.`,
            lImg:SpaceportDes,
            mImg:SpaceportMob
        },
        {
            name:'Space capsule',
            des:`A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.`,
            lImg:capsuleDes,
            mImg:capsuleMob
        }
    ]
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    let item=state.find((item)=>item.name===sel)
    return (
        <div className="Technology">
            <div className="Technology-container">
                <div className={"up ff-sans-cond fs-500 letter-spacing-1 text-white uppercase"}>
                    <span>03</span>
                    Space launch 101
                </div>
                <div className={"Down"}>
                    <div className="btn">
                        <button className={sel==="Launch vehicle"?"active":"inactive"} onClick={() => setSel("Launch vehicle")}>1</button>
                        <button className={sel==="Spaceport"?"active":"inactive"} onClick={() => setSel("Spaceport")}>2</button>
                        <button className={sel==="Space capsule"?"active":"inactive"} onClick={() => setSel("Space capsule")}>3</button>
                    </div>
                    <div className={"detail"}>
                        <div className={"intro ff-sans-cond fs-200 letter-spacing-2 uppercase text-light"}>
                            The terminology...
                        </div>
                        <div className={"tec-name uppercase ff-serif fs-700"}>
                            {item.name}
                        </div>
                        <div className={"tec-des text-light fs-400"}>
                            {item.des}
                        </div>
                    </div>
                    <img src={windowSize[0]>=880?item.lImg:item.mImg} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Technology;