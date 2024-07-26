import React from 'react';
import { ToastPopup } from '../../layouts';
import { toast } from 'react-toastify';
import { ChatBox } from '../../components';
import { texts } from '../../utils/chat';

const TestPage = () => {
    const handleOnClick = () => {
        toast.warn('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition={ Bounce },
        });
    };


    const [text, setText] = React.useState(texts);
    const sendText = ({ message }) => {
        // Implement your send text functionality here
        text.push(message);
    };

    return (
        <div>
            {/* <button onClick={handleOnClick}>Show Loader</button>
            <ToastPopup /> */}
            <ChatBox texts={text} sendText={sendText} />
        </div >
    );
};

export default TestPage;
