import React from 'react';

const BoxModal = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: 'white',
                width: '230px',
                height: '300px',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                padding: 10,
                zIndex: 9999,
                // border: 'black solid 1px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            {children}
        </div>
    );
};

export default BoxModal

