import classNames from "classnames";
import { SetSortingAlgorithms } from "context/SortingEnum";
import { useEffect, useState } from "react";
import bubbleSort from "algorithms/sorting/bubbleSort";
import insertionSort from "algorithms/sorting/insertionSort";
import {mergeSort, merge} from "algorithms/sorting/mergeSort";
import quickSort from "algorithms/sorting/quickSort";

type Props = {
    type: string;
}

export enum State{
    COMPARE = "COMPARE",
    SWAP = "SWAP",
    SORT = "SORT",
    INSERT = "INSERT",
    WATCH = "WATCH"
}

class test {
    private arr: number[] = [];
    public arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
console.log(test.prototype.arr2);
console.log("test");

const buttons = [5, 10, 15, 20, 25];
const defaultButton = buttons[1];

const speed  = [0.5,1,2,]
const defaultSpeed = speed[1];



function SortingVisualizer({ type }: Props) {
    // array size
    const [size, setSize] = useState<number>(defaultButton);
    // the array of numbers to sort
    const [array, setArray] = useState<number[]>(generateArray(defaultButton));

    const [sorted, setSorted] = useState<boolean>(false);
    const [speed, setSpeed] = useState<number>(defaultSpeed);
    const [algorithm, setAlgorithm] = useState<string | null>(null);
    const [isSorting, setIsSorting] = useState<boolean>(false);
    const [isSorted, setIsSorted] = useState<boolean>(false);
    const [isStopped, setIsStopped] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isComparing, setIsComparing] = useState([]);
    const [isSwapping, setIsSwapping] = useState<boolean>(false);

   


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

    // const mediaQuery = window.matchMedia("(max-width: 768px)");
    // console.log(mediaQuery);
    

    return (
        <div className="relative">

            <div className="w-full h-[450px] mx-auto bg-emerald-200 dark:bg-gray-500 flex justify-center transition-colors items-end rounded-lg shadow-lg overflow-hidden">

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
            <div className="flex items-end">
                {array.map((value, index) => (
                    <div key={index} className={classNames("w-6 border border-b-0  font-semibold text-center items-end text-white bg-emerald-500 hover:bg-emerald-700 dark:bg-gray-500 text-xs flex justify-center rounded-t-md transition-all pb-1 mx-0.5 ", {
                        "bg-slate-500 text-white border-slate-900": !isComparing && !isSorted && !isSwapping,
                        "bg-orange-300 text-white border-orange-500": isComparing === index,
                        "bg-green-300 text-white border-green-500": isSorted,
                        "bg-red-300 text-white border-red-500": isSwapping,
                    })} style={{height: value*10}} >
                        {value}
                    </div>
                ))}           
              
            </div>
        </div>
        </div>


    )
}

export default SortingVisualizer