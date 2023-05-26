import './App.css';
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Slide4 from "./components/Slide4";
import Slide5 from "./components/Slide5";
import Slide6 from "./components/Slide6";
import Footer from "./components/Footer";
import Game from "./components/game/Game";

function App() {
    return (
        <div className="App">
            <Slide1/>
            <Slide2/>
            <Game/>
            <Slide3/>
            <Slide4/>
            <Slide5/>
            <Slide6/>
            <Footer/>
        </div>
    );
}

export default App;
