import Container from "components/common/Container";
import Heading from "components/Heading";

import { Link } from "react-router-dom";

const Sorting = () => {
    let test = "bubble";
    return(
    <Container>
        <Heading title="Sorting" backLink="/" />
        <div className=" grid grid-cols-4 p-4 my-4">
        <Link to="/sorting/bubble" className="inline-block">
                    <div className="hover:ring hover:ring-orangeCustom hover:-translate-y-1 rounded-md transition-all p-4 flex flex-col items-center justify-center">
                        <p className="text-lg">BubbleSort</p>
                        
                    </div>
                </Link>

        </div>
    </Container>

    )
}


export default Sorting;
