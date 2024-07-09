import React, { ComponentType } from 'react';
import { Button } from "devextreme-react";

const CustomButton = ({ icon, text, width, color, onClick }) => {
  return (
    <Button
      onClick={onClick}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        borderRadius: '5px',
        borderStyle: 'solid',
        borderColor: '#e0e0e0',
        borderWidth: '1px',
        width: width ? width : '150px',
        backgroundColor: color
      }}>
      <div style={{ marginRight: 15 }}>
        {icon}
      </div>
      <span style={{ fontWeight: 'bold' }}>{text}</span>
    </Button >
  );
};

export default CustomButton;

