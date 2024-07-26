import React, { useEffect, useRef, useState } from 'react';
import { Input } from 'reactstrap';
import { IoSend } from 'react-icons/io5';
import { IoMdAttach } from 'react-icons/io';
import { VscChromeMinimize } from 'react-icons/vsc';
import ChatText from './ChatText';
import { useSelector } from 'react-redux';

const ChatBox = ({ texts, sendText, minimizeChatBox }) => {
    const { user } = useSelector((state) => state.userStore);
    const [text, setText] = useState('');
    const [isEndChat, setIsEndChat] = useState(false);
    const messagesEndRef = useRef(null);

    const handleSendText = () => {
        if (text.trim()) {
            sendText({ text, user });
            setText('');
        }
    };

    const handleEndChat = () => {
        setIsEndChat(true);
    };


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [texts, setIsEndChat]);

    return (
        <div
            style={{
                backgroundColor: 'white',
                width: '290px',
                height: '340px',
                borderRadius: '7px',
                display: 'flex',
                justifyContent: 'center',
                zIndex: 9999,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                flexDirection: 'column',
            }}
        >
            <div
                style={{
                    backgroundColor: '#2196f3',
                    height: '13%',
                    top: 0,
                    width: '100%',
                    zIndex: '9999',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                }}
            >
                <div
                    style={{
                        color: 'white'
                    }}
                >
                    Support
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '10px',
                        alignItems: 'center',
                        color: 'white'
                    }}
                >
                    <button style={{ border: 'none', backgroundColor: 'inherit', color: 'white' }} onClick={handleEndChat}>
                        End Chat
                    </button>
                    <VscChromeMinimize size={25} color='white' onClick={minimizeChatBox} />
                </div>
            </div>
            <div
                style={{
                    height: '77%',
                    overflowY: 'scroll'
                }}
            >
                {texts.map((text, index) => (
                    text?.user?.email === 'sandra@example.com' ?
                        (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: '10px',
                                    paddingLeft: '10px',
                                    paddingRight: '10px',
                                    marginTop: '10px',
                                }}
                            >
                                <ChatText messageData={text} backgroundColor={'#f1f0f0'} />
                            </div>
                        )
                        :
                        (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    gap: '10px',
                                    paddingLeft: '10px',
                                    paddingRight: '10px',
                                    marginTop: '10px',
                                }}
                            >
                                <ChatText messageData={text} backgroundColor={'#f1f0f0'} />
                            </div>
                        )))
                }
                {
                    isEndChat && (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <div>Chat has ended</div>
                        </div>
                    )
                }
                <div ref={messagesEndRef} />
            </div>
            <div
                style={{
                    height: '15%',
                    width: '100%',
                    bottom: 0,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                }}
            >
                <IoMdAttach size={30} />
                <Input
                    style={{
                        border: '1px solid #ced4da',
                        borderRadius: '1rem',
                        outline: 'none',
                        boxShadow: 'none',
                    }}
                    onFocus={(e) => e.target.style.boxShadow = 'none'}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <IoSend size={25} onClick={handleSendText} />
            </div>
        </div>
    );
};

export default ChatBox;
