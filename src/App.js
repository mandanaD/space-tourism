import './App.css';
import Container from "./Container/Container";
import Wrapper from "./hoc/Wrapper";
import {BrowserRouter as Router} from "react-router-dom";
function App() {
    return (
        <Wrapper>
            <Router>
            <Container/>
            </Router>
        </Wrapper>
    );
}

export default App;
