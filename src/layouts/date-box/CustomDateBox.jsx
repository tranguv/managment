import DateBox, { DateBoxTypes } from 'devextreme-react/date-box';
import React from 'react';

const dateLabel = { 'aria-label': 'Date' };

const CustomDateBox = ({ label }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {label}
            <DateBox
                defaultValue={new Date()}
                inputAttr={dateLabel}
                type="date"
                displayFormat="dd/MM/yyyy"

            />
        </div>
    );
};

export default CustomDateBox;
