import Container from "components/common/Container";
import Heading from "components/Heading";
import { Link, useParams } from "react-router-dom";
import { SortingAlgorithms, SetSortingAlgorithms } from "context/SortingEnum";
import { useEffect, useState } from "react";



type Props = {
    category: string;
};
const Sorting = () => {
    const {category} = useParams<keyof Props>() as Props;
    const [categoryName, setCategoryName] = useState<string | null>(null);
    const [algorithms, setAlgorithms] = useState<SortingAlgorithms[]>([]);
    // useEffect(() => {
    //     const ob = SetSortingAlgorithms[category];
    //     console.log(ob);
        
    //     if (ob == null) {
    //         return;
    //     }
    //     setCategoryName(ob.name);
    //     // setAlgorithms(ob.algorithms);
    // } , []);
    // if(categoryName === null){
    //     return <div className="delay-1000">Loading...</div>
    // }
    

    return(
    <Container>
        <Heading title={`${category}`}backLink="/" />
        <div className=" grid grid-cols-4 gap-4 p-4 my-4">
        {Object.values(SortingAlgorithms).slice(0,2).map(algorithm => {
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
