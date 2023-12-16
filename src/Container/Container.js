import React from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Home from "../Component/Home/Home";
import Wrapper from "../hoc/Wrapper";
import Destination from "../Component/Destination/Destination";
import Crew from "../Component/Crew/Crew";
import Technology from "../Component/Technology/Technology";

class Container extends React.Component {
    render() {
        return (
            <Wrapper>
                <Navbar/>
                <Switch>
                    <Route exact path={"/space-tourism"}>
                        <Home/>
                    </Route>
                    <Route exact path={"/"}>
                        <Home/>
                    </Route>
                    <Route exact path={"/Destination"}>
                        <Destination/>
                    </Route>
                    <Route exact path={"/Crew"}>
                        <Crew/>
                    </Route>
                    <Route exact path={"/Technology"}>
                        <Technology/>
                    </Route>
                </Switch>
            </Wrapper>
        );
    }
}

export default Container;