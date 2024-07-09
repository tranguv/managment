import { TextBox } from 'devextreme-react';
import React from 'react';

const TextInputContainer = ({ textLabel, placeholder }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <div
                style={{
                    backgroundColor: '#f2d1a0',
                    borderBottomWidth: 2,
                    borderBottomColor: 'black',
                    width: '40%',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                }}>
                {textLabel}
            </div>
            <TextBox
                style={{ width: '60%' }}
                placeholder={placeholder}
            />
        </div>
    );
};

export default TextInputContainer

