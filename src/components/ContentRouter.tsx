import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sorting from "../pages/Sorting";

const ContentRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sorting" element={<Sorting />}/>
        </Routes>

    );
}

export default ContentRouter;