import React from 'react';
import TextInputContainer from '../text-input/TextInputContainer';
import { Col, Container } from 'reactstrap';

const SearchPanel = ({ handleSearch }) => {
    return (
        <div>
            <Container style={{ flexDirection: 'row', gap: 5 }}>
                <Col className="d-flex">
                    <TextInputContainer
                        textLabel={'Tên sản phẩm'}
                        placeholder={'Nhập dữ liệu'}
                    />
                </Col>
                <Col className="d-flex">
                    <TextInputContainer
                        textLabel={'Tạo từ ngày'}
                        placeholder={'dd//mm/yyyy'}
                    />
                </Col>
                <Col className="d-flex">
                    <TextInputContainer
                        textLabel={'Ngày tạo đến'}
                        placeholder={'dd//mm/yyyy'}
                    />
                </Col>
            </Container>
        </div>
    );
};

export default SearchPanel

