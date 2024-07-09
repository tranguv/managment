import { FileUploader } from 'devextreme-react';
import React from 'react';
import { Alert } from 'reactstrap';

const fileUploaderLabel = { 'aria-label': 'Chọn tệp' };

const CustomFileUploader = ({ onSelectedFilesChanged }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ marginBottom: -10 }}>Hình ảnh</div>
            <div style={{ marginLeft: -10 }}>
                <FileUploader
                    onUploaded={() => Alert("Uploaded")}
                    multiple={true}
                    accept={"*"}
                    uploadMode={"instantly"}
                    inputAttr={fileUploaderLabel}
                    selectButtonText='Chọn tệp'
                    uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
                    onValueChanged={onSelectedFilesChanged}
                />
            </div>
        </div>
    );
};

export default CustomFileUploader;
