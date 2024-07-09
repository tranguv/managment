import React, { useState, useCallback } from 'react';
import CustomTextBox from '../text-box/CustomTextBox';
import CustomDateBox from '../date-box/CustomDateBox';
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCheckBox from '../checkbox/CustomCheckBox';
import CustomFileUploader from '../single-file-uploader/CustomFileUploader';
import './AddItem.css';

const styles = {
    colStyle: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    }
};
const AddItem = ({ type }) => {
    const [isTrangThaiChecked, setIsTrangThaiChecked] = useState(false);
    const [isXoaTam, setIsXoaTam] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const onSelectedFilesChanged = useCallback((e) => {
        setSelectedFiles(e.value);
    }, [setSelectedFiles]);

    const handleTrangThaiChange = useCallback(() => {
        setIsTrangThaiChecked(!isTrangThaiChecked);
    }, [isTrangThaiChecked]);

    const handleXoaTamChange = useCallback(() => {
        setIsXoaTam(!isXoaTam);
    }, [isXoaTam]);


    let text;
    if (type === "user") {
        text = "Them nguoi dung";
    } else if (type === "products") {
        text = "Them san pham";
    } else if (type === "category") {
        text = "Them danh muc";
    }

    return (
        <Container>
            <Row xs={3} sm={3} md={3}>
                <Col style={styles.colStyle}>
                    <CustomTextBox label={text} />
                    <CustomCheckBox label={"Trang thai"} value={isTrangThaiChecked} onValueChanged={handleTrangThaiChange} />
                    <CustomFileUploader onSelectedFilesChanged={onSelectedFilesChanged} />
                </Col>
                <Col style={styles.colStyle}>
                    <CustomDateBox label={"Ngay tao"} />
                    <CustomCheckBox label={"Xoa Tam"} value={isXoaTam} onValueChanged={handleXoaTamChange} />
                </Col>
                <Col style={styles.colStyle}>
                    <CustomDateBox label={"Ngay cap nhat"} />
                </Col>
            </Row>
        </Container>
    );
};

export default AddItem

