import Container from "components/common/Container";
import Heading from "components/Heading";
import { Link, useParams } from "react-router-dom";
import { SortingAlgorithms, SetSortingAlgorithms } from "context/SortingEnum";
import { useState } from "react";


const Sorting = () => {
    const {category} = useParams();
    const [categoryName, setCategoryName] = useState<string | null>(null);

    return(
    <Container>
        <Heading title={`${category}`}backLink="/" />
        <div className=" grid grid-cols-4 gap-4 p-4 my-4">
        {Object.values(SortingAlgorithms).map(algorithm => {
            const { name } = SetSortingAlgorithms[algorithm];
            return (
                <Link to={`/Sorting/${algorithm}`} className="inline-block" key={algorithm}>
                    <div className="hover:ring hover:ring-orangeCustom hover:-translate-y-1 rounded-md transition-all p-4 flex flex-col items-center justify-center">
                         <p className="text-lg">{name}</p>       
                    </div>
                </Link>
            )}
            )}
        </div>
    </Container>

    )
}


export default Sorting;
