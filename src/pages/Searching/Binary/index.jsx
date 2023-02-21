import { useEffect, useState } from "react";
import ToastMessage from "../../../components/ToastMessage";

const Binary = () => {
    const [search, setSearch] = useState('');
    const [numbers, setNumbers] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');

    const generateRandomArray = () => {
        const numberOfElements = 20;
        const nums = [];
        for(let i = 1; i <= numberOfElements; i++){
            nums.push(i);
        }
        setNumbers(nums);
    }

    const startSearching = async () => {
        let numberFound = false;
        done();
        console.log("here");
        if(search){
            let low = 0;
            let high = numbers.length - 1;
            let mid = 0;
            while(true){
                if(high < low){
                    break;
                }
                mid = parseInt(low + (high - low) / 2);
                console.log(mid);
                const element = document.querySelector(`#element-id-${mid} div`);
                element.classList.remove('bg-danger');
                element.classList.add('bg-warning');
                await sleep(1000);
                if(numbers[mid] === parseInt(search)){
                    setSearch('');
                    numberFound = true;
                    element.classList.remove('bg-warning');
                    element.classList.add('bg-success');
                    break;
                }else{
                    if(numbers[mid] < parseInt(search)){
                        low = mid + 1;
                    }else{
                        high = mid - 1;
                    }
                }
            }
            setSearch('');
            if(!numberFound){
                setToast('Number you are searching is not in array!', 'error');
                setTimeout(() => {
                    unSetToast();
                }, 3000);
            }
        }else{
            setToast('Please enter value to search!', 'error');
            setTimeout(() => {
                unSetToast();
            }, 3000);
        }
    }

    const done = () => {
        for(let i = 0; i < numbers.length; i++){
            const element = document.querySelector(`#element-id-${i} div`);
            element.classList.remove('bg-warning');
            element.classList.add('bg-danger');
        }
    }

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const setToast = (message, type) => {
        setToastMessage(message);
        setToastType(type);
        setShowToast(true);
    }

    const unSetToast = () => {
        setShowToast(false);
        setToastMessage('');
        setToastType('');
    }

    useEffect(() => {
        generateRandomArray();
    }, []);

    return (
        <div>
            <h3 className="text-dark text-center mb-3">Binary Search</h3>
            <div className="row mb-3">
                {/* <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <button type="button" className="btn btn-outline-primary" onClick={generateRandomArray} disabled={search !== ''}>Generate Random Array</button>
                </div> */}
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <input type="number" className="form-control border me-2" placeholder="Enter number to search" value={search} onChange={e => setSearch(e.target.value)} disabled={numbers.length === 0}/>
                    <button type="button" className="btn btn-outline-primary" onClick={startSearching} disabled={numbers.length === 0}>Search</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-end">
                    {numbers.map((number, index) => (
                        <div key={`element-${index}`} id={`element-id-${index}`} className="d-flex flex-column">
                            <span className="text-center">{index}</span>
                            <div className="rounded mx-1 bg-danger text-white d-flex justify-content-center align-items-center" style={{width: '30px', height: '30px'}}>{number}</div>
                        </div>
                    ))}
                </div>
            </div>
            <ToastMessage show={showToast} message={toastMessage} type={toastType} close={() => setShowToast(false)}/> 
        </div>
    );
}

export default Binary;