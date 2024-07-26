import { LoadIndicator } from 'devextreme-react';
import React from 'react';

const Spinner = ({ loaderMessage }) => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100vh',
                zIndex: 9999,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
            }
            } >
            <LoadIndicator />
            <div>{loaderMessage}</div>
        </div >
    );
};

export default Spinner

