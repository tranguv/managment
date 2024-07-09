import React, { useState } from 'react';
import TextBox, { TextBoxTypes } from 'devextreme-react/text-box';

const CustomTextBox = ({ label }) => {
    // const [];
    const [ngayTao, setNgayTao] = useState('');
    const [ngayCapNhat, setNgayCapNhat] = useState('');
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div>{label}</div>
            <TextBox
                defaultValue=""
                placeholder='Nhap du lieu'
            />
        </div>
    );
};

export default CustomTextBox;
