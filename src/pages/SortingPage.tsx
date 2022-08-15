import Container from "components/common/Container";
import { useState, useEffect } from "react";
import Heading from "components/Heading";
import { useParams, useNavigate } from "react-router";
import { SortingAlgorithms, SetSortingAlgorithms} from "context/SortingEnum";
import SortingVisualizer from "components/SortingVisualizer";

type Props = {
    category: string;
    type: string;
}   
type algorithm={
    name: string;
    description: string;
    complexity: string;
}

function SortingPage(){
    const { type, category } = useParams<keyof Props>() as Props;
    const navigate = useNavigate();
    const [algorithm, setAlgorithm] = useState< null |algorithm >(null);
    // console.log(algorithm);
    
    useEffect(() => {
        const algorithmData = SetSortingAlgorithms[type];
        if (algorithmData == null) {
            navigate("/error");
            return;
          }
        setAlgorithm(algorithmData);
    } , []);

    if(algorithm === null){
        return <div className="delay-1000">Loading...</div>
    }
    
    const { name, description, complexity } = algorithm;
    return(
        <Container>
            <Heading title={name} backLink={`/${category}`} />
            <SortingVisualizer type={type} />
        </Container>
    )
}

export default SortingPage;