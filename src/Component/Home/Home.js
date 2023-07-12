import "./Home.css"
import {useHistory} from "react-router-dom";

const Home = () => {
    let history=useHistory()
    return (
        <main className={"Home"}>
            <div className={"Home-container ff-sans-normal"}>
                <div className="text text-white">
                    <div className={"ff-sans-cond fs-500 letter-spacing-1 text-light top"}>
                        So, you want to travel to
                    </div>
                    <div className={"uppercase ff-serif fs-900 middle"}>
                        Space
                    </div>
                    <div className={"fs-400 text-light bottom"}>
                        Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!
                    </div>
                </div>
                <div onClick={()=>{history.push("/Destination")}} className={"shape uppercase"}>
                    Explore
                    <div className="shape-overlay"/>
                </div>
            </div>

        </main>
    );
}

export default Home;