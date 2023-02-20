import { Toast, ToastContainer } from "react-bootstrap";

const ToastMessage = ({show, message, type, close}) => {
    let toastBg = 'primary';
    if(type === 'error'){
        toastBg = 'danger';
    }else if(toastBg === 'success'){
        toastBg = 'success';
    }

    return (
        <ToastContainer position="bottom-start">
            <Toast
                className="d-inline-block m-1"
                bg={toastBg}
                show={show}
                onClose={close}
            >
                <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                />
                <strong className="me-auto">{`${type.charAt(0).toUpperCase()}${type.substring(1, type.length)}`}</strong>
                </Toast.Header>
                <Toast.Body className='text-white'>
                    {message}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default ToastMessage;