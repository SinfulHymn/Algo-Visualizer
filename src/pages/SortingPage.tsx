import Container from "components/common/Container";
import { useState, useEffect } from "react";
import Heading from "components/Heading";
import { useParams, useNavigate } from "react-router";
import { SortingAlgorithms, SetSortingAlgorithms } from "context/SortingEnum";


const {category}  = useParams();

function SortingVisualizer(){
    const { type, category } = useParams();
    const [algorithm, setAlgorithm] = useState(null);







    useEffect(() => {
        const {name} = SetSortingAlgorithms[`${type}`];
        // setAlgorithm(name);
        
    } , [type]);
    // console.log(algorithm);
    
    return(
        <Container>
            <Heading title="Bubble Sort" backLink={`/${category}`} />
            <div className=" w-full h-[450px] mx-auto bg-emerald-100 dark:bg-gray-500 flex justify-center transition-colors items-end rounded-md shadow-sm ">
                <div className=" flex  self justify-center">
                    <div>
                        test
                    </div>
                    <div>
                        test
                    </div>
                    <div>
                        test
                    </div>
                    <div>
                        test
                    </div>
                    <div>
                        test
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default SortingVisualizer;