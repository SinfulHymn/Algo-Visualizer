import classNames from "classnames";
import { useEffect, useState } from "react";

const buttons = [5, 10, 15, 20, 25];
const defaultButton = buttons[1];
console.log(defaultButton);



type Props = {
    type: string;
}

function SortingVisualizer({ type }: Props) {
    const [size, setSize] = useState(defaultButton);

    return (
        <div className="relative">

            <div className="w-full h-[450px] mx-auto bg-emerald-100 dark:bg-gray-500 flex justify-center transition-colors items-end rounded-md shadow-sm">

            <div className="absolute flex justify-center top-0">
                    {buttons.map(button => (
                        <button
                            key={button}
                            className={classNames("px-2 py-1 mx-1 my-1 rounded-md text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-700 dark:bg-gray-500", {
                                "text-white": size === button,
                                "bg-emerald-500": size !== button,
                                "bg-emerald-700": size === button,
                            })}
                            onClick={() => setSize(button)}
                        >
                            {button}
                        </button>
                    ))}
                </div>
            </div>


        </div>



    )
}

export default SortingVisualizer