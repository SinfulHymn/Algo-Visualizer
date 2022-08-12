// import ArrowBackIcon from "images/icons/ArrowBackIcon";
import { ReactElement } from "react";
import { NavLink, Link } from "react-router-dom";
import ArrowBackIcon from "images/icons/ArrowBackIcon";

type Props = {
    title: string;
    backLink: string;
}

function Heading({ title, backLink }: Props): ReactElement {
    return (
        <div className="flex items-center text-center my-2">
            <Link to={backLink} className=" hover:ring-offset-teal-600 hover:transition-shadow rounded-sm hover:ring p-1 flex justify-center items-center absolute ">
                <ArrowBackIcon /> <span>Back</span>
            </Link>
            <div className="text-2xl font-semibold flex-1 flex justify-center ">
                {title}
            </div>
        </div>
    )
}

export default Heading;