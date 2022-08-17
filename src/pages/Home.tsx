import { Link } from "react-router-dom";
import Test from 'images/BubbleSort.svg';
import Container from 'components/common/Container';


export enum AlgorithmCategory {
    Sorting = "Sorting",
    // Pathfinding = "Pathfinding",
}
export type AlgorithmType = {
    name: string;
}

function Home() {
    return (
        <Container>
            <div className="text-sm sm:text-base p-4">
                <h1 className=" text-xl sm:text-3xl font-bold text-center text-slate-600">
                    Welcome to <span className=" text-blueCustom">Algo</span><span className="text-orangeCustom">Visualizer</span>!
                </h1>
                <p className="text-center text-slate-600 my-1">
                    This is a web application that allows you to visualize algorithms.
                </p>
                <p className="text-center text-slate-600 my-1">
                    You can use it to visualize sorting algorithms and maybe pathfinding one day.
                    {/* , searching algorithms, and pathfinding algorithms. */}
                </p>
                {/* <p className="text-center text-slate-600 my-1">
                    You can also use it to visualize the execution of a program.
                </p> */}
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 m-2">
                {Object.values(AlgorithmCategory).map(category => {
                    return (
                        <Link key={category} to={`/${category}`} className="inline-block">
                            <div className="hover:ring hover:ring-orangeCustom hover:-translate-y-1 rounded-md transition-all p-4 flex flex-col items-center justify-center">
                                <p className="text-lg">{category}</p>
                                <object className="pointer-events-none" type="image/svg+xml" data={Test}>svg-animation</object>
                            </div>
                        </Link>
                    )}
                )}
            </div>
        </Container>
    );
}

export default Home;
