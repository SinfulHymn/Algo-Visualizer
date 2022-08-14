import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Category from "pages/Category";
import SortingPage from "pages/SortingPage";

const ContentRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Category />}/>
            <Route path="/:category/:type" element={<SortingPage />}/>
        </Routes>

    );
}

export default ContentRouter;