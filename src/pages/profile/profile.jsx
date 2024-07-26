import React from 'react';
import { useSelector } from 'react-redux';

const profile = () => {
    const { user } = useSelector((state) => state.user);
    return (
        <div className='children-content'>
            <h2 className={'content-block'}>Profile</h2>
            <Container>
                <Row>
                    <Col>

                    </Col>
                    <Col>
                        <div>
                            
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default profile

