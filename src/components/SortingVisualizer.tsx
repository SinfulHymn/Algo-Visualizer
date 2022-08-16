import classNames from "classnames";
import { SetSortingAlgorithms, SortingAlgorithms } from "context/SortingEnum";
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
    SORTED = "SORTED",
    INSERT = "INSERT",
    WATCH = "WATCH"
}



const buttons = [5, 10, 15, 20, 25];
const defaultButton = buttons[1];

const speedButtons  = [0.5,1,2]
const defaultSpeed = speedButtons[1];



function SortingVisualizer({ type }: Props) {
    console.log(type);
    
    // array size
    const [size, setSize] = useState<number>(defaultButton);
    // the array of numbers to sort
    const [array, setArray] = useState<number[]>(generateArray(defaultButton));
    const [unmodifiedArray, setUnmodifiedArray] = useState<number[]>();
    const [speed, setSpeed] = useState<number>(defaultSpeed);
    const [animations, setAnimations] = useState<any[]>([]);
    const [compare, setCompare] = useState<number[]>([]);
    const [swap, setSwap] = useState<number[]>([]);
    const [sorted, setSorted] = useState<number[]>([]);
    const [timeoutarray, setTimeoutarray] = useState<[]>([]);
//    console.log('animations', animations);
   
    // console.log('speed', speed);
    
     console.log('sorted', sorted);
     


    function generateArray(size: number, min: number = 3, max: number = 35) {
        const array: number[] = [];
        while(array.length < size) {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            if(!array.includes(random)) {
                array.push(random);
            }
        }
        return array;
    }
    
    function handleSpeedChange(speed: number) {
        setSpeed(speed);
    }

    function handleSizeChange(size: number) {
        setSize(size);
        setArray(generateArray(size));
        console.log(compare);
        
    }
    console.log(speed);
    
    function animationIteration(animations: any[]) {
        const length = animations.length;
        
        for(let i = 0; i < length; i++) {
            let timeout = window.setTimeout(() => {
                console.log(timeout);
                setSwap([])
            
            const { state, index1, index2 } = animations[i];
            console.log(state, index1, index2);
            if(state === State.COMPARE) {
                setCompare([index1, index2]);
            }
            if(state === State.SWAP) {
                setSwap([index1, index2]); 
                const arrayCopy = array
                const temp = arrayCopy[index1];
                arrayCopy[index1] = arrayCopy[index2];
                arrayCopy[index2] = temp;
                setArray(arrayCopy);
                setCompare([]);
            }
            if(state === State.SORTED) {
                setSorted([...sorted, index1]);
                setCompare([]);
            }
            // setCompare([]);
        }, i * (200/ speed));
        }  


    }
    


    function handleStart(){
        console.log('start');
        setTimeoutarray([]);
        setUnmodifiedArray(array);
        animationIteration(animations);
        
    }

    function handleStop(){
        console.log('stop');
        clearTimeout();
        setAnimations([]);
    }

    //function to iterate through the animations array
    //check what the type is if compare add array of the indexes in the state ex. [3,4]
    // conditionall render the color of the if the indexx is in = state compare index
    // if type is swap add array of the indexes in the state ex [3,4]
    // then manipulate the original array swap [3] with [4] // make sure to rewrite bubble to take a copy of the array to not modify it     
    function bubbleSort(array: number[]){
        const animations = [];
        const sorted = []
        const length = array.length;
        for(let i = 0; i < length; i++) {
            for(let j = 0; j < length -i - 1; j++) {
                animations.push({
                    state: State.COMPARE,
                    index1: j,
                    value1: array[j],
                    index2: j + 1,
                    value2: array[j+1]

                });
                if(array[j] > array[j + 1]) {
                    animations.push({
                        state: State.SWAP,
                        index1: j,
                        value1: array[j],
                        index2: j + 1,
                        value2: array[j+1]
                    });
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                }
            }
            animations.push({
                state: State.SORTED,
                index1: length - i - 1,
            });
        }
        // return animations;
        return setAnimations(animations);
    }


    console.log(animations);
    
    // on load sort my copy of array
    // run use effect when the size of my array changes because I need to resort the new array size
    useEffect(() => {
            bubbleSort([...array]);


    }, [size]);



    return (
        <div className="relative">

            <div className="w-full h-[450px] mx-auto bg-emerald-200 dark:bg-gray-500 flex justify-center transition-colors items-end rounded-lg shadow-lg overflow-hidden">

            {/* button array controll */}
            <div className="absolute flex justify-center  rounded-b-md top-0 shadow-md bg-emerald-500 overflow-hidden ">
                    {buttons.map(button => (
                        <button
                            key={button}
                            className={classNames("flex justify-center transition-colors  px-5 py-1   w-10  text-sm   text-white bg-emerald-500 hover:bg-emerald-700 dark:bg-gray-500", {
                                "border-emerald-500 dark:border-gray-500": button === size,
                                "bg-emerald-500": size !== button,
                                "bg-emerald-700 hover:bg-emerald-900": size === button,
                            })}
                            onClick={() => handleSizeChange(button)}
                        >
                            {button}
                        </button>
                    ))}
                </div>
            
            {/* button array control end */}
            {/* speed controll */}
            <div className="absolute flex flex-col justify-center  rounded-tr-md top-0 right-0 rounded-bl-md p- shadow-md bg-emerald-500 overflow-hidden ">
                    {speedButtons.map(item => (
                        <button
                            key={item}
                            className={classNames("flex justify-center px-5 py-1 transition-colors w-8 text-sm  text-white bg-emerald-500 hover:bg-emerald-700 dark:bg-gray-500", {
                                "border-emerald-500 dark:border-gray-500": item === speed,
                                "bg-emerald-500": item !== speed,
                                "bg-emerald-700 hover:bg-emerald-900": item === speed,
                            })}
                            onClick={() => handleSpeedChange(item)}
                        >
                            {item}x
                        </button>
                    ))}
            </div>
            {/* speed controll end */}
            {/* array of bar */}
            <div className="flex items-end w-full justify-center">
                {array.map((value, index) => (
                    <>
                    <div
                        style={ { height: `${value*10}px` } }
                        key={index}
                        className={classNames("pb-1 w-4 sm:w-6  border-2 border-b-0 font-semibold text-center bg-slate-500 border-slate-800  mx-0.5 transition-colors rounded-t-md text-white flex justify-center items-end text-xs ", {
                            " bg-amber-500 border-amber-600 dark:bg-gray-500": index === compare[0] || index === compare[1],
                            "bg-red-600 border-red-700 dark:bg-gray-500": index === swap[0] || index === swap[1],
                            "bg-green-600 border-green-700 dark:bg-gray-500": sorted.includes(index),
                            // function that iterates the animations
                            // state taht 
                            // set currentIteration

                            // { state.compare, index1: 0 index2: 1} 
                            // css orange : array in index 1 && index 2 
                            //                           

                            
                        })}

                    >
                        {value}
                    </div>
                    </>
                ))}
                

            </div>
                        
        </div>
        <div className="flex justify-center my-3 ">

        <button className="bg-emerald-500 hover:bg-emerald-700 text-white  font-normal rounded-md px-6 py-1 mx-1" onClick={()=> handleStart()}>
                        start
        </button>
        <button className="bg-emerald-500 hover:bg-emerald-700 text-white  font-normal rounded-md px-6 py-1 mx-1" onClick={()=> handleStop()}>
                        stop
        </button>
        </div>
    </div>

    )
}

export default SortingVisualizer

// function bubbleSort(array: number[]){
//     const animations = [];
//     const length = array.length;
//     for(let i = 0; i < length; i++) {
//         for(let j = 0; j < length -i - 1; j++) {
//             animations.push({
//                 type: State.COMPARE,
//                 index1: j,
//                 index2: j + 1
//             });
//             if(array[j] > array[j + 1]) {
//                 animations.push({
//                     type: State.SWAP,
//                     index1: j,
//                     index2: j + 1
//                 });
//                 [array[j], array[j + 1]] = [array[j + 1], array[j]];
//             }
//         }