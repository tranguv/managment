import React from 'react';
import { CheckBox, CheckBoxTypes } from 'devextreme-react/check-box';

const CustomCheckBox = ({ label, onValueChanged, value }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div>{label}</div>
            <CheckBox onOptionChange={onValueChanged} value={value} />
        </div>
    );
};

export default CustomCheckBox

