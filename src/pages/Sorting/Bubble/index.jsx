import { useState } from "react";

const Bubble = () => {
    const [sort, setSort] = useState(false);
    const [numbers, setNumbers] = useState([]);
    const [order, setOrder] = useState('asc');

    const generateRandomArray = () => {
        const numberOfElements = 10;
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

                element1.classList.add('bg-info');
                element2.classList.add('bg-info');

                const element1Height = parseInt(element1.style.height.replace('px', ''));
                const element2Height = parseInt(element2.style.height.replace('px', ''));
                await sleep(500);

                if(order === 'asc'){
                    if(element1Height > element2Height){
                        element1.style.height = `${element2Height}px`;
                        element2.style.height = `${element1Height}px`;
    
                        const tempText = element1.innerText;
                        element1.innerText = element2.innerText;
                        element2.innerText = tempText;
    
                        const temp = nums[j];
                        nums[j] = nums[j + 1];
                        nums[j + 1] = temp;
                    }
                }else if(order === 'desc'){
                    if(element1Height < element2Height){
                        element1.style.height = `${element2Height}px`;
                        element2.style.height = `${element1Height}px`;
    
                        const tempText = element1.innerText;
                        element1.innerText = element2.innerText;
                        element2.innerText = tempText;
    
                        const temp = nums[j];
                        nums[j] = nums[j + 1];
                        nums[j + 1] = temp;
                    }
                }
                

                element1.classList.remove('bg-info');
                element2.classList.remove('bg-info');

                element1.classList.add('bg-warning');
                element2.classList.add('bg-warning');
            }
            const sortedElement = document.getElementById(`element-id-${numbers.length - i - 1}`);
            sortedElement.classList.remove('bg-warning');
            sortedElement.classList.add('bg-success');
        }
        setNumbers(nums);
        setSort(false);
        done();
    }

    const getRandomNumber = (number) => {
        return Math.round(Math.random() * (number - 1)) + 1;
    }

    const done = async () => {
        for(let i = 0; i < numbers.length; i++){
            const element = document.getElementById(`element-id-${i}`);
            element.classList.remove('bg-success');
            element.classList.add('bg-warning');
            await sleep(50);
        }
    }

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <div>
            <h3 className="text-dark text-center mb-3">Bubble Sort</h3>
            <div className="d-flex justify-content-around align-items-center mb-3">
                <div className="mx-3">
                    <button type="button" className="btn btn-outline-primary" onClick={generateRandomArray} disabled={sort}>Generate Random Array</button>
                </div>
                <div className="mx-3 d-flex">
                    <select value={order} className="form-control mx-3" onChange={e => setOrder(e.target.value)} disabled={numbers.length === 0 || !sort}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                    <button type="button" className="btn btn-outline-primary text-nowrap mx-3" onClick={startSorting} disabled={numbers.length === 0 || !sort}>Start Sorting</button>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-end">
                {numbers.map((number, index) => (
                    <div key={`element-${index}`} id={`element-id-${index}`} className="rounded mx-1 bg-warning text-white d-flex justify-content-center align-items-center fw-bold" style={{width: '30px', height: `${30 * number}px`}}>{number}</div>
                ))}
            </div>
        </div>
    )
}


export default Bubble;