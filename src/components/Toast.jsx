import { useEffect } from "react";

const Toast = ({message, type}) => {
    let toastBackground = 'text-bg-primary';
    if(type === 'error'){
        toastBackground = 'text-bg-danger';
    }else if(type === 'success'){
        toastBackground = 'text-bg-success';
    }

    useEffect(() => {
        // const toastLiveExample = document.getElementById('liveToast');
        // const toast = new bootstrap.Toast(toastLiveExample)
        // toast.show()

        // setTimeout(function(){
        //     toast.hide();
        // }, 3000);
    })
    return (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div className={`toast align-items-center border-0 ${toastBackground}`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body">{message}</div>
                    <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>
    );
};

export default Toast;