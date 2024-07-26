import React from 'react';

const ChatText = ({ messageData, backgroundColor }) => {
    return (
        <div>
            <span
                style={{
                    fontSize: '12px',
                    color: '#000',
                    marginLeft: '5px',
                }}
            >
                {messageData?.user?.name}
            </span>
            <div
                style={{
                    backgroundColor: backgroundColor,
                    borderRadius: '1rem',
                    padding: '10px',
                    maxWidth: '200px',
                    wordWrap: 'break-word',
                }}
            >
                {messageData?.text}
            </div>
            <div>
                <span
                    style={{
                        fontSize: '12px',
                        color: '#000',
                        marginLeft: '10px',
                    }}
                >
                    {messageData?.time}
                </span>
            </div>
        </div>
    );
};

export default ChatText

