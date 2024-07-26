import React from 'react';
import { Button } from "devextreme-react";

const CustomButton = ({ icon, text, width, color, textColor, onClick, disabled }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      style={{
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: '5px',
        borderStyle: 'solid',
        borderColor: '#e0e0e0',
        borderWidth: '1px',
        width: width ? width : 'max-content',
        backgroundColor: disabled ? 'bfbfbf' : color,
        color: disabled ? '#bfbfbf' : textColor,
      }}>
      {icon ?
        <>
          <div style={{ marginRight: 10 }}>
            {icon}
          </div>
          <span style={{ fontWeight: 'bold' }}>{text}</span>
        </>
        :
        <span style={{ fontWeight: 'bold' }}>{text}</span>
      }
    </Button >
  );
};

export default CustomButton;

