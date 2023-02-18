import { useState } from "react";

const Bubble = () => {
    const [sort, setSort] = useState(false);
    const [numbers, setNumbers] = useState([]);

    const generateRandomArray = () => {
        const numberOfElements = 50;
        const nums = [];
        for(let i = 1; i <= numberOfElements; i++){
            let random = getRandomNumber(numberOfElements);

            while(nums.includes(random)){
                random = getRandomNumber(numberOfElements);
            }
            
            nums.push(random);
        }
        setNumbers(nums);
        setSort(true);
    }
    
    const startSorting = async () => {
        let nums = numbers;
        for(let i = 0; i < nums.length; i++){
            for(let j = 0; j < (nums.length - i - 1); j++){
                const element1 = document.getElementById(`element-id-${j}`);
                const element2 = document.getElementById(`element-id-${j+1}`);

                element1.classList.remove('bg-warning');
                element2.classList.remove('bg-warning');

                element1.classList.add('bg-success');
                element2.classList.add('bg-success');

                const element1Height = parseInt(element1.style.height.replace('px', ''));
                const element2Height = parseInt(element2.style.height.replace('px', ''));

                await sleep(20);

                if(element1Height > element2Height){
                    element1.style.height = `${element2Height}px`;
                    element2.style.height = `${element1Height}px`;
                    const temp = nums[j];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = temp;
                }

                element1.classList.remove('bg-success');
                element2.classList.remove('bg-success');

                element1.classList.add('bg-warning');
                element2.classList.add('bg-warning');
            }
        }
        setNumbers(nums);
        setSort(false);
    }

    const getRandomNumber = (number) => {
        return Math.round(Math.random() * (number - 1)) + 1;
    }

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <div>
            <h3 className="text-dark text-center mb-3">Bubble Sort</h3>
            <div className="row mb-3">
                <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <button type="button" className="btn btn-outline-primary" onClick={generateRandomArray} disabled={sort}>Generate Random Array</button>
                </div>
                <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <button type="button" className="btn btn-outline-primary" onClick={startSorting} disabled={numbers.length === 0 || !sort}>Start Sorting</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-end">
                    {numbers.map((number, index) => (
                        <div key={`element-${index}`} id={`element-id-${index}`} className="rounded mx-1 bg-warning" style={{width: '10px', height: `${10 * number}px`}}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Bubble;