import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Sorting from "pages/Sorting";
import Pathfinding from "pages/Pathfinding";
import SortingVisualizer from "pages/SortingVisualizer";

const ContentRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sorting" element={<Sorting />}/>
            <Route path="/pathfinding" element={<Pathfinding/>}/>
            <Route path="/sorting/:algorithm" element={<SortingVisualizer />}/>
        </Routes>

    );
}

export default ContentRouter;