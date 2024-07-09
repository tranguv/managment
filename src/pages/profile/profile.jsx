import React, { useState } from 'react';
import { users } from '../../utils/user';
import { userColumns } from '../../utils/table-header';
import { BsSearch, BsPlusLg } from 'react-icons/bs';
import { Col, Container, Row } from 'reactstrap';
import TextInputContainer from '../../layouts/text-input/TextInputContainer';
import { CustomButton, CustomTabBar } from '../../layouts';
import { tabsIconAndText } from '../../utils/tab-text';
import AddItemModal from '../../components/modal-add/AddItemModal';

const Profile = () => {
  const [modalAddItem, setModalAddItem] = useState(false);

  const toggleModalAddItem = () => {
    setModalAddItem(!modalAddItem);
  };

  const handleSearch = () => {
    console.log('search');
  };

  return (
    <div style={{ padding: 20 }}>
      <Container>
        <Row>
          <Col>
            <TextInputContainer
              textLabel={'Tên sản phẩm'}
              placeholder={'Nhập dữ liệu'}
            />
          </Col>
          <Col>
            <TextInputContainer
              textLabel={'Tạo từ ngày'}
              placeholder={'dd//mm/yyyy'}
            />
          </Col>
          <Col>
            <TextInputContainer
              textLabel={'Ngày tạo đến'}
              placeholder={'dd//mm/yyyy'}
            />
          </Col>
        </Row>
      </Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
          marginBottom: 20,
          gap: 10,
        }}
      >
        <CustomButton
          text={'Tìm kiếm'}
          color={'blue'}
          icon={<BsSearch />}
          onClick={handleSearch}
        />
        <CustomButton
          text={'Thêm mới'}
          color={'green'}
          icon={<BsPlusLg />}
          onClick={toggleModalAddItem}
        />
      </div>
      <div>
        <CustomTabBar
          tabsIconAndText={tabsIconAndText}
          dataSource={users}
          columns={userColumns}
        />
      </div>
      <AddItemModal isOpen={modalAddItem} toggle={toggleModalAddItem} />
    </div>
  );
};

export default Profile;
