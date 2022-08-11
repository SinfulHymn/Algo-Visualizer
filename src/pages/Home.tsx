import { Link } from "react-router-dom";
import Test from '../images/BubbleSort.svg';

const Home = () => {
    return (
        <div className="container grow mx-auto p-6 sm:py-6">

            <div className="text-sm sm:text-base p-4">
                <h1 className=" text-xl sm:text-3xl font-bold text-center text-slate-600">
                    Welcome to <span className=" text-blueCustom">Algo</span><span className="text-orangeCustom">Visualizer</span>!
                </h1>
                <p className="text-center text-slate-600 my-1">
                    This is a web application that allows you to visualize algorithms.
                </p>
                <p className="text-center text-slate-600 my-1">
                    You can use it to visualize sorting algorithms, searching algorithms, and pathfinding algorithms.
                </p>
                <p className="text-center text-slate-600 my-1">
                    You can also use it to visualize the execution of a program.
                </p>
            </div>

            <div className="grid lg:grid-cols-4">
                <Link to="/sorting">
                    <div className="p-4">
                        <p>Sorting</p>
                        <object type="image/svg+xml" data={Test}>svg-animation</object>
                    </div>

                </Link>

            </div>

        </div>
    );
}

export default Home;
