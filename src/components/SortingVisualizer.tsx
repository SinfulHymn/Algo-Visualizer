import classNames from "classnames";
import { SetSortingAlgorithms } from "context/SortingEnum";
import { useEffect, useState } from "react";

type Props = {
    type: string;
}

const buttons = [5, 10, 15, 20, 25];
const defaultButton = buttons[1];
console.log(defaultButton);

// const SortingVisualizer = ({ type }) => {

//     const [size, setSize] = useState(defaultButton);
//     const [array, setArray] = useState([]);
//     const [sorted, setSorted] = useState(false);
//     const [speed, setSpeed] = useState(1);
//     const [algorithm, setAlgorithm] = useState(null);
//     const [algorithms, setAlgorithms] = useState([]);
//     const [category, setCategory] = useState(null);
//     const [categoryName, setCategoryName] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isError, setIsError] = useState(false);
//     const [isSorting, setIsSorting] = useState(false);
//     const [isSorted, setIsSorted] = useState(false);
//     const [isStopped, setIsStopped] = useState(false);
//     const [isPaused, setIsPaused] = useState(false);
//     const [isReset, setIsReset] = useState(false);
//     const [isResetting, setIsResetting] = useState(false);





function SortingVisualizer({ type }: Props) {
    const [size, setSize] = useState<number>(defaultButton);
    const [array, setArray] = useState<number[]>(generateArray(defaultButton));
    const [sorted, setSorted] = useState<boolean>(false);
    const [speed, setSpeed] = useState<number>(1);
    const [algorithm, setAlgorithm] = useState<string | null>(null);
    const [algorithms, setAlgorithms] = useState<string[]>([]);
    const [category, setCategory] = useState<string | null>(null);
    const [categoryName, setCategoryName] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [isSorting, setIsSorting] = useState<boolean>(false);
    const [isSorted, setIsSorted] = useState<boolean>(false);
    const [isStopped, setIsStopped] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [isReset, setIsReset] = useState<boolean>(false);
    const [isResetting, setIsResetting] = useState<boolean>(false);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isRunningAnimation, setIsRunningAnimation] = useState<boolean>(false);
    

    function generateArray(size: number, min: number = 3, max: number = 40) {
        const array: number[] = [];
        while(array.length < size) {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            if(!array.includes(random)) {
                array.push(random);
            }
        }
        return array;
    }


    function handleSizeChange(size: number) {
        setSize(size);
        setArray(generateArray(size));
    }

    

    return (
        <div className="relative">

            <div className="w-full h-[450px] mx-auto bg-emerald-100 dark:bg-gray-500 flex justify-center transition-colors items-end rounded-md shadow-sm">

            {/* button array controll */}
            <div className="absolute flex flex-1 justify-center top-0">
                    {buttons.map(button => (
                        <button
                            key={button}
                            className={classNames("flex justify-center px-5 py-1 mx-1 my-1 w-9 rounded-md text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-700 dark:bg-gray-500", {
                                "text-white": size === button,
                                "bg-emerald-500": size !== button,
                                "bg-emerald-700": size === button,
                            })}
                            onClick={() => handleSizeChange(button)}
                        >
                            {button}
                        </button>
                    ))}
                </div>
            
            {/* button array control end */}
            <div className="">
                {array.map((value, index) => (
                    <div
                        key={index}
                        className={classNames("flex justify-center px-5 py-1 mx-1 my-1 w-9 rounded-md text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-700 dark:bg-gray-500", { "text-white": value === array[index], "bg-emerald-500": value !== array[index], "bg-emerald-700": value === array[index] })} > {value} </div> 
                ))}
                
            </div>               
            </div>
        </div>



    )
}

export default SortingVisualizer