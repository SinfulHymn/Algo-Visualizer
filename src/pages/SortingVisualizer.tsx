import Container from "components/common/Container";
import Heading from "components/Heading";
import { useParams } from "react-router";

// console.log(algorithm);


function SortingVisualizer(){
    const {algorithm} = useParams();
    return(
        <Container>
            <Heading title={algorithm || ""} backLink="/" />
        </Container>
    )
}

export default SortingVisualizer;