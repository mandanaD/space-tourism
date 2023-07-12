import {Link,useLocation} from "react-router-dom";
import ReactLogo from '../../assets/shared/logo.svg';
import {useState,useEffect} from "react";
import "./Navbar.css"

const Navbar = () => {
    const [isShown, setIsShown] = useState(true)
    const [select, setSelect] = useState("")
    let path=useLocation().pathname.slice(1)
    let ClassName = ["Nav"]
    let Hamburger = ["hamburger display"]
    let Close = ["close"]
    if (isShown === false) {
        ClassName = ["Nav hide"]
        Hamburger = ["hamburger"]
        Close = ["close display"]
    }
    useEffect(()=>{
        setSelect(path)
    },[path])
    return (
        <nav className={"Nav-container ff-sans-cond fs-200 letter-spacing-2"}>
            <img src={ReactLogo} alt=""/>
            <button className={Hamburger.toString()} onClick={() => {
                setIsShown(true)
            }}/>
            <button className={Close.toString()} onClick={() => {
                setIsShown(false)
            }}/>
            <div className={ClassName.toString()}>
                <ul>
                    <li className={select===""?"underline":"no-underline"} >
                        <Link to={"/"}>
                            <span>
                            00
                            </span>
                            Home
                        </Link>
                    </li>
                    <li className={select==="Destination"?"underline":"no-underline"}>
                        <Link to={"/Destination"} >
                            <span>
                            01
                            </span>
                            Destination
                        </Link>
                    </li>
                    <li className={select==="Crew"?"underline":"no-underline"} >
                        <Link to={"/Crew"}>
                            <span>
                            02
                            </span>
                            Crew
                        </Link>
                    </li>
                    <li className={select==="Technology"?"underline":"no-underline"}>
                        <Link to={"/Technology"} >
                            <span>
                            03
                            </span>
                            Technology
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;