import { useState, useEffect } from "react";

const Insertion = () => {
    const [sort, setSort] = useState(false);
    const [numbers, setNumbers] = useState([]);
    // const [order, setOrder] = useState('asc');

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

    const startSorting = async() => {
        let nums = numbers;

        for(let i = 1; i <= nums.length - 1; i++){
            let j = i;
            while(j > 0 && nums[j - 1] > nums[j]){
                const element1 = document.getElementById(`element-id-${j - 1}`);
                const element2 = document.getElementById(`element-id-${j}`);

                element1.classList.remove('bg-warning');
                element2.classList.remove('bg-warning');

                element1.classList.add('bg-danger');
                element2.classList.add('bg-danger');

                const element1Height = parseInt(element1.style.height.replace('px', ''));
                const element2Height = parseInt(element2.style.height.replace('px', ''));

                await sleep(500);

                element1.style.height = `${element2Height}px`;
                element2.style.height = `${element1Height}px`;

                const tempText = element1.innerText;
                element1.innerText = element2.innerText;
                element2.innerText = tempText;

                const temp = nums[j];
                nums[j] = nums[j - 1];
                nums[j - 1] = temp;

                element1.classList.remove('bg-danger');
                element2.classList.remove('bg-danger');

                element1.classList.add('bg-warning');
                element2.classList.add('bg-warning');

                j--;
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

    useEffect(() => {
        generateRandomArray();
    }, []);

    return (
        <div>
            <h3 className="text-dark text-center mb-3">Insertion Sort</h3>
            <div className="d-flex justify-content-around align-items-center mb-3">
                <div className="mx-3">
                    <button type="button" className="btn btn-outline-primary" onClick={generateRandomArray} disabled={sort}>Generate Random Array</button>
                </div>
                <div className="mx-3 d-flex">
                    {/* <select value={order} className="form-control mx-3" onChange={e => setOrder(e.target.value)} disabled={numbers.length === 0 || !sort}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select> */}
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

export default Insertion;