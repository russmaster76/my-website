import Home from "../Home/Home"
import NavBar from "../NavBar/NavBar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function MySite() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    )
}
export default MySite;